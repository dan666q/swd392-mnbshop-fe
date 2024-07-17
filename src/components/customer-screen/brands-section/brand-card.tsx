import React from 'react'
import categoryImg from '@/assets/img/category-item/brand1.jpg' // Import default image

interface BrandCardProps {
  brandName: string
  brandImg?: string
  madeIn?: string
  description?: string
}

const BrandCard: React.FC<BrandCardProps> = ({ brandName, brandImg, madeIn, description }) => {
  return (
    <div className="col">
      <a href="#">
        <article className="bg-white rounded-lg overflow-hidden h-full">
          <img src={brandImg || categoryImg} alt={brandName} className="w-full h-48 object-cover" />
          <section className="p-4 h-full cate__item_info">
            <h3 className="text-3xl font-bold mb-2">{brandName}</h3>
            <p className="text-2xl text-gray-700 mb-2">{description || 'No description available'}</p>
            {madeIn && <p className=" text-gray-600">Made in: {madeIn}</p>}
          </section>
        </article>
      </a>
    </div>
  )
}

export default BrandCard
