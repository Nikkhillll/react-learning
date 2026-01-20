import './NewProduct.css'
import ProductForm from './ProductForm';


function NewProduct(props){

    function saveProduct(product){
        console.log("i am inside new product");
        console.log(product)

        //calling parent function
        props.pranay(product);

    }
 
    return(
        <div className='new-product'>
            {/*prop me function daal diya  */} 
            <ProductForm onSaveProduct={saveProduct}/>
        </div>
    )
}

export default NewProduct;

