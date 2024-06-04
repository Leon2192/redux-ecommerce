import React from 'react'
import clothes from '../../assets/images/banner.jpg'
import { filterProducts } from '../../features/slices/productsSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const NavigateButtons = () => {

    const buttons = ['Hoodies', 'Dresses', 'Suits', 'Shoes', 'T-Shirts', 'Jeans', 'Jackets', 'Bags']
    const dispatch = useDispatch()
    return (
        <div>
            <div className='flex items-center justify-center py-8'>
                {buttons.map((button, index) => {
                    return (
                        <div key={index} className='mr-4'>
                            <Link to={"/filteredProducts/" + button}>
                                <button className="outline outline-2 border-gray-500 text-gray-500 font-bold py-2 px-4 rounded hover:bg-green-300 duration-300 ease-in-out"
                                    onClick={() => dispatch(filterProducts(button))}
                                >
                                    {button}
                                </button>
                            </Link>

                        </div>
                    )
                })}
            </div>
            <div className='bg-pink-500 p-2 w-[55%] mx-auto rounded-md'>
                <h3 className='text-orange-900 text-center text-lg font-inter font-bold tracking-normal leading-none'>SALES UP TO 50%</h3>
            </div>
            <div className='flex justify-center items-center py-4 '>
                <img className='h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600' src={clothes} alt="clothes" />
            </div>
        </div>
    )
}

export default NavigateButtons