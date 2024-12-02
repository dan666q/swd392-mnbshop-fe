/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { Slider, Input, Button, Tag } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

interface FilterFormProps {
  filters: {
    price: [number, number]
    brand: string
    byAge: [number, number]
  }
  setFilters: React.Dispatch<
    React.SetStateAction<{
      price: [number, number]
      brand: string
      byAge: [number, number]
    }>
  >
}

export default function FilterForm({ filters, setFilters }: FilterFormProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>(filters.price)
  const [brand, setBrand] = useState<string>(filters.brand)
  const [ageRange, setAgeRange] = useState<[number, number]>(filters.byAge)

  const handlePriceChange = (value: [number, number]) => {
    setPriceRange([value[0], value[1]])
  }

  const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrand(e.target.value)
  }

  const handleAgeChange = (value: [number, number]) => {
    setAgeRange([value[0], value[1]])
  }

  const applyFilters = () => {
    setFilters({ price: priceRange, brand, byAge: ageRange })
  }

  return (
    <div>
      <div className="filter-wrap">
        <div className="filter" id="home-filter">
          <h3 className="filter__heading">Filter</h3>
          <form className="filter__form">
            <div
              className="filter__row filter__content"
              style={{ display: 'flex', flexWrap: 'wrap', position: 'relative' }}
            >
              <div className="filter__col" style={{ flex: '0 0 33.3333%', padding: '10px', position: 'relative' }}>
                <label className="filter__form-label">Price</label>
                <div className="filter__form-group">
                  <Slider range defaultValue={priceRange} onChange={handlePriceChange as any} />
                </div>
                <div className="filter__form-group filter__form-group--inline">
                  <div>
                    <label className="filter__form-label filter__form-label--small">Minimum</label>
                    <div className="filter__form-text-input--small">
                      <Input prefix="VND" value={priceRange[0]} readOnly />
                    </div>
                  </div>
                  <div>
                    <label className="filter__form-label filter__form-label--small">Maximum</label>
                    <div className="filter__form-text-input--small">
                      <Input prefix="VND" value={priceRange[1]} readOnly />
                    </div>
                  </div>
                </div>
              </div>

              <div className="filter__col" style={{ flex: '0 0 33.3333%', padding: '10px', position: 'relative' }}>
                <div
                  className="filter__vertical-line"
                  style={{
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    bottom: '0',
                    width: '1px',
                    backgroundColor: '#e0e0e0',
                  }}
                ></div>
                <label className="filter__form-label">Brand</label>
                <div className="filter__form-group">
                  <Input
                    placeholder="Search brand name"
                    prefix={<SearchOutlined />}
                    value={brand}
                    onChange={handleBrandChange}
                  />
                </div>
                <div className="filter__form-group">
                  <div className="filter__form-tags">{brand && <Tag>{brand}</Tag>}</div>
                </div>
              </div>

              <div className="filter__col" style={{ flex: '0 0 33.3333%', padding: '10px', position: 'relative' }}>
                <div
                  className="filter__vertical-line"
                  style={{
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    bottom: '0',
                    width: '1px',
                    backgroundColor: '#e0e0e0',
                  }}
                ></div>
                <label className="filter__form-label">By Age</label>
                <div className="filter__form-group">
                  <Slider range min={1} max={20} defaultValue={ageRange} onChange={handleAgeChange as any} />
                </div>
                <div className="filter__form-group filter__form-group--inline">
                  <div>
                    <label className="filter__form-label filter__form-label--small">Minimum Age</label>
                    <div className="filter__form-text-input--small">
                      <Input value={ageRange[0]} readOnly />
                    </div>
                  </div>
                  <div>
                    <label className="filter__form-label filter__form-label--small">Maximum Age</label>
                    <div className="filter__form-text-input--small">
                      <Input value={ageRange[1]} readOnly />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="filter__row filter__footer">
              {/* <Button className="btn btn--text filter__cancel js-toggle" toggle-target="#home-filter">
                Cancel
              </Button> */}
              <Button
                type="primary"
                className="btn btn--primary filter__submit js-toggle"
                toggle-target="#home-filter"
                onClick={applyFilters}
              >
                Show Result
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
