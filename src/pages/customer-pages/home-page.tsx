import BlogsSection from '@/components/customer-screen/blog/blogs-section'
import BrandSection from '@/components/customer-screen/brands-section/brand-section'
import ProductSection from '@/components/customer-screen/product/product-section'
import SlideShow from '@/components/customer-screen/slideshow'

export default function HomePage() {
  return (
    <div>
      <div className="container home">
        <SlideShow />
        <BrandSection />
        <ProductSection />
        <BlogsSection />
      </div>
    </div>
  )
}
