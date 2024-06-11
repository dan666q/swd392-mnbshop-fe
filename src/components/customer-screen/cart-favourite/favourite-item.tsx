import { useState } from 'react'
import trash from '@/assets/icons/trash.svg'
import plus from '@/assets/icons/plus.svg'
import minus from '@/assets/icons/minus.svg'
import { CustomerProductCard } from '@/types'

type FavouriteItemProps = {
  product: CustomerProductCard
}

export default function FavouriteItem({ product }: FavouriteItemProps) {
  const [quantity, setQuantity] = useState(product.quantity)

  const handleIncrease = () => {
    setQuantity(quantity + 1)
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const totalPrice = (product.price * quantity).toFixed(2)

  return (
    <article className="cart-item">
      <label className="cart-info__checkbox">
        <input type="checkbox" name="shipping-adress" className="cart-info__checkbox-input" checked />
      </label>
      <a href="./product-detail.html">
        <img src={product.image} alt={product.name} className="cart-item__thumb" />
      </a>
      <div className="cart-item__content">
        <div className="cart-item__content-left">
          <h3 className="cart-item__title">
            <a href="./product-detail.html">{product.name}</a>
          </h3>
          <p className="cart-item__price-wrap">
            ${product.price.toFixed(2)} | <span className="cart-item__status">{product.stockStatus}</span>
          </p>
          <div className="cart-item__ctrl-wrap">
            <div className="cart-item__ctrl cart-item__ctrl--md-block">
              <div className="cart-item__input">{product.brand}</div>
              <div className="cart-item__input">
                <button className="cart-item__input-btn" onClick={handleDecrease}>
                  <img className="icon" src={minus} alt="Decrease quantity" />
                </button>
                <span className="w-4">{quantity}</span>
                <button className="cart-item__input-btn" onClick={handleIncrease}>
                  <img className="icon" src={plus} alt="Increase quantity" />
                </button>
              </div>
            </div>
            <div className="cart-item__ctrl">
              <button className="cart-item__ctrl-btn js-toggle" toggle-target="#delete-confirm">
                <img src={trash} alt="Delete item" />
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="cart-item__content-right">
          <p className="cart-item__total-price">${totalPrice}</p>
          <button className="cart-item__checkout-btn btn btn--primary btn--rounded">Add to cart</button>
        </div>
      </div>
    </article>
  )
}
