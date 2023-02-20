import {
  CardContainer,
  CategoryContainer,
  DescriptionContainer,
  CardFooter,
  AmountAndCart,
  Cart,
  ContentTop,
  Price,
} from './styles'
import { Plus, Minus, ShoppingCart } from 'phosphor-react'
import { useEffect } from 'react'
import axios from 'axios'

interface productsProps {
  products?: {
    id: string
    name: string
    imageUrl: string
    price: number
  }
}

export function Card(products: productsProps) {
  return (
    <CardContainer>
      <ContentTop>
        <img src={products.products} alt="Xícara de café visto de cima" />
        <CategoryContainer>
          <p>Tradicional</p>
        </CategoryContainer>
        <DescriptionContainer>
          <h3>Expresso Tradicional</h3>
          <p>O tradicional café feito com água quente e grãos moídos</p>
        </DescriptionContainer>
      </ContentTop>
      <CardFooter>
        <Price>
          <span>R$</span>
          <p>9.90</p>
        </Price>
        <AmountAndCart>
          <div>
            <Minus size={22} />
            1
            <Plus size={22} />
          </div>
          <Cart>
            <ShoppingCart weight="fill" />
          </Cart>
        </AmountAndCart>
      </CardFooter>
    </CardContainer>
  )
}
