import '../styles/globals.css'
import { Provider } from "react-redux";
import { Provider as AuthProvider } from "next-auth/client";
import { store } from "../app/store";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>
    {/* Gives the session's info to the components via a Provider */}
    <Provider store={store} >
        <Component {...pageProps} />
        
    </Provider>
</AuthProvider>
);
}

export default MyApp
