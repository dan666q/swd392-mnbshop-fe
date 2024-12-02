import login_thumb from '@/assets/img/auth/login_thumb.png'
import logo from '@/assets/icons/logo3.png'
import message from '@/assets/icons/message.svg'
import lock from '@/assets/icons/lock.svg'
import form_error from '@/assets/icons/form-error.svg'
import google from '@/assets/icons/google.svg'
import { Link } from 'react-router-dom'
import { ROUTE_PATHS } from '@/router'
import { useAuth } from '@/hooks/use-auth'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signInMutation } = useAuth()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    signInMutation.mutate({ username: email, password })
  }

  return (
    <div className="auth">
      <div className="auth__intro d-md-none">
        <img src={login_thumb} alt="" className="auth__intro-img" />
        <p className="auth__intro-text">Nourishing the Bond Between Mom and Baby with Nature's Perfect Nutrients</p>
      </div>
      <div className="auth__content">
        <div className="auth__content-inner">
          <Link to={ROUTE_PATHS.ROOT} className="logo">
            <img src={logo} alt="M&B Mart" className="logo__img" />
            <h2 className="logo__title">M&B Mart</h2>
          </Link>
          <h1 className="auth__heading">Hello Again!</h1>
          <p className="auth__desc">
            Welcome back to sign in. As a returning customer, you have access to your previously saved all information.
          </p>

          <form onSubmit={handleLogin} className="form auth__form">
            <div className="form__group">
              <div className="form__text-input">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form__input"
                  placeholder="Email"
                  required
                />{' '}
                <img src={message} alt="" className="form__input-icon" />
                <img src={form_error} alt="" className="form__input-icon-error" />
              </div>
              {signInMutation.isError && <p className="form__error">Username is not in correct format</p>}
            </div>

            <div className="form__group">
              <div className="form__text-input">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form__input"
                  placeholder="Password"
                  required
                  minLength={6}
                />
                <img src={lock} alt="" className="form__input-icon" />
                <img src={form_error} alt="" className="form__input-icon-error" />
              </div>
              {signInMutation.isError && <p className="form__error">Password is not in correct format</p>}
            </div>

            <div className="form__group form__group--inline">
              <label className="form__checkbox">
                <input type="checkbox" name="" id="" className="form__checkbox-input d-none" />
                <span className="form__checkbox-label">Set as default card</span>
              </label>
              <Link to={'/forgot'} className="auth__link form__pull-right">
                Forgot Password
              </Link>
            </div>

            <div className="form__group auth__btn-group">
              <button
                type="submit"
                className="btn btn--primary auth__btn form__submit-btn"
                disabled={signInMutation.isPending}
              >
                {signInMutation.isPending ? 'Signing in...' : 'Sign in'}
              </button>{' '}
              <button className="btn btn--outline auth__btn btn--no-margin">
                <img src={google} alt="" className="btn__icon icon" />
                Sign in with Google
              </button>
            </div>
          </form>

          <p className="auth__text">
            Don't have an account yet?
            <Link to={'/signup'} className="auth__link auth__text-link">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
