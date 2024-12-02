export default function AccountInfoItem({ icon }: { icon: string }) {
  return (
    <div className="col">
      <a href="./edit-personal-info.html">
        <article className="account-info">
          <div className="account-info__icon">
            <img src={icon} alt="" className="icon" />
          </div>
          <div>
            <h3 className="account-info__title">Email Address</h3>
            <p className="account-info__desc">tarek97.ta@gmail.com</p>
          </div>
        </article>
      </a>
    </div>
  )
}
