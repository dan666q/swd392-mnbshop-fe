import React from 'react'
import ProductCard from './product-card'
import ViewMore from '../view-more'
import { useViewProductList } from '@/features/manager-feature/product-mng/view-product/use-view-product'
import { Spin } from 'antd'
import { ProductDetail } from '@/types'

export default function ProductSection() {
  const { data, isLoading } = useViewProductList()

  if (isLoading) {
    return <Spin tip="Loading..." />
  }

  // Filter products based on rate (for example, only show products with rate >= 4)
  const filteredProducts = data.filter((product) => product.rate >= 4)

  return (
    <div>
      <section className="home__container">
        <div className="home__row">
          <h2 className="home__heading">Best Sellers</h2>
          <ViewMore />
        </div>
        <div className="row row-cols-4 row-cols-lg-2 row-cols-sm-1 gy-3 g-lg-3 g-md-2">
          {filteredProducts?.map((product: ProductDetail) => (
            <ProductCard key={product.productId} {...product} />
          ))}
        </div>
      </section>
    </div>
  )
}
