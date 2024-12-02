import arrowDown2 from '@/assets/icons/arrow-down-2.svg'
import Breadcrumb from '@/components/customer-screen/breadcrumb'

import FavouriteItem from '@/components/customer-screen/cart-favourite/favourite-item'
import SearchBarMobile from '@/components/customer-screen/search-bar-mobile'
import { useFavoriteList } from '@/hooks/customer-hook/use-favorite-list'

export default function FavouriteList() {
  const { data } = useFavoriteList()
  console.log(data)
  return (
    <div>
      <main className="checkout-page">
        <div className="container">
          {/* <!-- Search bar --> */}
          <SearchBarMobile />
          {/* <!-- Breadcrumbs --> */}
          <Breadcrumb />
          {/* <!-- Favourite content --> */}
          <div className="checkout-container">
            <div className="row gy-xl-3">
              <div className="col-12">
                <div className="cart-info">
                  <h1 className="cart-info__heading">Favourite List</h1>
                  <p className="cart-info__desc">3 items</p>
                  <div className="cart-info__check-all">
                    <label className="cart-info__checkbox">
                      <input type="checkbox" name="shipping-adress" className="cart-info__checkbox-input" />
                    </label>
                  </div>
                  <div className="cart-info__list">
                    {/* <!-- Cart item 1 --> */}
                    <FavouriteItem />
                    <FavouriteItem />
                    <FavouriteItem />
                  </div>
                  <div className="cart-info__bottom">
                    <div className="cart-info__row cart-info__row-md--block">
                      <div className="cart-info__continue">
                        <a href="./" className="cart-info__continue-link">
                          <img className="cart-info__continue-icon icon" src={arrowDown2} alt="" />
                          Continue Shopping
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
