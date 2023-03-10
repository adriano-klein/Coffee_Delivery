import { useContext } from 'react'
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
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { CartContext } from '../../contexts/cartContext'

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
  const { products } = useContext(CartContext)
  console.log(products)
  // const [products, setProducts] = useState<productsProps[]>()
  // const [cart, setCart] = useState<productsProps[]>([])

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3000/products')
  //     .then((response) => setProducts(response.data))
  // }, [])

  // function AddItemToCart(itemId: number) {
  //   const updatedCart = [...cart]
  //   const product = products?.find((product) => product.id === itemId)

  //   if (product) {
  //     const isIncluded = updatedCart.find((product) => product.id === itemId)
  //     if (isIncluded) {
  //       isIncluded.amount += 1
  //     } else {
  //       updatedCart.push({ ...product, amount: 1 })
  //     }
  //   }
  //   setCart(updatedCart)
  // }

  // function RemoveItemToCart(itemId: number) {
  //   const updatedCart = [...cart]
  //   const product = products?.find((product) => product.id === itemId)

  //   if (product) {
  //     const isIncluded = updatedCart.find((product) => product.id === itemId)
  //     if (isIncluded && isIncluded.amount > 0) {
  //       isIncluded.amount -= 1
  //     }
  //   }
  //   setCart(updatedCart)
  // }

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
                        <Minus
                          size={22}
                          onClick={() => RemoveItemToCart(product.id)}
                        />
                        {cart.find((p) => p.id === product.id)?.amount ?? 0}
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
