import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';

export default function Men() {

  var [data, setData] = useState([])
  var[filter, setFilter] = useState(data)
  var[loading, setLoading] = useState(false)
  

useEffect(()=>
    {
  setLoading(true)
  axios({
    method:"get",
    url:`https://fakestoreapi.com/products`
  }).then(res=>
  {
    console.log(res.data)
    setData(res.data)
    setFilter(res.data)
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

const filterProduct = (cat)=>
{
    let filtered = data.filter((x)=>x.category===cat)
    setFilter(filtered);
}

const ShowProducts = () =>
{
   return(
    <>
    <div className='buttons d-flex justify-content-center mb-5 pb-5'>
  <button className='btn btn-dark me-2' onClick={()=>setFilter(data)}>All</button>
  <button className='btn btn-outline-dark me-2 border-2 border-dark' onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
  <button className='btn btn-outline-dark me-2 border-2 border-dark' onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
  <button className='btn btn-outline-dark me-2 border-2 border-dark' onClick={()=>filterProduct("jewelery")}>Jewelery</button>
  <button className='btn btn-outline-dark me-2 border-2 border-dark' onClick={()=>filterProduct("electronics")}>Electronics</button>
</div>

      {
        filter.map((product) =>
        {
          return (
            <>

          <div className="col-md-3">
            <div class="card">
  <img src={product.image} class="card-img-top" alt={product.title.slice(0,12)} height="200px" width="100%"/>
  <div class="card-body">
    <h5 class="card-title">{product.title.slice(0,19)}</h5>
    <h5 class="card-title lead fw-bold">&#8377;{product.price*85}</h5>
    <p class="card-text ">{product.description.slice(0,50)+"...."}</p>
    <a href={`/product/${product.id}`} class="btn btn-outline-danger btn-sm w-100">Buy Now</a>
  </div>
</div>
</div>
      </>

          )
        })
    }
    </>
   )
}
return (
    <>
    
    <div className='container my-3 py-3'>
        <div className="row">
            <div className="col-12 mb-0">
            <h2 className="display-4 fw-bold text-center text-white bg-primary mb-4 mt-4 p-2 rounded">Latest Products</h2>


                <hr></hr>
            </div>
        </div>
    <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
    </div>
    </div>
    
    </>
)
}

