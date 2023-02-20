import { useEffect, useState } from 'react'
import {
  AmountAndCart,
  CardContainer,
  CardFooter,
  CardGrid,
  CardsContainer,
  Cart,
  CategoryContainer,
  ContentTop,
  DescriptionContainer,
  Price,
} from './styles'
import axios from 'axios'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

export interface productsProps {
  id: number
  name: string
  imageUrl: string
  price: string
  category: string
  description: string
  amount: number
}

export function CardBody() {
  const [products, setProducts] = useState<productsProps[]>()
  const [cart, setCart] = useState<productsProps[]>([])
  // console.log(cart)

  useEffect(() => {
    axios
      .get('http://localhost:3000/products')
      .then((response) => setProducts(response.data))
  }, [])

  function AddItemToCart(itemId: number) {
    // TODO: Pegar os itens do carringo
    const updatedCart = [...cart]

    // TODO: verificar se o item existe no carrinho
    const productExists = updatedCart.find((item) => item.id === itemId)

    const currentAmount = productExists ? productExists.amount : 0

    // TODO: Adicionar o item no estado
    const item = products?.find((product) => product.id === itemId)
    if (item) {
      item.amount += 1
      setCart([...cart, item])
    }
  }
  sumSameItem(cart)

  return (
    <CardsContainer>
      <h1>Nossos cafés</h1>
      <CardGrid>
        {products
          ? products.map((product: productsProps) => {
              return (
                <CardContainer key={product.id}>
                  <ContentTop>
                    <img
                      src={product.imageUrl}
                      alt="Xícara de café visto de cima"
                    />
                    <CategoryContainer>
                      <p>{product.category}</p>
                    </CategoryContainer>
                    <DescriptionContainer>
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                    </DescriptionContainer>
                  </ContentTop>
                  <CardFooter>
                    <Price>
                      <span>R$</span>
                      <p>{product.price}</p>
                    </Price>
                    <AmountAndCart>
                      <div>
                        <Minus size={22} />
                        {product.amount}
                        <Plus
                          size={22}
                          onClick={() => AddItemToCart(product.id)}
                        />
                      </div>
                      <Cart>
                        <ShoppingCart weight="fill" />
                      </Cart>
                    </AmountAndCart>
                  </CardFooter>
                </CardContainer>
              )
            })
          : null}
      </CardGrid>
    </CardsContainer>
  )
}
