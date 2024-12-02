import React, { useState } from 'react'
import ProductCard from '@/components/customer-screen/product/product-card'
import FilterForm from '@/components/customer-screen/filter-form'
import { useViewProductList } from '@/features/manager-feature/product-mng/view-product/use-view-product'
import { ProductDetail } from '@/types'

export default function ProductsList() {
  const { data } = useViewProductList()
  const [filters, setFilters] = useState({ price: [0, 100000000], brand: '', byAge: [0, 30] })

  const filteredData = data?.filter((product: ProductDetail) => {
    const inPriceRange = product.productPrice >= filters.price[0] && product.productPrice <= filters.price[1]
    const matchesBrand =
      filters.brand === '' || product.productBrand.toLowerCase().includes(filters.brand.toLowerCase())
    const matchesAge = product.byAge >= filters.byAge[0] && product.byAge <= filters.byAge[1]
    return inPriceRange && matchesBrand && matchesAge
  })

  return (
    <div className="container page">
      <section className="page__container">
        <div className="page__row">
          <h2 className="page__heading">Product</h2>
          <FilterForm filters={filters} setFilters={setFilters} />
          <div className="mb-10">{/* <CategoriesSection /> */}</div>
        </div>
        <div className="row row-cols-4 row-cols-lg-2 row-cols-sm-1 gy-3 g-lg-3 g-md-2">
          {filteredData?.map((product: ProductDetail) => (
            <ProductCard key={product.productId} {...product} />
          ))}
        </div>
      </section>
    </div>
  )
}
