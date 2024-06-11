// CategoriesSection.tsx
import React from 'react'
import ViewMore from '../view-more' // Adjust the import path if needed
import { mockBrands } from '@/mock/mockBrand'
import CategoryCard from './category-card'

const CategoriesSection: React.FC = () => {
  return (
    <div>
      <section className="home__container">
        <div className="home__row">
          <h2 className="home__heading">Browse Categories</h2>
          <ViewMore />
        </div>
        <div className="home__cate row row-cols-3 row-cols-md-1">
          {mockBrands.map((brand) => (
            <CategoryCard key={brand.brandId} brand={brand} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default CategoriesSection
