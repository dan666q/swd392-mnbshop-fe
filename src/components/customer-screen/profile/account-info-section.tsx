import location from '@/assets/icons/location.svg'
import message from '@/assets/icons/message.svg'
import gift2 from '@/assets/icons/gift-2.svg'
import calling from '@/assets/icons/calling.svg'
import AccountInfoItem from './account-info-item'

export default function AccountInfoSection() {
  return (
    <div className="col-12">
      <h2 className="cart-info__heading">Account info</h2>
      <p className="cart-info__desc profile__desc">Addresses, contact information and password</p>
      <div className="row gy-md-2 row-cols-2 row-cols-lg-1">
        <AccountInfoItem icon={message} />
        <AccountInfoItem icon={calling} />
        <AccountInfoItem icon={location} />
        <AccountInfoItem icon={gift2} />
      </div>
    </div>
  )
}
