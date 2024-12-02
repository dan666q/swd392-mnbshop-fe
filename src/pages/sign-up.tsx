import login_thumb from '@/assets/img/auth/login_thumb.png'
import logo from '@/assets/icons/logo3.png'
import message from '@/assets/icons/message.svg'
import lock from '@/assets/icons/lock.svg'
import form_error from '@/assets/icons/form-error.svg'
import google from '@/assets/icons/google.svg'
import { Link } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { z } from 'zod'
import { signUpSchema } from '@/lib/zod/schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

type SignUpForm = z.infer<typeof signUpSchema>

export default function SignUp() {
  const { signUpMutation } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit = (data: SignUpForm) => {
    const { confirmPassword, ...rest } = data
    const formattedData = {
      ...rest,
      gender: rest.gender === 'Male' ? true : false,
    }
    signUpMutation.mutate(formattedData)
  }

  return (
    <main>
      <div className="auth">
        <div className="auth__intro">
          <Link to={'/'} className="auth__intro-logo logo d-none d-md-flex">
            <img src={logo} alt="M&B Mart" className="logo__img" />
            <h1 className="logo__title">M&B Mart</h1>
          </Link>

          <img src={login_thumb} alt="" className="auth__intro-img" />
          <p className="auth__intro-text">
            The best of luxury brand values, high quality products, and innovative services
          </p>

          <button className="auth__intro-next d-none d-md-flex js-toggle" toggle-target="#auth-content">
            <img src="./assets/img/auth/intro-arrow.svg" alt="" />
          </button>
        </div>
        <div className="auth__content hide" id="auth-content">
          <div className="auth__content-inner">
            <Link to={'/'} className="logo">
              <img src={logo} alt="M&B Mart" className="logo__img" />
              <h1 className="logo__title">M&B Mart</h1>
            </Link>
            <h1 className="auth__heading">Sign Up</h1>
            <p className="auth__desc">Let's create your account and Shop like a pro and save money.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="form auth__form">
              <div className="form__group">
                <div className="form__text-input">
                  <input
                    type="email"
                    {...register('email')}
                    className={`form__input ${errors.email ? 'error' : ''}`}
                    placeholder="Email"
                  />
                  <img src={message} alt="" className="form__input-icon" />
                  {errors.email && <img src={form_error} alt="" className="form__input-icon-error" />}
                </div>
                {errors.email && <p className="form__error">{errors.email.message}</p>}
              </div>

              <div className="form__group">
                <div className="form__text-input">
                  <input
                    type="password"
                    {...register('password')}
                    className={`form__input ${errors.password ? 'error' : ''}`}
                    placeholder="Password"
                  />
                  <img src={lock} alt="" className="form__input-icon" />
                  {errors.password && <img src={form_error} alt="" className="form__input-icon-error" />}
                </div>
                {errors.password && <p className="form__error">{errors.password.message}</p>}
              </div>

              <div className="form__group">
                <div className="form__text-input">
                  <input
                    type="password"
                    {...register('confirmPassword')}
                    className={`form__input ${errors.confirmPassword ? 'error' : ''}`}
                    placeholder="Confirm password"
                  />
                  <img src={lock} alt="" className="form__input-icon" />
                  {errors.confirmPassword && <img src={form_error} alt="" className="form__input-icon-error" />}
                </div>
                {errors.confirmPassword && <p className="form__error">{errors.confirmPassword.message}</p>}
              </div>

              <div className="form__group">
                <div className="form__text-input">
                  <input
                    type="text"
                    {...register('username')}
                    className={`form__input ${errors.username ? 'error' : ''}`}
                    placeholder="Username"
                  />
                </div>
                {errors.username && <p className="form__error">{errors.username.message}</p>}
              </div>

              <div className="form__group">
                <div className="form__text-input">
                  <input
                    type="text"
                    {...register('fullName')}
                    className={`form__input ${errors.fullName ? 'error' : ''}`}
                    placeholder="Full Name"
                  />
                </div>
                {errors.fullName && <p className="form__error">{errors.fullName.message}</p>}
              </div>

              <div className="form__group">
                <div className="form__text-input">
                  <input
                    type="date"
                    {...register('dateOfBirth')}
                    className={`form__input ${errors.dateOfBirth ? 'error' : ''}`}
                  />
                </div>
                {errors.dateOfBirth && <p className="form__error">{errors.dateOfBirth.message}</p>}
              </div>

              <div className="form__group">
                <div className="form__text-input">
                  <select
                    {...register('gender')}
                    defaultValue={'Male'}
                    className={`form__input ${errors.gender ? 'error' : ''}`}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                {errors.gender && <p className="form__error">{errors.gender.message}</p>}
              </div>

              <div className="form__group">
                <div className="form__text-input">
                  <input
                    type="text"
                    {...register('address')}
                    className={`form__input ${errors.address ? 'error' : ''}`}
                    placeholder="Address"
                  />
                </div>
                {errors.address && <p className="form__error">{errors.address.message}</p>}
              </div>

              <div className="form__group">
                <div className="form__text-input">
                  <input
                    type="tel"
                    {...register('phone')}
                    className={`form__input ${errors.phone ? 'error' : ''}`}
                    placeholder="Phone"
                  />
                </div>
                {errors.phone && <p className="form__error">{errors.phone.message}</p>}
              </div>

              <div className="form__group form__group--inline">
                <label className="form__checkbox">
                  <input type="checkbox" name="" id="" className="form__checkbox-input d-none" />
                  <span className="form__checkbox-label">Set as default card</span>
                </label>
                <Link to={'/forgot'} className="auth__link form__pull-right">
                  Recovery Password
                </Link>
              </div>

              <div className="form__group auth__btn-group">
                <button type="submit" className="btn btn--primary auth__btn form__submit-btn">
                  Sign Up
                </button>
                <button className="btn btn--outline auth__btn btn--no-margin">
                  <img src={google} alt="" className="btn__icon icon" />
                  Sign in with Google
                </button>
              </div>
            </form>

            <p className="auth__text">
              You have an account yet?
              <Link to={'/login'} className="auth__link auth__text-link">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
