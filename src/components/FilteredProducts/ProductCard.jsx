/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { singleProduct } from '../../features/slices/productsSlice';
import { Link, useParams } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProductCard = ({ idProduct, name, text, img, price, colors }) => {
    const dispatch = useDispatch()
    const { id } = useParams()

    console.log(id, "este es el id de productcard")
    return (
        <Link to={`/filteredProducts/${id}/` + idProduct}>
            <div className="mt-6 w-96 bg-white rounded-lg shadow-md overflow-hidden" onClick={() => dispatch(singleProduct(idProduct))}>
                <img src={img} alt="card-image" className="h-72 w-full object-cover" />
                <div className="p-4">
                    <h5 className="text-xl font-medium text-gray-900 mb-2">{name}</h5>
                    <p className="text-gray-700">{text}</p>
                </div>
                <div className="flex items-center px-4 py-2 border-t border-gray-200">
                    <p className="text-sm font-medium text-gray-900 mr-2">${price}</p>
                    <div className="flex items-center space-x-2">
                        {colors?.map((color, index) => (
                            <i
                                key={index}
                                style={{ backgroundColor: color }}
                                className='fas fa-map-marker-alt fa-sm mt-[3px] p-2 rounded-full mr-4'
                            ></i>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
