import Product from "./Product"
function ProductFeed({products}) {
    return (
        <div className=" overflow max-w-8xl grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:-mt-32 lg:-mt-52 mx-auto">
            
          {products.map(({id,title,price,category,image})=>(
              <Product
              key={id}
              id={id}
              title={title}
              price={price}
              
              category={category}
              image={image}
              
              />
          ))}  
        </div>
    )
}

export default ProductFeed
