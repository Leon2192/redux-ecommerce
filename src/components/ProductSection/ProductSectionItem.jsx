import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Button
  } from "@material-tailwind/react";
  import { useDispatch } from 'react-redux';
  import { addToCart } from '../../features/slices/cartSlice';


const ProductSectionItem = ({
    id,
    img,
    name,
    text,
    color,
    size,
    price,
    totalPrice
}) => {

    const dispatch = useDispatch()
    const defaultSize = size[0]
    const defaultColor = color[0]


  return (
    <div>
   <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src={img} alt={name}/>
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
        {name}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
        {text}
        </Typography>
        <div className='flex justify-between items-center pt-4'>
        <Typography color="gray" className="font-medium" textGradient>
          Size left: {defaultSize}
        </Typography>
        <Typography color="gray" className="font-medium" textGradient>
          Color: <span className='px-2 rounded-full' style={{backgroundColor:defaultColor}}></span> {defaultColor}
        </Typography>
        </div>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
       <button 
    onClick={() => dispatch(addToCart({
        id:id,
        img:img,
        text:text,
        amount:1,
        price:price,
        totalPrice: totalPrice,
        name:name,
        size: defaultSize,
        color:defaultColor
    }))}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md"
>
    Add to Cart
</button>
      </CardFooter>
    </Card>
    </div>
  )
}

export default ProductSectionItem