import AddNewCard from './add-new-card'
import AtmCard from './atm-card'

export default function WalletSection() {
  return (
    <div className="col-12">
      <h2 className="cart-info__heading">My Wallet</h2>
      <p className="cart-info__desc profile__desc">Payment methods</p>
      <div className="row gy-md-2 row-cols-3 row-cols-xl-2 row-cols-lg-1">
        <AtmCard />
        <AtmCard />
        <AddNewCard />
      </div>
    </div>
  )
}
