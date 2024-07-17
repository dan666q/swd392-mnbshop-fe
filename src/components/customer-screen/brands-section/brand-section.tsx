import React from 'react'
import { Carousel, Spin } from 'antd'
import ViewMore from '../view-more'
import { useViewBrandList } from '@/features/manager-feature/brand-mng/view-brand/use-view-brand-list'
import BrandCard from './brand-card'

export default function BrandSection() {
  const { data, isLoading } = useViewBrandList()

  if (isLoading) {
    return <Spin tip="Loading..." />
  }

  return (
    <div>
      <section className="home__container">
        <div className="home__row">
          <h2 className="home__heading">Browse Brands</h2>
          <ViewMore />
        </div>
        <div className="home__cate">
          <Carousel dots autoplay slidesToShow={3} slidesToScroll={3} className="mx-auto">
            {data?.map((brand) => (
              <div key={brand.brandId} className="px-2">
                <BrandCard
                  brandName={brand.brandName}
                  brandImg={brand.brandImg}
                  madeIn={brand.madeIn}
                  description={brand.description}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  )
}
