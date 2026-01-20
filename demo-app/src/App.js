import './App.css';
import NewProduct from './Components/NewProduct';

import Products from './Components/Products';

const App=()=> {
  const products =[
    {
     id:'p1',
     title: 'nirma',
     amount: 100,
     date:new Date(2021,8,10),
    },

     {
      id: "p2",
     title: "surf excel",
      amount:200,
      date:new Date(2021,2,2)
    },

     {
      id: "p3",
     title: "tide",
      amount:130,
      date:new Date(2021,12,28),
    },

     {
      id: "p4",
     title: "maggi",
      amount:450,
      date:new Date(2021,5,5),
    },

   
  ];

  
  return (
    <div>
      <NewProduct/>
      <Products items ={products}/>
   </div>
  );
}

export default App;
