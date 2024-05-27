import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../../features/slices/cartSlice'
import { useDispatch } from 'react-redux'

const SingleProduct = () => {

  const product = useSelector((state) => state.products.singleProduct)
  console.log("single product", product)

  const productSize = product[0].size ? product[0].size[0] : "";
  const productColor = product[0].color[0];
  const { id } = useParams();
  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState(productColor)
  console.log("size", size)

  const dispatch = useDispatch()

  return (
    <div>
      {product
        .filter((product) => product.id === id)
        .map((item, index) => {
          return (
            <div key={index}
              className='flex justify-center items-center py-10'
            >
              <div className='pl-44 grow-[2]'>
                <img className='h-[850px] rounded-lg' src={item.img} alt={item.name} />
              </div>
              <div className='grow-[3]'>
                <div className='max-w-lg'>
                  <h5 className='text-2xl font-inter font-bold tracking-normal leading-none pb-4'>{item.name}</h5>
                  <p className='text-orange-700 text-xl font-inter tracking-normal leading-none pb-4'>15% off</p>
                  <p className='text-gray-600 text-xl font-inter tracking-normal leading-none'>{item.text}</p>
                  <div className='pb-4'>
                    {item.size ? (
                      <div>
                        <label htmlFor='countries' className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Pick a size</label>
                        <select className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          name="size"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          id="size">
                          {item.size.map((item, index) => {
                            return <option key={index} value={item}>{item}</option>
                          })}
                        </select>
                      </div>
                    ) : (
                      <div>
                        <label htmlFor='countries' className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Pick a size</label>
                        <select className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          name="size"
                          disabled={true}
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          id="size">
                          {item?.size?.map((item, index) => {
                            return <option key={index} value={item}>{item}</option>
                          })}
                        </select>
                      </div>
                    )}
                  </div>


                  <div>
                    <label htmlFor='color' className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Pick a color</label>
                    <select className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      name="color"
                      value={size}
                      onChange={(e) => setColor(e.target.value)}
                      id="color">
                      {item.color.map((color, index) => {
                        return <option key={index} value={color}>{color}</option>
                      })}
                    </select>
                  </div>

                  <div className='flex justify-center w-full'>
                    <button
                      onClick={() => dispatch(addToCart({
                        id: item.id,
                        name: item.name,
                        size: size,
                        img: item.img,
                        text:item.text,
                        color: color,
                        price: item.price,
                        amount: 1,
                        totalPrice: item.price
                      }))}
                      className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 mt-4 w-full">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

            </div>
          )
        })
      }
    </div>
  )
}

export default SingleProduct