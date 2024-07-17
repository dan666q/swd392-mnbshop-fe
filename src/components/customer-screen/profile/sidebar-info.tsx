import profileImg from '@/assets/img/avatar/avatar-3.png'
import profile from '@/assets/icons/profile.svg'
import location from '@/assets/icons/location.svg'
import message2 from '@/assets/icons/message-2.svg'
import heart from '@/assets/icons/heart.svg'
import download from '@/assets/icons/download.svg'
import gift2 from '@/assets/icons/gift-2.svg'
import shield from '@/assets/icons/shield.svg'
import { ROUTE_PATHS_CUSTOMER } from '@/router'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { useAuth } from '@/hooks/use-auth'

export default function SidebarInfo() {
  const { user, loadingInitial } = useAuth()

  if (loadingInitial) return <p>Loading...</p>
  const formattedDateOfBirth = format(new Date(user?.data.dateOfBirth), 'dd MMM yyyy')
  return (
    <div className="col-3 col-xl-4 col-lg-5 col-md-12">
      <aside className="profile__sidebar">
        <div className="profile-user">
          <img src={user?.data.image} alt="" className="profile-user__avatar" />
          <h1 className="profile-user__name">{user?.data.fullName}</h1>
          <p className="profile-user__desc">{formattedDateOfBirth}</p>
        </div>

        <div className="profile-menu">
          <h3 className="profile-menu__title">Manage Account</h3>
          <ul className="profile-menu__list">
            <li>
              <Link to={ROUTE_PATHS_CUSTOMER.PROFILE} className="profile-menu__link">
                <span className="profile-menu__icon">
                  <img src={profile} alt="" className="icon" />
                </span>
                Personal info
              </Link>
            </li>
            <li>
              <Link to={ROUTE_PATHS_CUSTOMER.EDIT_PROFILE} className="profile-menu__link">
                <span className="profile-menu__icon">
                  <img src={message2} alt="" className="icon" />
                </span>
                Edit Personal info
              </Link>
            </li>
          </ul>
        </div>

        <div className="profile-menu">
          <h3 className="profile-menu__title">My items</h3>
          <ul className="profile-menu__list">
            <li>
              <Link to={ROUTE_PATHS_CUSTOMER.MY_ORDER} className="profile-menu__link">
                <span className="profile-menu__icon">
                  <img src={profile} alt="" className="icon" />
                </span>
                My Orders
              </Link>
            </li>
            {/* <li>
              <a href="#!" className="profile-menu__link">
                <span className="profile-menu__icon">
                  <img src={heart} alt="" className="icon" />
                </span>
                Lists
              </a>
            </li>
            <li>
              <a href="#!" className="profile-menu__link">
                <span className="profile-menu__icon">
                  <img src={gift2} alt="" className="icon" />
                </span>
                Registries
              </a>
            </li> */}
          </ul>
        </div>

        <div className="profile-menu">
          <h3 className="profile-menu__title">Subscriptions & plans</h3>
          <ul className="profile-menu__list">
            <li>
              <a href="#!" className="profile-menu__link">
                <span className="profile-menu__icon">
                  <img src={shield} alt="" className="icon" />
                </span>
                Protection plans
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  )
}
