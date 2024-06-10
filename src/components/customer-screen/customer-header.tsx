import React from 'react'
import { Input } from 'antd'
import more from '@/assets/icons/more.svg'
import logo from '@/assets/icons/logo3.png'
import arrowLeft from '@/assets/icons/arrow-left.svg'
import buy from '@/assets/icons/buy.svg'
import heart from '@/assets/icons/heart.svg'
import arrowDown from '@/assets/icons/arrow-down.svg'
import search from '@/assets/icons/search.svg'
import avatar from '@/assets/img/avatar.jpg'
import { Link } from 'react-router-dom'
import { ROUTE_PATHS, ROUTE_PATHS_CUSTOMER } from '@/router'

const { Search } = Input

export default function CustomerHeader({ isLoginPage }: { isLoginPage: boolean }) {
  const onSearch = (value: string) => {
    console.log(value)
    // Implement the search functionality here
  }

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

            <a href="" className="nav-btn d-none d-md-flex">
              <img src={heart} alt="" className="icon nav-btn__icon" />
              <span className="nav-btn__title">Favorite</span>
              <span className="nav-btn__qnt">3</span>
            </a>

            <ul className="navbar__list js-dropdown-list">
              <li className="navbar__item">
                <Link to={ROUTE_PATHS.ROOT} className="navbar__link">
                  Home
                </Link>
              </li>
              <li className="navbar__item">
                <Link to={ROUTE_PATHS.PRODUCT} className="navbar__link">
                  Product
                  <img src={arrowDown} alt="" className="icon navbar__arrow" />
                </Link>
              </li>
              <li className="navbar__item">
                <Link to={ROUTE_PATHS.BLOG} className="navbar__link">
                  Blog
                  <img src={arrowDown} alt="" className="icon navbar__arrow" />
                </Link>
              </li>
            </ul>
          </nav>

          <div className="navbar__overlay js-toggle" toggle-target="#navbar"></div>

          {isLoginPage ? (
            <div className="top-act">
              <div className=" d-md-none top-act__group--single">
                <Search placeholder="Search" allowClear onSearch={onSearch} size="large" style={{ width: 400 }} />
              </div>
              <div className="top-act__group d-md-none">
                <Link to={ROUTE_PATHS_CUSTOMER.FAVOURITE}>
                  <button className="top-act__btn">
                    <img src={heart} alt="" className="icon top-act__icon" />
                    <span className="top-act__title">03</span>
                  </button>
                </Link>

                <div className="top-act__separate"></div>

                <Link to={ROUTE_PATHS_CUSTOMER.CART}>
                  <button className="top-act__btn">
                    <img src={buy} alt="" className="icon top-act__icon" />
                    <span className="top-act__title">$65.42</span>
                  </button>
                </Link>
              </div>

              <Link to={ROUTE_PATHS_CUSTOMER.PROFILE}>
                <div className="top-act__user">
                  <img src={avatar} alt="" className="top-act__avatar" />
                </div>
              </Link>
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
