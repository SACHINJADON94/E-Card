import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import {addCart} from "../redux/action"
export default function Product() 
{
    var{id} = useParams()
    var[product,setProduct] = useState([])
    var[loading,setLoading] = useState(false)

   var dispatch = useDispatch()
   const addProduct = (product)=>
   {
    dispatch(addCart(product))
   }

    useEffect(()=>
        {
            setLoading(true)
    axios({
        method:"get",
        url:`https://fakestoreapi.com/products/${id}`
    }).then(res=>
    {
        console.log(res.data)
        setProduct(res.data)
    }).catch((err)=>
    {
        console.log(err)
    }).finally(()=>setLoading(false))
    
        },[])
    const Loading=()=>
    {
    return(
        <>
                    <div className="col-md-6">
                     <Skeleton height={400}/> 
                    </div>
                    <div className="col-md-6" style={{lineHeight:2}}>
                     <Skeleton height={50} width={300}/>
                     <Skeleton height={75}/>
                     <Skeleton height={25} width={150}/>
                     <Skeleton height={50}/>
                     <Skeleton height={150}/>
                     <Skeleton height={50} width={100}/>
                     <Skeleton height={50} width={100} style={{marginLeft:6}}/>
                    </div>

        </>
    )
    }
    const ShowProduct=()=>
    {
   return(
    <>
     <div className="col-md-6">
        <img src={product.image} alt={product.title} height="400px" width="400px" />
     </div>
     <div className="col-md-6">
    <h4 className='text-uppercase text-black-50'>
        {product.category}
    </h4>
    <h1 className='display-5'>{product.title}</h1>
    <p className='lead fw-bolder'>
   Rating {product.rating && product.rating.rate}
    </p>
    <h3 className='fw-bold my-4 display-6'>&#8377;{product.price*85}</h3>
    <p className='lead'>{product.description}</p>
    <button type='button' className='btn btn-outline-danger px-4 py-2' onClick={()=>addProduct(product)}>Add_To_Cart</button>
    <Link to='/cart' className='btn btn-outline-danger ms-2 px-3 py-2'>Go_To_Cart</Link>
     </div>
    </>
   )
    }
  return (
   <>
   <div className="container py-4">
    <div className="row py-5">
        {loading ? <Loading/>:<ShowProduct/>}
    </div>
   </div>
   </>
  )
}
