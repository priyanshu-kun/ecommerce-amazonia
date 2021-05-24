import React,{useEffect,useState} from 'react'
import { useSelector } from "react-redux"
import Rating from "../../Components/rating/Rating"
import { Link } from "react-router-dom"
import {useDispatch} from "react-redux"
import ListBox from "./ListBox"
import Preloader from "../../Components/preloader/Preloader"
import {productDetails} from "../../Actions/product.actions"
import "./product-page.css"

// Quantity counts
const Qty = [
    { num: '1'},
    { num: '2' },
    { num: '3' },
    { num: '4'},
    { num: '5' },
    { num: '6'},
    { num: '7'},
    { num: '8'},
    { num: '9'},
    { num: '10'},
    { num: '11'},
    { num: '12'},
    { num: '13'},
    { num: '14'},
    { num: '15'},
    { num: '16'},
    { num: '17'},
    { num: '18'},
    { num: '19'},
    { num: '20'},
  ]

function ProductsPage({history,match: {params: {id}}}) {


    //for controling quantity select values
    const [selected, setSelected] = useState(Qty[0])

    const dispatch = useDispatch();
    const product_id = id;
    const getProductDetails = useSelector((state) => state.prodDetails)
    const { error = {}, loading = true, product = {} } = getProductDetails;
    

    useEffect(() => {
        if(loading) {
            dispatch(productDetails(product_id))
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleCartSubmit = () => {
        history.push(`/products/cart/${product_id}?qty=${selected.num}`)
    }

    return (
        <div className="mt-24">
            <Link to="/" className="product-heading text-black  ml-6 text-2xl opacity-30" >Home Page &gt;</Link>
            {
                 
            loading ? 
                <Preloader /> :
                    error.msg !== undefined ?
                <h1 className="p-12 rounded-2xl mt-12 bg-red-100 text-red-700">This is the fucking error don't messed up - {error.msg}🙂</h1>
                : 
                <div className="row product-page mt-4">
                    <div style={{border: "1px solid rgba(0,0,0,0.12)"}}  className="col-1 flex items-center rounded-2xl">
                        <img className="transform scale-75" src={product.image} alt={product.title} />
                    </div>
                    <div className="col-2 pl-16 md:my-6 sm:my-6 rounded-2xl pt-8 pb-6">
                        <ul>
                            <li>
                                <h1 className="text-4xl">{product.title}</h1>
                            </li>

                            <li>
                                <Rating rating={product.rating} reviews={product.reviews} />
                            </li>
                            <hr className="mt-8 w-4/5" />
                            <li className="my-4">
                                <h1 className="text-4xl">
                                    <span className="opacity-60 text-2xl mr-2">Price:</span>
                                    <span className="text-green-500">${product.price}</span>
                                </h1>
                            </li>
                            <li >
                                <span className="block mb-2 text-2xl mr-2">Description:</span>
                                <span className="block opacity-50 tracking-wider text-2xl text-justify w-4/5">{product.description}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3 md:flex md:justify-center">
                        <div className="card-body p-8 rounded-xl md:w-full">
                            <div className="my-4 flex w-full justify-between items-center seller">
                                <h1>Seller</h1>
                                <h3 className=" text-2xl opacity-60">Apple</h3>
                            </div>
                            <hr />
                            <ul className="mt-6">
                                <li>
                                    <div className="flex w-full justify-between items-center">
                                        <h1 className="text-2xl opacity-60">Price</h1>
                                        <div className="price text-3xl">${product.price}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex w-full justify-between items-center -mt-6">
                                        <h1 className="text-2xl opacity-60">Status</h1>
                                        <div className="status">
                                            {
                                                product.stock > 0 ? (
                                                    <span className="text-green-500">In stocks</span>)
                                                    :
                                                    (<span className="text-red-500">Out of stocks</span>)
                                            }
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex w-full justify-between items-center -mt-2">
                                        <h1 className="text-2xl opacity-60">Qty</h1>
                                        <div className="price text-3xl">
                                            <ListBox Qty={Qty} selected={selected} setSelected={setSelected} />
                                        </div>
                                    </div>
                                </li>
                                {
                                    product.stock > 0 && <li className="mt-8 product-page-btn">
                                    <button onClick={handleCartSubmit} className="
                                          text-white bg-green-500 w-full 
                                          flex justify-center items-center 
                                          py-6 rounded-xl mb-3 transition 
                                          duration-200 hover:bg-green-600">Add to Cart</button>
                                    <button className="
                                          border border-green-300 text-green-500 w-full 
                                          flex justify-center items-center py-6 rounded-xl 
                                          transition duration-200 
                                          hover:border-transparent hover:bg-yellow-500  
                                          hover:text-white">Buy Now</button>
                                    </li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>

             }
        </div>
    )
}

export default ProductsPage