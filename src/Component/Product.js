import React from 'react'

function Productlist(props) {
    const {products} = props;
  return (
    <div>
      <h1 style={{fontFamily: 'inherit'}}>HD BIKE WORLD</h1>
        {products.map((product)=>(
            <div>
               <ul> {product.no}.
                <li style={{padding: 10,fontFamily: 'cursive',fontSize: 20}}>Name : {product.name}</li>
                <li style={{padding: 10,fontFamily: 'cursive',fontSize: 20}}>Price : {product.price}</li>
                <li><img src={product.imageUrl} style={{height:"100px",weight:"100px"}} alt={product.name}/></li>
                </ul>
            </div>
        ))}
    </div>
  )
}

export default Productlist