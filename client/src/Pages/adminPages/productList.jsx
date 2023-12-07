import Product from "./product";
const ProductList = (props)=>{
   
    return( 
        <div>  
            {props.products.map((e,i)=>{
                return(
                    <Product product = {e} key={i} fetchProducts={props.fetchProducts}/>
                )
            })}
        </div>
    )
}
export default ProductList; 