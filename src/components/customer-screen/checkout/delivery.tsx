import delivery1 from '@/assets/img/payment/delivery-1.png'

export default function Delivery() {
  return (
    <label>
      <article className="payment-item payment-item--pointer">
        <img src={delivery1} alt="" className="payment-item__thumb" />
        <div className="payment-item__content">
          <div className="payment-item__info">
            <h3 className="payment-item__title">Fedex Delivery</h3>
            <p className="payment-item__desc payment-item__desc--low">Delivery: 2-3 days work</p>
          </div>

          <span className="cart-info__checkbox payment-item__checkbox">
            <input
              type="radio"
              name="delivery-method"
              checked
              className="cart-info__checkbox-input payment-item__checkbox-input"
            />
            <span className="payment-item__cost">Free</span>
          </span>
        </div>
      </article>
    </label>
  )
}
