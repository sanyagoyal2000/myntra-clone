import {useState} from "react"
import {StarIcon} from "@heroicons/react/solid"
const MIN_RATING = 1;
const MAX_RATING = 5;
function Product({id,title,price,category,image}) {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
    );
    const [isNew] = useState(Math.random() < 0.5);
    return (
        <div className=" m-1 z-40 p-5 ">
            
     <div className="card-zoom">    
    <img src={image} alt=" random img" className="card-zoom-image w-[180px]  object-center rounded-lg shadow-md"/>  </div>   
    
 <div className="relative px-4 -mt-16 max-w-sm ">
   <div className="bg-pink-50 p-6 rounded-lg shadow-lg">
    <div className="flex items-baseline">
    {isNew && <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
        New
      </span>}
      <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
    Tshirt
  </div>  
    </div>
    
    <p className="mt-1 text-xl font-semibold font-pt break-words">{title}</p>
 
  <div className="mt-1">
    Rs.{price*73}
    
  </div>
  <div className="mt-4">
    
    <span className="flex text-xs text-gray-600"> {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}</span>
            
    <button className="rounded bg-red-400 uppercase text-white p-2 font-lato text-xs">Add to Cart</button>
  </div>  
  </div>
 </div>
  
</div>
            
        
    )
}

export default Product
