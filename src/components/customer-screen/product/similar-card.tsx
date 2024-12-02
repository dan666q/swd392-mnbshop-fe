import star from '@/assets/icons/star.svg'
import heart from '@/assets/icons/heart.svg'
import heartRed from '@/assets/icons/heart-red.svg'
import item1 from '@/assets/img/product/milk1.png'

export default function SimilarCard() {
  return (
    <div className="col">
      <article className="product-card">
        <div className="product-card__img-wrap">
          <a href="./product-detail.html">
            <img src={item1} alt="" className="product-card__thumb" />
          </a>
          <button className="like-btn product-card__like-btn">
            <img src={heart} alt="" className="like-btn__icon icon" />
            <img src={heartRed} alt="" className="like-btn__icon--liked" />
          </button>
        </div>
        <h3 className="product-card__title">
          <a href="./product-detail.html">Coffee Beans - Espresso Arabica and Robusta Beans</a>
        </h3>
        <p className="product-card__brand">Lavazza</p>
        <div className="product-card__row">
          <span className="product-card__price">$47.00</span>
          <img src={star} alt="" className="product-card__star" />
          <span className="product-card__score">4.3</span>
        </div>
      </article>
    </div>
  )
}
