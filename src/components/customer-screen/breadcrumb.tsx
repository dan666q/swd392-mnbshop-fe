import arrowRight from '@/assets/icons/arrow-right.svg'

export default function Breadcrumb() {
  return (
    <div className="mt-5">
      <ul className="breadcrumbs checkout-page__breadcrumbs">
        <li>
          <a href="./" className="breadcrumbs__link">
            Home
            <img src={arrowRight} alt="" />
          </a>
        </li>
        <li>
          <a href="#!" className="breadcrumbs__link breadcrumbs__link--current">
            Checkout
          </a>
        </li>
      </ul>
    </div>
  )
}
