import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'

export default function Home() {

  var [data,setData] = useState([])
  var[loading,setLoading] = useState(false)

useEffect(()=>
  {
  setLoading(true)
  axios({
    method:"get",
    url:`https://fakestoreapi.com/products`
  }).then((res)=>
  {
    console.log(res.data)
    setData(res.data)
  }).catch((err)=>
  {
    console.log(err)
  }).finally(()=>setLoading(false))
},[])

const Loading = () =>
{
  return(
    <>
      <div className="col-md-3">
    <Skeleton height={350}/>
      </div>
      <div className="col-md-3">
    <Skeleton height={350}/>
      </div>
      <div className="col-md-3">
    <Skeleton height={350}/>
      </div>
      <div className="col-md-3">
    <Skeleton height={350}/>
      </div>
    </>
  )
}

const ShowProducts = ()=>
{
  
}

  return (
    <>
    <div className='container-fluid'>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="assets/images/2.jpg" class="d-block w-100" alt="..." height="550px" width="100%"/>
    </div>
    <div class="carousel-item">
      <img src="assets/images/3.jpg" class="d-block w-100" alt="..." height="550px" width="100%"/>
    </div>
    <div class="carousel-item">
      <img src="assets/images/4.jpeg" class="d-block w-100" alt="..." height="550px" width="100%"/>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>

<div className='container'>
<h1 className="text-center display-4 fw-bold text-primary py-5 my-5 bg-dark text-white">
<span className="border-bottom border-primary">Featured Products</span>
</h1>

<hr></hr>
  <div className="row">
    
      {
        data.map((product)=>
        {
          return <div className="col-xxl-4 col-lg-4 col-md-4 col-12">
            <div class="card" style={{height:'400px'}}>
  <img src={product.image} class="card-img-top" alt="..." height="200px" width="100%"/>
  <div class="card-body">
    <h5 class="card-title">{product.title.slice(0,19)}</h5>
    <h5 class="card-title">&#8377;{product.price*85}</h5>
    <p class="card-text">{product.description.slice(0,70)+"...."}</p>
    <a href={`/product/${product.id}`} class="btn  btn-sm w-100 mb-3 btn-outline-danger">Buy Now</a>
  </div>
</div>
</div>
      
        })
      }

    </div>
  </div>
  <div className='row justify-content-center'>
    {
      loading ?<Loading/> :<ShowProducts/>
    }
  </div>


    </>
  )
}
