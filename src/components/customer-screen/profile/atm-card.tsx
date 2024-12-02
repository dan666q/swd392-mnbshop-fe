import leafBg from '@/assets/img/card/leaf-bg.svg'
import leaf from '@/assets/img/card/leaf.svg'

type CustomStyleProps = {
  '--bg-color'?: string
  '--margin'?: string
}

export default function AtmCard() {
  const bgColorSelectStyle2: React.CSSProperties & CustomStyleProps = {
    '--bg-color': '#1e2e69',
  }
  return (
    <div className="col">
      <article className="payment-card" style={bgColorSelectStyle2}>
        <img src={leafBg} alt="" className="payment-card__img" />
        <div className="payment-card__top">
          <img src={leaf} alt="" />
          <span className="payment-card__type">FeatherCard</span>
        </div>
        <div className="payment-card__number">1234 4567 2221 8901</div>
        <div className="payment-card__bottom">
          <div>
            <p className="payment-card__label">Card Holder</p>
            <p className="payment-card__value">Imran Khan</p>
          </div>
          <div className="payment-card__expired">
            <p className="payment-card__label">Expired</p>
            <p className="payment-card__value">11/22</p>
          </div>
          <div className="payment-card__circle"></div>
        </div>
      </article>
    </div>
  )
}
