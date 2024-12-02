import React from 'react'
import ProductCard from './product-card'
import ViewMore from '../view-more'
import { useViewProductList } from '@/features/manager-feature/product-mng/view-product/use-view-product'
import { Spin } from 'antd'
import { ProductDetail } from '@/types'

const ProductSection = () => {
  const { data, isLoading, error } = useViewProductList()

  if (isLoading) {
    return <Spin tip="Loading..." />
  }

  if (error) {
    return <div>Error loading products: {error.message}</div>
  }

  // Check the data structure and types
  console.log('Fetched products:', data)

  // Ensure rate is a number
  const filteredProducts = data
    .map((product) => ({
      ...product,
      rate: typeof product.rate === 'string' ? parseFloat(product.rate) : product.rate,
    }))
    .sort((a, b) => b.rate - a.rate) // Sort by rate descending
    .slice(0, 4) // Take the top 4 products

  return (
    <div>
      <section className="home__container">
        <div className="home__row">
          <h2 className="home__heading">Best Sellers</h2>
          <ViewMore />
        </div>
        <div className="row row-cols-4 row-cols-lg-2 row-cols-sm-1 gy-3 g-lg-3 g-md-2">
          {filteredProducts.map((product: ProductDetail) => (
            <ProductCard key={product.productId} {...product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductSection
