import { Button, Dialog, DialogFooter, DialogBody, DialogHeader } from '@material-tailwind/react'
import { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Tooltip } from '@material-tailwind/react'
import { removeFromCart } from '../../features/slices/cartSlice'


const Cart = ({ openModal, setOpen }) => {

  const cart = useSelector((state) => state.cart.cart)
  const totalPrice = useSelector((state) => state.cart.totalPrice)
  const dispatch = useDispatch()
  return (
    <div>
      {cart.length > 0 ? (
        <Fragment>
          <Dialog
            className='border-0 outline-0'
            open={openModal}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 }
            }}
          >
            <DialogHeader>Shopping bag</DialogHeader>
            <DialogBody divider className='flex flex-col justify-center items-start'>
              {cart.map((item, index) => {
                return (
                  <div key={index}>
                    <div className='grid grid-cols-2 py-4'>
                      <div className=''>
                        <img className='h-[125px] rounded-md' src={item.img} alt={item.name} />
                        <div className='flex flex-col items-start'>
                          <h4 className="text-black text-base font-inter font-bold tracking-normal leading-none py-2">{item.name}</h4>
                        </div>
                        <div className='max-w-xs'>
                          <p className="text-black text-xs font-inter font-bold tracking-normal leading-none py-2">{item.text}</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-black text-sm font-inter font-bold tracking-normal leading-none py-2">
                          Selected size:
                          <span className='ml-2'>{item.size}</span>
                        </p>
                        <p className="text-black text-sm font-inter font-bold tracking-normal leading-none py-2">
                          Selected color:
                          <span
                            style={{ backgroundColor: item.color }}
                            className='ml-2 rounded-full px-2 py-2 text-white'>{item.color}</span>
                        </p>
                        <p className="text-black text-sm font-inter font-bold tracking-normal leading-none py-2">
                          Amount:
                          <span className='ml-2'>{item.amount}</span>
                        </p>
                        <p className="text-black text-sm font-inter font-bold tracking-normal leading-none py-2">
                          Single item price:
                          <span className='ml-2'>{item.price}$</span>
                        </p>
                        <p className="text-black text-sm font-inter font-bold tracking-normal leading-none py-2">
                          Total item price:
                          <span className='ml-2'>{item.totalPrice}$</span>
                        </p>

                        <div className='pt-4 '>
                          <Tooltip
                            placement="bottom"
                            content="Remove from the cart">
                            <button
                              onClick={() => dispatch(removeFromCart(item))}
                              className="bg-red-600 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                              Remove
                            </button>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </DialogBody>
            <DialogFooter className='flex justify-start items-center'>
              <p className="text-black text-base font-inter font-bold tracking-normal leading-none py-2">
                Total price of all products:
                <span className='ml-2'>${totalPrice}</span>
              </p>
            </DialogFooter>


          </Dialog>
        </Fragment>
      ) : (
        <Fragment>
          <Dialog
            className='border-0 outline-0'
            open={openModal}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 }
            }}
          >
            <DialogHeader>Shopping bag</DialogHeader>
            <DialogBody divider>
              <div>
                <h1 className='text-black text-3xl font-inter font-bold tracking-normal leading-none py-4'>Your bag is empty</h1>
                <p className='text-black text-base font-inter font-bold tracking-normal leading-none'>Add some products</p>
              </div>
            </DialogBody>


          </Dialog>
        </Fragment>
      )}

    </div>
  )
}

export default Cart