import plus from '@/assets/icons/plus.svg'
import AddressCard from './address-card'

type Address = {
  name: string
  address: string
}

export default function AddressSection({ addressList }: { addressList: Address | null }) {
  return (
    <div className="user-address">
      <div className="user-address__top">
        <div>
          <h2 className="user-address__title">Shipping address</h2>
          <p className="user-address__desc">Where should we deliver your order?</p>
        </div>
        <button
          className="user-address__btn btn btn--primary btn--rounded btn--small js-toggle"
          toggle-target="#add-new-address"
        >
          <img src={plus} alt="" />
          Add a new address
        </button>
      </div>
      <div className="user-address__list">
        {addressList ? (
          <>
            <AddressCard />
            <AddressCard />
          </>
        ) : (
          <>
            <p className="user-address__message flex gap-5">
              <p>Not address yet.</p>
              <a className="user-address__link js-toggle" href="#!" toggle-target="#add-new-address">
                Add a new address
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  )
}
