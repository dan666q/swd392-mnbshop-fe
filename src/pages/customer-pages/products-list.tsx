import React from 'react'
import ProductCard from '@/components/customer-screen/product/product-card'
import FilterForm from '@/components/customer-screen/filter-form'
import CategoriesSection from '@/components/customer-screen/categories/categories-section'
import { mockProducts } from '@/mock/mockProduct' // Adjust the import path as needed
import { Product } from '@/types'

const ProductsList: React.FC = () => {
  return (
    <div className="container page">
      <section className="page__container">
        <div className="page__row">
          <h2 className="page__heading">Product</h2>
          <FilterForm />
          <div className="mb-10">
            <CategoriesSection />
          </div>
        </div>
        <div className="row row-cols-4 row-cols-lg-2 row-cols-sm-1 gy-3 g-lg-3 g-md-2">
          {mockProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductsList
