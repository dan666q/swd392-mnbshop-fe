import { Link } from 'react-router-dom'
import { Menu, Dropdown, Button } from 'antd'
import more from '@/assets/icons/more.svg'
import logo from '@/assets/icons/logo3.png'
import arrowLeft from '@/assets/icons/arrow-left.svg'
import buy from '@/assets/icons/buy.svg'
import heart from '@/assets/icons/heart.svg'
import avatar from '@/assets/img/avatar.jpg'
import { ROUTE_PATHS, ROUTE_PATHS_CUSTOMER } from '@/router'
import { useAuth } from '@/hooks/use-auth'

export default function CustomerHeader() {
  const { user, logoutMutation } = useAuth()

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to={ROUTE_PATHS_CUSTOMER.PROFILE}>Profile</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <button onClick={() => logoutMutation.mutate()}>Logout</button>
      </Menu.Item>
    </Menu>
  )

  return (
    <header className="header">
      <div className="container">
        <div className="top-bar">
          <button className="top-bar__more d-none d-lg-block js-toggle" toggle-target="#navbar">
            <img src={more} alt="" className="icon top-bar__more-icon" />
          </button>
          <Link to={ROUTE_PATHS.ROOT} className="logo top-bar__logo">
            <img src={logo} alt="M&B Mart" className="logo__img top-bar__logo-img" />
            <h1 className="logo__title top-bar__logo-title mt-2">M&B Mart</h1>
          </Link>

          <nav className="navbar hide" id="navbar">
            <button className="navbar__close-btn js-toggle" toggle-target="#navbar">
              <img className="icon" src={arrowLeft} alt="" />
            </button>

            <a href="" className="nav-btn d-none d-md-flex">
              <img src={buy} alt="" className="icon nav-btn__icon" />
              <span className="nav-btn__title">Card</span>
              <span className="nav-btn__qnt">3</span>
            </a>

            {/* <a href="" className="nav-btn d-none d-md-flex">
              <img src={heart} alt="" className="icon nav-btn__icon" />
              <span className="nav-btn__title">Favorite</span>
              <span className="nav-btn__qnt">3</span>
            </a> */}

            <ul className="navbar__list js-dropdown-list">
              <li className="navbar__item">
                <Link to={ROUTE_PATHS.ROOT} className="navbar__link">
                  Home
                </Link>
              </li>
              <li className="navbar__item">
                <Link to={ROUTE_PATHS.PRODUCT} className="navbar__link">
                  Product
                </Link>
              </li>
              <li className="navbar__item">
                <Link to={ROUTE_PATHS.BLOG} className="navbar__link">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          <div className="navbar__overlay js-toggle" toggle-target="#navbar"></div>

          {user ? (
            <div className="top-act">
              {/* <div className=" d-md-none top-act__group--single">
                <Search placeholder="Search" allowClear onSearch={onSearch} size="large" style={{ width: 400 }} />
              </div> */}
              <div className="top-act__group d-md-none">
                {/* <Link to={ROUTE_PATHS_CUSTOMER.FAVOURITE}>
                  <button className="top-act__btn">
                    <img src={heart} alt="" className="icon top-act__icon" />
                    <span className="top-act__title">Favorite</span>
                  </button>
                </Link> */}

                <div className="top-act__separate"></div>

                <Link to={ROUTE_PATHS_CUSTOMER.CART}>
                  <button className="top-act__btn">
                    <img src={buy} alt="" className="icon top-act__icon" />
                    <span className="top-act__title">Cart</span>
                  </button>
                </Link>
              </div>

              <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
                <div className="top-act__user" onClick={(e) => e.preventDefault()}>
                  <img src={avatar} alt="" className="top-act__avatar" />
                </div>
              </Dropdown>
            </div>
          ) : (
            <div className="top-act">
              <Link to={ROUTE_PATHS.LOGIN} className="btn btn--text d-md-none">
                Sign in
              </Link>
              <Link to={ROUTE_PATHS.SIGNUP} className="top-act__sign-up btn btn--primary">
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
