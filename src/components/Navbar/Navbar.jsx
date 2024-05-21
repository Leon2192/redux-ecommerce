import React from 'react'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
    return (
        <>
            <div className='bg-black p-2 w-full'>
                <h3 className='text-white font-inter text-2xl font-bold tracking-normal leading-none text-center'>Welcome</h3>
            </div>

            <div className='flex justify-around items-center py-3'>
                <div>
                    <img className='h-12 w-full' src={logo} alt="store" />
                </div>
                <div className='flex flex-row items-center '>
                    <button className=' font-inter text-base font-medium tracking-normal leading-none text-center mr-4'>
                        Logout
                    </button>
                    <div className='flex flex-row items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                        </svg>
                        <p className='font-inter text-base font-medium tracking-normal leading-none text-center mr-2'>
                            Whish List
                        </p>
                    </div>
                    <div className='flex flex-row items-center cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        <p className='font-inter text-base font-medium tracking-normal leading-none text-center mr-2'>
                            Shopping Bag
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-black p-4 w-full flex justify-around'>
                <div className=' text-white font-inter text-base font-medium tracking-normal leading-none text-center mr-2' >
                    50% OFF
                </div>
                <div className=' text-white font-inter text-base font-medium tracking-normal leading-none text-center mr-2' >
                    Free Shipping & Returns
                </div>
                <div className=' text-white font-inter text-base font-medium tracking-normal leading-none text-center mr-2' >
                  Different payment methods
                </div>
            </div>

        </>
    )
}

export default Navbar