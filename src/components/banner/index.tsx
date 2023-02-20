import { BannerContainer, Bullets, MainText } from './styles'
import CoffeeBanner from '../../assets/CoffeeBanner.png'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

export function Banner() {
  return (
    <BannerContainer>
      <MainText>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora.
        </p>
        <Bullets>
          <section>
            <ShoppingCart weight="fill" />
            Compra simples e segura
          </section>
          <section>
            <Timer weight="fill" />
            Entrega rápida e rastreada
          </section>
          <section>
            <Package weight="fill" />
            Embalagem mantém o café intacto
          </section>
          <section>
            <Coffee weight="fill" />O café chega fresquinho até você
          </section>
        </Bullets>
      </MainText>
      <img
        src={CoffeeBanner}
        alt="Imagem de um copo de café branco com uma faixa preta escrito Coffee Delivery em cinza. Na parte de trás 
        existem grãos de café"
      />
    </BannerContainer>
  )
}
