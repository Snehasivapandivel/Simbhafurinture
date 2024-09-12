import React, { useState } from 'react'
import Navbar from '../Navbar'
import CountdownTimer from '../CountdownTimer';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UserLogin from './UserLogin';
const Home = () => {
  const [show, setShow] = useState(false);

  const [Modalshow, ModalsetShow] = useState(false);

  const handleModalClose = () => ModalsetShow(false);
  const handleModalShow = () => ModalsetShow(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [products, setProducts] = useState([{
    img: 'https://preview.colorlib.com/theme/aranoz/img/product/product_1.png.webp',
    name: 'quartz Belt watch',
    price: 150,
    quantity: 1,
    total: 150,

  },
  {
    img: 'https://preview.colorlib.com/theme/aranoz/img/product/product_2.png.webp',
    name: 'quartz Belt watch',
    price: 150,
    quantity: 1,
    total: 150,

  },
  {
    img: 'https://preview.colorlib.com/theme/aranoz/img/product/product_3.png.webp',
    name: 'quartz Belt watch',
    price: 150,
    quantity: 1,
    total: 150,

  },
  {
    img: 'https://preview.colorlib.com/theme/aranoz/img/product/product_4.png',
    name: 'quartz Belt watch',
    price: 150,
    quantity: 1,
    total: 150,

  },
  {
    img: 'https://preview.colorlib.com/theme/aranoz/img/product/product_1.png.webp',
    name: 'quartz Belt watch',
    price: 150,
    quantity: 1,
    total: 150,

  },
  {
    img: 'https://preview.colorlib.com/theme/aranoz/img/product/product_2.png.webp',
    name: 'quartz Belt watch',
    price: 150,
    quantity: 1,
    total: 150,

  }, {
    img: 'https://preview.colorlib.com/theme/aranoz/img/product/product_3.png.webp',
    name: 'quartz Belt watch',
    price: 150,
    quantity: 1,
    total: 150,

  },
  {
    img: 'https://preview.colorlib.com/theme/aranoz/img/product/product_2.png.webp',
    name: 'quartz Belt watch',
    price: 150,
    quantity: 1,
    total: 150,

  },
  {
    img: 'https://preview.colorlib.com/theme/aranoz/img/product/product_3.png.webp',
    name: 'quartz Belt watch',
    price: 150,
    quantity: 1,
    total: 150,

  }
  ])
  const [cart, setCart] = useState([])
  const [ishomePage, setishomePage] = useState(2)
  const [newValue, setNewvalue] = useState();

  function addToCart(item) {


    setCart([...cart, item]);
    console.log(cart);
    toast.success("Added to cart!");



  }

  function switchpage() {
    setishomePage(1)
    console.log(ishomePage);
    handleClose()

  }


  function increaseQuantity(ind) {
    cart[ind].quantity += 1
    let quant = cart[ind].quantity;
    console.log("increaseQuantiy================", quant)
    setNewvalue(quant)
    cart[ind].total += cart[ind].price

  }

  function decQuantity(ind) {
    cart[ind].quantity -= 1;
    console.log("decreaseQuantity========", cart[ind].quantity);
    setNewvalue(cart[ind].quantity)
    cart[ind].total = cart[ind].total - cart[ind].price


  }

  function deleteIteminCart(index){
    const newTodos = [...cart];
    newTodos.splice(index, 1);
    setCart(newTodos);
  }

  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg sticky-bottom p-3" style={{ backgroundColor: 'rgb(236,253,255)' }}>
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><h3>Aranoz.</h3></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
              <ul class="navbar-nav text-center">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>&nbsp;&nbsp;&nbsp;
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                    Shop
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Shop Category</a></li>
                    <li><a class="dropdown-item" href="#">Product Details</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>&nbsp;&nbsp;&nbsp;
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                    pages
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Shop Category</a></li>
                    <li><a class="dropdown-item" href="#">Product Details</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>&nbsp;&nbsp;&nbsp;
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                    Blog
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Shop Category</a></li>
                    <li><a class="dropdown-item" href="#">Product Details</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>&nbsp;&nbsp;&nbsp;
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                    Contact
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Shop Category</a></li>
                    <li><a class="dropdown-item" href="#">Product Details</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="collapse navbar-collapse justify-content-end me-5" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16" onClick={handleModalShow}>
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg>
                </li>
                
                &nbsp;&nbsp;&nbsp;

                <Modal show={Modalshow} onHide={handleModalClose} variant='transparent'>
        
        <Modal.Body><UserLogin/></Modal.Body>
        
      </Modal>
                <li class="nav-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />

                  </svg>
                </li>&nbsp;&nbsp;&nbsp;
                <li className="nav-item">

                 

                    <div className="cart">
                      <span className="count">{cart.length}</span>

                      <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "22px", height: "22px", fill: "black" }} fill="" className="bi bi-cart3 material-icons" viewBox="0 0 16 16" onClick={handleShow}>
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                      </svg>
                    </div>

                  

                  <Offcanvas show={show} onHide={handleClose} placement="end">
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>Cartlist</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      {Array.isArray(cart) && cart.map(cartlist => (<div className="card text-dark bg-light mb-3 " style={{ maxwidth: "540px" }} >
                        <div className="row g-0 justify-content-center ">
                          <div class="col-md-4">
                            <img src={cartlist.img} class="img-fluid rounded-start" alt="..."></img>
                          </div>
                          <div class="col-md-8  d-flex">
                            <div class="card-body ">
                              <h5 class="card-title">{cartlist.name} </h5>
                              {/* <!-- <p class="card-text bg-danger"
                                        >price: ${{ cartlist.price }}</p> --> */}

                              {/* <!-- <button @click="$emit('removecart',index)">remove</button> --> */}
                            </div>
                            <div class="card-footer pt-4" style={{ backgroundcolor: "#f5c332" }}
                            ><h5>${cartlist.price}</h5></div>
                          </div>
                        </div>
                      </div>
                      ))}
                    </Offcanvas.Body>
                    <div class=" offcanvas-footer  text-dark p-3 shadow ">
                      <div class="container-fluid bg-body   ">
                        <div class="row justify-content-around ">
                          <div class="col-md-5 text-center ">
                            <button type="button" class="btn  p-3" aria-label="Close"
                              data-bs-dismiss="offcanvas" onClick={switchpage}>View Order</button>
                          </div>
                          <div class="col-md-5 text-center">
                            <button type="button" class="btn  p-3 text-black " aria-label="Close" data-bs-dismiss="offcanvas"
                              style={{
                                backgroundColor: 'rgb(236,253,255)'
                              }}
                            >Checkout</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Offcanvas>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {ishomePage === 2 ? <div>
        <div class="container-fluid p-4" style={{ backgroundColor: 'rgb(236,253,255)' }}>
          <div className="row justify-content-around">
            <div class="col-md-4 align-self-center">
              <h1>Wooden & cloth sofa </h1>
              <p style={{ lineHeight: '2.0' }}>Incididunt ut labore et dolore magna aliqua quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra</p>
              <button type="button" class="btn btn-danger pa-5">Buy now</button>

            </div>
            <div className="col-md-6 align-self-center mt-5">
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
                  <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_2.png.webp" alt="" className='img-fluid' />
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
                  <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_2.png.webp" alt="" className='img-fluid' />
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
              products.map(item => (
                <div class="card col-md-3 mt-5" style={{ width: '18rem' }}>
                  <img src={item.img} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title text-center">{item.name}</h5>
                    <p class="card-text text-center">${item.price}</p>
                    <a href="#" class="btn  full-width w-100" onClick={() => { addToCart(item) }} style={{ backgroundColor: 'rgb(236,253,255)' }}>Add to cart</a>

                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div class="container-fluid" style={{ backgroundColor: 'rgb(236,253,255)' }}>
          <div class="row justify-content-around mt-5 p-4">
            <div className="col-md-4 align-self-center">
              <img src="https://preview.colorlib.com/theme/aranoz/img/offer_img.png" alt="" class='img-fluid' />
            </div>
            <div className="col-12 col-md-7 align-self-center">
              <h1>Weekly Sale on 60% off all products</h1>
              <CountdownTimer />

            </div>
          </div>
        </div>
      </div> : <div>
        <div className="container-fluid  title p-5">
          <div className="row justify-content-between mt-5 ">
            <div className="col-md-5  mt-2 text-lg-start text-center">
              <h1>Your Order.</h1>
            </div>
            <div className="col-md-5   mt-2 text-lg-end text-center  text-white">
              <ul className="sb-breadcrumbs">
                <li><a href="/">Home</a></li>

                <li>Cart</li>
              </ul>
            </div>
          </div>
        </div>
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col">Products</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Total</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody >
            {Array.isArray(cart) && cart.map((cart, index) => (
              <tr  >
                <td scope="row">
                  <div className="card  mb-3 border-0" style={{ maxWidth: "300px", }}>
                    <div className="row g-0  ">
                      <div className="col-md-4">
                        <img src={cart.img} className="img-fluid rounded-start" alt="..."></img>
                      </div>
                      <div className="col-md-8  d-flex">
                        <div className="card-body ">
                          <h5 className="card-title">{cart.name} </h5>

                        </div>

                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4">

                  <button type="button "
                    className="rounded border-0" onClick={() => decQuantity(index)} id="decrement">-</button>&nbsp;
                  {cart.quantity}&nbsp;
                  <button type="button" className=" rounded border-0 " onClick={() => increaseQuantity(index)} >+</button>
                </td>
                <td className="p-4">{cart.price}</td>
                <td className="p-4">{cart.total}</td>
                <td className="p-3">
                  <button type="button" className="btn border-0" onClick={()=>{deleteIteminCart(index)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                    </svg></button></td>
              </tr>
            ))}
          </tbody>

        </table>
        <div className="container">
          <div className="row justify-content-end">
            <div className="card col-11  mb-3 mt-5 border-0 " style={{ maxWidth: "30rem" }}>

              <div className="card-body mt-3 p-3  ">
                <div className="d-flex justify-content-between "><h5 className="card-text">Subtotal:</h5><p></p></div> <br></br>
                <div className="d-flex justify-content-between "><h5 className="card-text">Estimated shipping::</h5><p>40</p></div> <br></br>
                <div className="d-flex justify-content-between "><h4 className="card-text">Total:</h4><h4 ></h4></div> <br />
              </div>
              <div className="card-footer bg-transparent row justify-content-between ">
                <div className="col-md-6 text-center mt-2">
                  <button type="button" className="btn p-3  " aria-label="Close" onClick={() => { setishomePage(2) }}
                    data-bs-dismiss="offcanvas" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                    </svg> &nbsp;&nbsp;Continue Shopping</button>
                </div>
                <div className="col-md-5 text-center mt-2">
                  <button type="button" className="btn  p-3 text-black"
                    style={{
                      backgroundColor: 'rgb(236,253,255)', color: 'black'
                    }}

                  >Checkout</button>

                </div></div>
            </div>
          </div>
        </div>




      </div>}
      <ToastContainer />
    </>
  )
}

export default Home