// CategoryCard.tsx
import { Brand } from '@/types'
import React from 'react'

interface CategoryCardProps {
  brand: Brand
}

export default function CategoryCard({ brand }: CategoryCardProps) {
  return (
    <div className="col">
      <a href="">
        <article className="cate-item">
          <img src={brand.brandImg} alt={brand.brandName} className="cate-item__thumb" />
          <section className="cate-item__info">
            <h3 className="cate-item__title">{brand.brandName}</h3>
            <p className="cate-item__desc">{brand.brandDesc}</p>
          </section>
        </article>
      </a>
    </div>
  )
}
