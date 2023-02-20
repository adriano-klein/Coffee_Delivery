import {
  CheckoutContainer,
  DeliveryContainer,
  DeliveryHeaderContainer,
  FormContainer,
  ItensContainer,
  MainContainer,
  PaymentContainer,
  PaymentMethods,
  Amount,
  ItemContainer,
  Totals,
  Button,
  RemoveButton,
} from './styles'

import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Minus,
  Plus,
  Trash,
} from 'phosphor-react'
import { InputForm } from './components/input'
import Americano from '../../assets/Americano.png'

export function Checkout() {
  return (
    <MainContainer>
      <CheckoutContainer>
        <DeliveryContainer>
          <FormContainer>
            <DeliveryHeaderContainer>
              <MapPinLine size={22} />
              <div>
                Informe o endereço onde deseja receber o seu pedido
                <p>Endereço de entrega</p>
              </div>
            </DeliveryHeaderContainer>
            <InputForm type="number" placeHolder="CEP" />
            <InputForm type="text" placeHolder="Rua" />
            <span>
              <InputForm type="number" placeHolder="Número" />
              <InputForm type="text" placeHolder="Complemento" />
            </span>
            <span>
              <InputForm type="text" placeHolder="Bairro" />
              <InputForm type="text" placeHolder="Cidade" />
              <InputForm type="text" placeHolder="UF" />
            </span>
          </FormContainer>
          <PaymentContainer>
            <div>
              <CurrencyDollar size={22} />
              <span>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar.
                </span>
              </span>
            </div>
            <PaymentMethods>
              <span>
                <CreditCard size={22} />
                Cartão de crédito
              </span>
              <span>
                <Bank size={22} />
                Cartão de débito
              </span>
              <span>
                <Money size={22} />
                Dinheiro
              </span>
            </PaymentMethods>
          </PaymentContainer>
        </DeliveryContainer>
      </CheckoutContainer>
      <ItensContainer>
        <ItemContainer>
          <span>
            <img src={Americano} alt="Café americano" />
          </span>
          <Amount>
            <p>Expresso tradicional</p>
            <div>
              <span>
                <Minus size={22} />
                1
                <Plus size={22} />
              </span>
              <RemoveButton>
                <Trash size={22} />
                Remover
              </RemoveButton>
            </div>
          </Amount>
          <p>R$ 9.90</p>
        </ItemContainer>
        <ItemContainer>
          <span>
            <img src={Americano} alt="Café americano" />
          </span>
          <Amount>
            <p>Expresso tradicional</p>
            <div>
              <span>
                <Minus size={22} />
                1
                <Plus size={22} />
              </span>
              <RemoveButton>
                <Trash size={22} />
                Remover
              </RemoveButton>
            </div>
          </Amount>
          <p>R$ 9.90</p>
        </ItemContainer>
        <Totals>
          <div>
            <span>Total de itens</span>
            <span>29,70</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </div>
          <div>
            <span>Total</span>
            <span>R$ 33,20</span>
          </div>
        </Totals>
        <Button>Confirmar pedido</Button>
      </ItensContainer>
    </MainContainer>
  )
}
