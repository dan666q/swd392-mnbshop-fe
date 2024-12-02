export default function AddressCard() {
  return (
    <article className="address-card">
      <div className="address-card__left">
        <div className="address-card__choose">
          <label className="cart-info__checkbox">
            <input type="radio" name="shipping-address" checked className="cart-info__checkbox-input" />
          </label>
        </div>
        <div className="address-card__info">
          <h3 className="address-card__title">Imran Khan</h3>
          <p className="address-card__desc">Museum of Rajas, Sylhet Sadar, Sylhet 3100.</p>
          <ul className="address-card__list">
            <li className="address-card__list-item">Shipping</li>
            <li className="address-card__list-item">Delivery from store</li>
          </ul>
        </div>
      </div>
      <div className="address-card__right">
        <div className="address-card__ctrl">
          <button className="cart-info__edit-btn js-toggle" toggle-target="#add-new-address">
            <img className="icon" src="./assets/icons/edit.svg" alt="" />
            Edit
          </button>
        </div>
      </div>
    </article>
  )
}
