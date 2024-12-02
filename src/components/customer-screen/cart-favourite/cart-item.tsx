import trash from '@/assets/icons/trash.svg'
import plus from '@/assets/icons/plus.svg'
import minus from '@/assets/icons/minus.svg'
import { cartItems } from '@/types'
import { useDeleteCartItem } from '@/hooks/customer-hook/cart/use-delete-cart-item'
import { useEffect, useState } from 'react'
import { useDebounce } from '@/hooks/use-debounce'
import { useUpdateQuantity } from '@/hooks/customer-hook/cart/use-update-quantity'
import { ROUTE_PATHS } from '@/router'
import { Link } from 'react-router-dom'

export default function CartItem({ isCheckout, cartItem }: { isCheckout?: boolean; cartItem: cartItems }) {
  const onePrice = cartItem?.unitPrice / cartItem?.quantity
  const deleteCartItemMutation = useDeleteCartItem()
  const updateQuantityMutation = useUpdateQuantity()
  const [quantityItem, setQuantityItem] = useState(cartItem?.quantity)
  const debouncedQuantity = useDebounce(quantityItem, 500)

  function handleDelete(id: number) {
    console.log(id)
    deleteCartItemMutation.mutate(id)
  }

  useEffect(() => {
    if (debouncedQuantity !== cartItem?.quantity) {
      handleUpdateQuantity(cartItem?.productId, debouncedQuantity)
    }
  }, [debouncedQuantity])

  function handleUpdateQuantity(productId: number, quantity: number) {
    console.log(productId, quantity)
    updateQuantityMutation.mutate({ productId, quantity })
  }

  return (
    <article className="cart-item">
      <Link to={`${ROUTE_PATHS.PRODUCT}/${cartItem?.productId}`}>
        <img src={cartItem?.image} alt="" className="cart-item__thumb" />
      </Link>
      <div className="cart-item__content">
        <div className="cart-item__content-left">
          <h3 className="cart-item__title">
            <Link to={`${ROUTE_PATHS.PRODUCT}/${cartItem?.productId}`}>{cartItem?.productName}</Link>
          </h3>
          <p className="cart-item__price-wrap">
            {onePrice} | <span className="cart-item__status">In Stock</span>
          </p>
          <div className="cart-item__ctrl cart-item__ctrl--md-block">
            <div className="cart-item__input">{cartItem?.brandName}</div>
            {isCheckout ? (
              <div className="cart-item__input">
                <span>{quantityItem}</span>
              </div>
            ) : (
              <div className="cart-item__input">
                <button
                  className="cart-item__input-btn"
                  onClick={() => {
                    if (quantityItem > 1) setQuantityItem((prev) => prev - 1)
                  }}
                >
                  <img className="icon" src={minus} alt="" />
                </button>
                <span>{quantityItem}</span>
                <button className="cart-item__input-btn" onClick={() => setQuantityItem((prev) => prev + 1)}>
                  <img className="icon" src={plus} alt="" />
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="cart-item__content-right">
          <p className="cart-item__total-price">{cartItem?.unitPrice}</p>
          <div className="cart-item__ctrl">
            <button
              className="cart-item__ctrl-btn js-toggle"
              toggle-target="#delete-confirm"
              onClick={() => handleDelete(cartItem?.productId)}
            >
              <img src={trash} alt="" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
