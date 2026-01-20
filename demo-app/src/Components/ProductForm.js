import { useState } from 'react';
import './ProductForm.css'

function ProductForm(){

    const[title,setTitle]=useState('');
    const[date,setDate]=useState('');
 
    function titleChangeHandler(event){
        setTitle(event.target.value);
        console.log(event.target.value);


    }

    function dataChangeHandler(event){
        setDate(event.target.value);
        console.log("printing");
        console.log(title);
        console.log(date);
    }



    return (<form>
        <div className='new-product_title'>
            <label>Title</label>
            <input type='text' onChange={titleChangeHandler}></input>
        </div>
        <div className='new-product_date'>
            <label>Date</label>
            <input type = 'date' min='2023-01-01' max='2023-12-12' onChange={dataChangeHandler}></input>
        </div>
        <div className='new-product_button'>
            <button type = 'submit'>Add Product</button>
        </div>
    </form>)

}

export default ProductForm;