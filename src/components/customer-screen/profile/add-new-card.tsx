import plus from '@/assets/icons/plus.svg'

export default function AddNewCard() {
  return (
    <div>
      <div className="col">
        <a className="new-card" href="./add-new-card.html">
          <img src={plus} alt="" className="new-card__icon icon" />
          <p className="new-card__text">Add New Card</p>
        </a>
      </div>
    </div>
  )
}
