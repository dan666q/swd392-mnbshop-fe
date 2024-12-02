import search from '@/assets/icons/search.svg'

export default function SearchBarMobile() {
  return (
    <div>
      <div className="checkout-container">
        <div className="search-bar d-none d-md-flex">
          <input type="text" name="" id="" placeholder="Search for item" className="search-bar__input" />
          <button className="search-bar__submit">
            <img src={search} alt="" className="search-bar__icon icon" />
          </button>
        </div>
      </div>
    </div>
  )
}
