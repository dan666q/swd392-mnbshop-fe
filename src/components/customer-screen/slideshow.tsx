import React from 'react'
import { Carousel } from 'antd'
import slideShow1 from '@/assets/img/slideshow/31424.jpg' // Ensure paths are correct
import slideShow2 from '@/assets/img/slideshow/srcset.jpeg' // Example additional image
import 'src/scss/components/_slideshow.scss' // Import the SCSS file
import { useViewPromotionList } from '@/features/manager-feature/promotion-mng/view-promotion/use-view-promotion-list'

const images = [slideShow1, slideShow2] // Add your image sources here

const SlideShow: React.FC = () => {
  const carouselRef = React.useRef<any>(null)
  const { data: promotion } = useViewPromotionList()
  console.log(promotion)

  return (
    <div className="home__container relative">
      <div className="slideshow">
        <Carousel autoplay ref={carouselRef} className="slideshow__inner">
          {promotion?.map((promote: any, index: any) => (
            <div key={promote?.promotionId} className="slideshow__item">
              <picture>
                <source media="(max-width: 767.98px)" srcSet={promote?.promotionImg} />
                <img src={promote?.promotionImg} alt={`Slide ${index}`} className="slideshow__img" />
              </picture>
            </div>
          ))}
        </Carousel>
        <div className="slideshow__page">
          {images.map((_, index) => (
            <div key={index}></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SlideShow
