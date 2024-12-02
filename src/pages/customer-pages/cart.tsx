import CartItem from '@/components/customer-screen/cart-favourite/cart-item'
import Breadcrumb from '@/components/customer-screen/breadcrumb'
import SearchBarMobile from '@/components/customer-screen/search-bar-mobile'
import PriceSection from '@/components/customer-screen/cart-favourite/price-section'
import { useCartItem } from '@/hooks/customer-hook/cart/use-cart-list'

export default function Cart() {
  const { data } = useCartItem()
  return (
    <div>
      <main className="checkout-page">
        <div className="container">
          {/* <!-- Search bar --> */}
          <SearchBarMobile />
          {/* <!-- Breadcrumbs --> */}
          <Breadcrumb />
          {/* <!-- Checkout content --> */}
          <div className="checkout-container">
            <div className="row gy-xl-3">
              <div className="col-8 col-xl-12">
                <div className="cart-info">
                  <div className="cart-info__list">
                    {/* <!-- Cart item --> */}
                    {data?.cartItems?.map((item) => (
                      <CartItem key={item.cartItemId} cartItem={item} />
                    ))}
                  </div>
                </div>
              </div>
              {/* TODO: Add price */}
              <PriceSection
                totalItem={data?.totalItem ?? 0}
                totalPrice={data?.totalPrice ?? 0}
                cartId={data?.cartId ?? 0}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
