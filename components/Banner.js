import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Banner() {
    return (
        <div className="mt-6 max-w-[1500px]">
        
  <Carousel 
  className="mt-6"
  autoplay
  infiniteLoop
  showStatus={false}
  showIndicators={false}
  showThumbs={false}
  interval={3000}
  >
                <div>
                <img src="https://github.com/sanyagoyal2000/myntra-clone/blob/main/components/images/h1.jpg?raw=true" />
                  
                </div>
                <div>
                <img src="https://github.com/sanyagoyal2000/myntra-clone/blob/main/components/images/h2.jpg?raw=true" />
                   
                </div>
                <div>
                <img src="https://github.com/sanyagoyal2000/myntra-clone/blob/main/components/images/h3.jpg?raw=true" />
                   
                </div>
                <div><img src="https://github.com/sanyagoyal2000/myntra-clone/blob/main/components/images/h4.jpg?raw=true" /></div>
            </Carousel>
        </div>
    )
}

export default Banner
