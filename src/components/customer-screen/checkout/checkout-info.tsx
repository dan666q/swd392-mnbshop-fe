import Delivery from './delivery'

export default function CheckoutInfo() {
  return (
    <div className="col-5 col-xl-5 col-lg-12">
      <div className="cart-info">
        <h2 className="cart-info__heading cart-info__heading--lv2">Checkout Details</h2>
        <p className="cart-info__desc">Complete your purchase item by providing your payment details order.</p>
        <form action="" className="form cart-info__form">
          <div className="form__group">
            <label htmlFor="email" className="form__label form__label--medium">
              Email Address
            </label>
            <div className="form__text-input">
              <input type="email" name="email" id="email" placeholder="Email" className="form__input" required />
              <img src="./assets/icons/form-error.svg" alt="" className="form__input-icon-error" />
            </div>
            <p className="form__error">Password must be at least 6 characters</p>
          </div>
          <div className="form__group">
            <label htmlFor="card-holder" className="form__label form__label--medium">
              Card Holder
            </label>
            <div className="form__text-input">
              <input
                type="text"
                name="card-holder"
                id="card-holder"
                placeholder="Card Holder"
                className="form__input"
                required
              />
              <img src="./assets/icons/form-error.svg" alt="" className="form__input-icon-error" />
            </div>
            <p className="form__error">Password must be at least 6 characters</p>
          </div>
          <div className="form__group">
            <label htmlFor="card-details" className="form__label form__label--medium">
              Card Details
            </label>
            <div className="form__text-input">
              <input
                type="text"
                name="card-details"
                id="card-details"
                placeholder="Card Details"
                className="form__input"
                required
              />
              <img src="./assets/icons/form-error.svg" alt="" className="form__input-icon-error" />
            </div>
            <p className="form__error">Password must be at least 6 characters</p>
          </div>
          <div className="form__row cart-info__form-row">
            <div className="form__group">
              <div className="form__text-input">
                <input
                  type="text"
                  name="card-expire"
                  id="card-expire"
                  placeholder="MM/YY"
                  className="form__input"
                  required
                />
                <img src="./assets/icons/form-error.svg" alt="" className="form__input-icon-error" />
              </div>
              <p className="form__error">Password must be at least 6 characters</p>
            </div>
            <div className="form__group">
              <div className="form__text-input">
                <input type="text" name="card-cvc" id="card-cvc" placeholder="CVC" className="form__input" required />
                <img src="./assets/icons/form-error.svg" alt="" className="form__input-icon-error" />
              </div>
              <p className="form__error">Password must be at least 6 characters</p>
            </div>
          </div>
        </form>
        <div className="cart-info__separate"></div>

        {/* Shipping method */}
        <div className="cart-info--checkout mb-5">
          <h2 className="cart-info__heading cart-info__heading--lv2">Available Shipping method</h2>
          <Delivery />
        </div>
        <div className="cart-info__separate"></div>
        <div className="cart-info__row">
          <span>
            Subtotal <span className="cart-info__sub-label">(items)</span>
          </span>
          <span>3</span>
        </div>
        <div className="cart-info__row">
          <span>
            Price <span className="cart-info__sub-label">(Total)</span>
          </span>
          <span>$191.65</span>
        </div>
        <div className="cart-info__row">
          <span>Shipping</span>
          <span>$10.00</span>
        </div>
        <div className="cart-info__separate"></div>
        <div className="cart-info__row">
          <span>Estimated Total</span>
          <span>$201.65</span>
        </div>
        <a href="#!" className="cart-info__next-btn btn btn--primary btn--rounded">
          Pay $201.65
        </a>
      </div>
    </div>
  )
}
