import cn from 'clsx'
import { inherits } from 'util'
import s from './ProductTag.module.css'

interface ProductTagProps {
  className?: string
  name: string
  price: string
  fontSize?: number
}

const ProductTag: React.FC<ProductTagProps> = ({
  name,
  price,
  className = '',
  fontSize = 32,
}) => {
  return (
    <div className={cn(s.root, className)} data-test="product-tag">
      <h3 className={s.name}>
        <span
          data-test="product-name"
          className={cn({ [s.fontsizing]: fontSize < 32 })}
          style={{
            fontSize: `${fontSize}px`,
            lineHeight: `${fontSize}px`,
          }}
        >
          {name}
        </span>
      </h3>
      <div className={s.price} data-test="product-price">
        {price}
      </div>
    </div>
  )
}

export default ProductTag
