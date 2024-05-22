import ProductCard from '@/components/customer-screen/product-card'
import ProductFilter from '@/components/customer-screen/product-filter'

export default function ProductsList() {
  return (
    <div className="container home">
      <section className="home__container">
        <div className="home__row">
          <h2 className="home__heading">Total LavAzza 1320</h2>
          <ProductFilter />
        </div>
        <div className="row row-cols-4 row-cols-lg-2 row-cols-sm-1 gy-3 g-lg-3 g-md-2">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </div>
  )
}
