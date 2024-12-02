import forgot_thumb from '@/assets/img/auth/forgot-password.png'
import logo from '@/assets/icons/logo3.png'
import message from '@/assets/icons/message.svg'
import form_error from '@/assets/icons/form-error.svg'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
  return (
    <div>
      <main>
        <div className="auth">
          <div className="auth__intro d-md-none">
            <img src={forgot_thumb} alt="" className="auth__intro-img" />
            <p className="auth__intro-text">
              The best of luxury brand values, high quality products, and innovative services
            </p>
          </div>
          <div className="auth__content">
            <div className="auth__content-inner">
              <Link to={'/'} className="logo">
                <img src={logo} alt="M&B Mart" className="logo__img" />
                <h2 className="logo__title">M&B Mart</h2>
              </Link>
              <h1 className="auth__heading">Reset your password!</h1>
              <p className="auth__desc">Enter your email and we'll send you a link to reset your password.</p>

              <div className="auth__message message message--success">We have e-mail your password reset link!</div>
              <form action="./index-logined.html" className="form auth__form auth__form-forgot">
                <div className="form__group">
                  <div className="form__text-input">
                    <input type="email" name="" id="" className="form__input" placeholder="Email" required />
                    <img src={message} alt="" className="form__input-icon" />
                    <img src={form_error} alt="" className="form__input-icon-error" />
                  </div>
                  <p className="form__error">Email is not in correct format</p>
                </div>

                <div className="form__group auth__btn-group">
                  <button className="btn btn--primary auth__btn form__submit-btn">Reset password</button>
                </div>
              </form>

              <p className="auth__text">
                <Link to={'/signup'} className="auth__link auth__text-link">
                  Back to sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
