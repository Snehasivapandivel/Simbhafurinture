import React, { useState } from 'react'
import Navbar from '../Navbar'
import CountdownTimer from '../CountdownTimer';
const Home = () => {

  const [products,setProducts] = useState([{
    img:'https://preview.colorlib.com/theme/aranoz/img/product/product_1.png.webp',
    name:'quartz Belt watch',
    price:'$150',
    quantity:1

  },
  {
    img:'https://preview.colorlib.com/theme/aranoz/img/product/product_2.png.webp',
    name:'quartz Belt watch',
    price:'$150',
    quantity:1

  },
  {
    img:'https://preview.colorlib.com/theme/aranoz/img/product/product_3.png.webp',
    name:'quartz Belt watch',
    price:'$150',
    quantity:1

  },
  {
    img:'https://preview.colorlib.com/theme/aranoz/img/product/product_4.png',
    name:'quartz Belt watch',
    price:'$150',
    quantity:1

  },
  {
    img:'https://preview.colorlib.com/theme/aranoz/img/product/product_1.png.webp',
    name:'quartz Belt watch',
    price:'$150',
    quantity:1

  },
  {
    img:'https://preview.colorlib.com/theme/aranoz/img/product/product_2.png.webp',
    name:'quartz Belt watch',
    price:'$150',
    quantity:1

  },{
    img:'https://preview.colorlib.com/theme/aranoz/img/product/product_3.png.webp',
    name:'quartz Belt watch',
    price:'$150',
    quantity:1

  },
  {
    img:'https://preview.colorlib.com/theme/aranoz/img/product/product_2.png.webp',
    name:'quartz Belt watch',
    price:'$150',
    quantity:1

  },
  {
    img:'https://preview.colorlib.com/theme/aranoz/img/product/product_3.png.webp',
    name:'quartz Belt watch',
    price:'$150',
    quantity:1

  }
])


  return (
   <>
   <div class="container-fluid" style={{backgroundColor:'rgb(236,253,255)'}}>
    <div className="row justify-content-around">
    <div class="col-md-3 align-self-center">
      <h1>Wooden & cloth sofa </h1>
<p>Incididunt ut labore et dolore magna aliqua quis ipsum
suspendisse ultrices gravida. Risus commodo viverra</p>
<button type="button" class="btn btn-danger pa-5">Buy now</button>

    </div>
<div className="col-md-7 align-self-center mt-5">
  <img src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png.webp" alt="" className='img-fluid' />
</div>
</div>
   </div>
   <div className="div">
    <h1 class="col-md-12 text-center mt-5">Featured Category</h1>             
   </div>
   <div className="container">
    <div className="row mt-4 justify-content-around">
      <div className="col-md-6 bg-light p-5">
        <div className="row">
    <div class="col-md-5">
      <h4>Wooden & cloth sofa </h4>



    </div>


<div className="col-md-7 align-self-center mt-5">
  <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_1.png.webp" alt="" className='img-fluid' />
</div>
</div>
</div>
<div className="col-md-4 bg-light p-5">
        <div className="row">
    <div class="col-md-5">
      <h4>Wooden & cloth sofa </h4>



    </div>


<div className="col-md-8 mt-12">
  <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_2.png.webp" alt="" className='img-fluid'/>
</div>
</div>
</div>
</div>
<div className="row mt-4 justify-content-around">
      <div className="col-md-4 bg-light p-5">
        <div className="row">
    <div class="col-md-5">
      <h4>Wooden & cloth sofa </h4>



    </div>


<div className="col-md-6  mt-5">
  <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_3.png.webp" alt="" className='img-fluid' />
</div>
</div>
</div>
<div className="col-md-6 bg-light p-5">
        <div className="row">
    <div class="col-md-5">
      <h4>Wooden & cloth sofa </h4>



    </div>


<div className="col-md-8 mt-12">
  <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_2.png.webp" alt="" className='img-fluid'/>
</div>
</div>
</div>
</div>
</div>

   <div className="div">
    <h1 class="col-md-12 text-center mt-5">Awesome</h1>             
   </div>

   <div className="container">
    <div className="row justify-content-around">
      {
        products.map(item=>(
          <div class="card col-md-3 mt-5" style={{width:'18rem'}}>
  <img src={item.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <p class="card-text">{item.price}</p>
    <a href="#" class="btn btn-primary full-width">Add to cart</a>
  </div>
</div>
        ))
      }
    </div>
   </div>

   <div class="container-fluid" style={{backgroundColor:'rgb(236,253,255)'}}>
    <div class="row justify-content-around mt-5 p-4">
      <div className="col-md-4 align-self-center">
      <img src="https://preview.colorlib.com/theme/aranoz/img/offer_img.png" alt="" class='img-fluid'/>
      </div>
    <div className="col-md-7 align-self-center">
      <h1>Weekly Sale on 60% off all products</h1>
      <CountdownTimer />
     
    </div>
   </div>
   </div>
   
   </>
  )
}

export default Home