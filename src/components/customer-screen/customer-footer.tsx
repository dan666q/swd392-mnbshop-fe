import logo from '@/assets/icons/logo.svg'
import youtube from '@/assets/icons/ytb.svg'
import instagram from '@/assets/icons/in.svg'
import facebook from '@/assets/icons/fb.svg'
import twitter from '@/assets/icons/tw.svg'
import tiktok from '@/assets/icons/tt.svg'

export default function CustomerFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__row">
            <div className="footer__col footer__col--form">
              <a href="./" className="logo footer__logo">
                <img src={logo} alt="M&B Mart" className="logo__img" />
                <h1 className="logo__title">M&B Mart</h1>
              </a>
              <p className="footer__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, maxime et veniam eligendi rem
                voluptatibus.
              </p>
              <p className="footer__help-text">Receive product news and updates.</p>
              <form action="" className="footer__form">
                <input type="email" name="" id="" className="footer__input" placeholder="Email address" />
                <button className="btn btn--primary">SEND</button>
              </form>
            </div>
            <div className="footer__col footer__col--list-1">
              <h3 className="footer__heading">SHOP</h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="" className="footer__link">
                    All Departments
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Fashion Deals
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Electronics Discounts
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Home & Living Specials
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Beauty Bargains
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__col footer__col--list-2">
              <h3 className="footer__heading">SUPPORT</h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Store locator
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Order status
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__col footer__col--list-3">
              <h3 className="footer__heading">COMPANY</h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Customer Service
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Terms of Use
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Privacy
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Careers
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    About
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Affiliates
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__col footer__col--list-4">
              <h3 className="footer__heading">CONTACT</h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <p className="footer__label">Email</p>
                  <a href="mailto:" className="footer__link">
                    contact@mnb.com
                  </a>
                </li>
                <li className="footer__item">
                  <p className="footer__label">Hotline</p>
                  <a href="" className="footer__link">
                    01 234 56789
                  </a>
                </li>
                <li className="footer__item">
                  <p className="footer__label">Address</p>
                  <a href="" className="footer__link">
                    Lot E2a-7, Street D1, D. D1, Long Thanh My, Thu Duc City, Ho Chi Minh City
                  </a>
                </li>
                <li className="footer__item">
                  <p className="footer__label">Hours</p>
                  <a href="" className="footer__link">
                    M - F 08:00am - 06:00pm
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <p className="footer__copyright">© 2010 - 2025 Grocery Mart. All rights reserved.</p>

            <div className="footer__socials">
              <a href="#!" className="footer__social-link footer__social-link--facebook">
                <img src={facebook} alt="" className="footer__social-icon" />
              </a>
              <a href="#!" className="footer__social-link footer__social-link--youtube">
                <img src={youtube} alt="" className="footer__social-icon" />
              </a>
              <a href="#!" className="footer__social-link footer__social-link--tiktok">
                <img src={tiktok} alt="" className="footer__social-icon" />
              </a>
              <a href="#!" className="footer__social-link footer__social-link--twitter">
                <img src={twitter} alt="" className="footer__social-icon" />
              </a>
              <a href="#!" className="footer__social-link footer__social-link--linkedin">
                <img src={instagram} alt="" className="footer__social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
