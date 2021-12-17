import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
function Footer() {
    return (
        <div className="bg-gray-100 pt-5 pl-15 w-screen ">
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-y-10 max-w-7xl px-32 py-14">
                <div className="space-y-5 text-sm text-gray-800 font-rubik">
                   
                        <p className="uppercase font-bold text-gray-700 text-sm font-inter">ONLINE SHOPPING</p>
                        <p>Men</p>
                        <p>Women</p>
                        <p>Kids</p>
                        <p>Home & Living</p>
                        <p>Beauty</p>
                        <p>Studio</p>
                        <p>Giftcards</p>
                        <p>Insider</p>
                        
                        

                </div>
                <div className="space-y-5 text-sm text-gray-800 font-rubik">
                
                <p className="uppercase font-bold text-gray-700 text-sm font-inter">Useful Links</p>
                        <p>Contact Us</p>
                        <p>FAQ</p>
                        <p>T&C</p>
                        <p>Terms of Use</p>
                        <p>Track Orders</p>
                        <p>Shipping</p>
                        <p>Cancellation</p>
                        <p>Return</p>
                        <p>Careers</p>
                        <p>Privacy Policy</p>
                        <p>Site Map</p>
                        
                        
                </div>
                <div className="space-y-5 text-sm text-gray-800 font-rubik">
                    <img src=
                </div>
                
                </div>
                <div className="ml-12 pl-12 max-w-7xl">
                    <hr className="color-bg gray-300"/>
                    <div>
                   
                  
                    <div className="flex justify-end  text-gray-700 text-xs mt-0 pb-0 gap-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pt-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
</svg>
<p><u>English(IN)</u></p>
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pt-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<p>INR</p>
<FacebookIcon/>
<TwitterIcon/>
<InstagramIcon/>



                    </div>
                    </div>

                </div>
            
            
        </div>
    )
}

export default Footer