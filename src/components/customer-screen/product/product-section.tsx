import ProductCard from './product-card'
import ViewMore from '../view-more'
import { mockProducts } from '@/mock/mockProduct'
import { CustomerProductCard } from '@/types'

export default function ProductSection() {
  // Sort products by rating in descending order and get the top 4
  const topRatedProducts = [...mockProducts].sort((a, b) => b.rating - a.rating).slice(0, 4)

  return (
    <div>
      <section className="home__container">
        <div className="home__row">
          <h2 className="home__heading">Best seller</h2>
          <ViewMore />
        </div>
        <div className="row row-cols-4 row-cols-lg-2 row-cols-sm-1 gy-3 g-lg-3 g-md-2">
          {topRatedProducts.map((product: CustomerProductCard) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
