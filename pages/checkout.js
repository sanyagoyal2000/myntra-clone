import Header from "../components/Header"
import Footer from "../components/Footer"
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import { useSession } from "next-auth/client";
import CheckoutProduct from "../components/CheckoutProduct";

import { groupBy } from "lodash";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
const stripePromise = loadStripe(process.env.stripe_public_key); // Variable d'environnement définie par le fichier next.config.js, pour le front

function Checkout() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const groupedItems = Object.values(groupBy(items, "id"));
    const [session] = useSession();
    async function createCheckoutSession() {
        const stripe = await stripePromise;

        // Call the backend to create a checkout session...
        const checkoutSession = await axios.post(
            "/api/create-checkout-session",
            {
                items,
                email: session.user.email,
            }
        );

        // After have created a session, redirect the user/customer to Stripe Checkout
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id,
        });

        if (result.error) {
            alert(result.error.message); // @todo : Improve that!
        }
    }

    return (
        
         <div>
            <Header />

            <main className="lg:flex max-w-screen-2xl mx-auto">
                {/* Left */}
                <div className="flex-grow m-8 shadow-sm">
                    <Image
                        src="https://raw.githubusercontent.com/sanyagoyal2000/myntra-clone/main/components/images/b1.jpeg"
                        width={1100}
                        height={300}
                        objectFit="contain"
                    />

                    <div className="flex flex-col p-5 space-y-50 bg-white">
                        <h1
                            className={`text-3xl ${
                                items.length > 0 ? "border-b pb-4" : "pb-2"
                            }`}>
                            {items.length === 0
                                ? "Your Myntra-clone Basket is empty."
                                : "Shopping Basket"}
                        </h1>
                        <TransitionGroup>
                            {groupedItems.map((group, i) => (
                                <CSSTransition
                                    key={group[0].image}
                                    timeout={500}
                                    classNames="item">
                                    <CheckoutProduct
                                        id={group[0].id}
                                        title={group[0].title}
                                        rating={group[0].rating}
                                        price={group[0].price}
                                        category={group[0].category}
                                        image={group[0].image}
                                        isNew={group[0].isNew}
                                        quantity={group.length}
                                    />
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </div>
                </div>

                {/* Right */}
                <CSSTransition
                    in={items.length > 0}
                    timeout={300}
                    classNames="disappear"
                    unmountOnExit>
                    <div className="flex flex-col bg-white p-10 shadow-md">
                        <h2 className="whitespace-nowrap">
                            Subtotal ({items.length} items):{" "}
                            <span className="font-bold">
                                <Currency quantity={total*73} currency="INR" />
                            </span>
                        </h2>

                        <button
                            role="link"
                            onClick={createCheckoutSession}
                            disabled={!session}
                            className={`border mt-2  ${
                                !session &&
                                "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed hover:from-gray-300"
                            }`}>
                            {!session
                                ? "Sign in to checkout"
                                : "Proceed to checkout"}
                        </button>
                    </div>
                </CSSTransition>
            </main>
        </div>
    )
}

export default Checkout
