import React from 'react'
import { Link } from 'react-router-dom'
import heart from '@/assets/icons/heart.svg'
import heartActive from '@/assets/icons/heart-red.svg'
import star from '@/assets/icons/star.svg'
import { ROUTE_PATHS } from '@/router'
import { Product } from '@/types/index' // Adjust the import path if needed

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Check if product is defined
  if (!product) {
    return null // Return null or handle appropriately
  }

  return (
    <div>
      <div className="col">
        <article className="product-card">
          <div className="product-card__img-wrap">
            <Link to={`${ROUTE_PATHS.PRODUCT}/${product.id}`}>
              <img src={product.image} alt={product.name} className="product-card__thumb" />
            </Link>
            <button className="like-btn product-card__like-btn">
              <img src={heart} alt="heart icon" className={`icon like-btn__icon ${product.liked ? 'liked' : ''}`} />
              <img
                src={heartActive}
                alt="heart icon active"
                className={`like-btn__icon--liked ${product.liked ? 'active' : ''}`}
              />
            </button>
          </div>

          <Link to={`${ROUTE_PATHS.PRODUCT}/${product.id}`}>
            <h3 className="product-card__title">{product.name}</h3>
          </Link>
          <p className="product-card__brand">{product.brand}</p>
          <div className="product-card__row">
            <div className="product-card__rating">
              <img src={star} alt="star icon" className="product-card__star" />
              <span className="product-card__score">{product.rating}</span>
            </div>
            <span className="product-card__price">${product.price.toFixed(2)}</span>
          </div>
        </article>
      </div>
    </div>
  )
}

export default ProductCard
