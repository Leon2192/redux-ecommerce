import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';


const FilteredProducts = () => {
    const products = useSelector((state) => state.products.filteredProducts)
    const { id } = useParams()
    console.log(products, "products")
    console.log(id, 'params')

    console.log(id, 'este es el id')
    return (
        <div>
            <div className='pt-16'>
                <div className='pl-14 '>
                    <h1 className='text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none'>{id}</h1>
                </div>
                <div className='grid grid-cols-4 justify-items-center py-8 gap-12 '>
                    {products
                        .filter((product) => product.type === id)
                        .map((product, index) => {
                            return (
                                <div key={index}>
                                    <ProductCard
                                        idProduct={product.id}
                                        name={product.name}
                                        text={product.text}
                                        img={product.img}
                                        colors={product.color}
                                        price={product.price}
                                    />
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default FilteredProducts