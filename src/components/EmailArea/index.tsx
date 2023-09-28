import {
  EmailAreaContainer,
  EmailAreaLeft,
  EmailAreaLeftButton,
  EmailAreaLeftH3,
  EmailAreaLeftInput,
  EmailAreaRight,
} from './styles'

import EmailCarImage from '../../assets/email-car.png'

export const EmailArea = () => {
  return (
    <EmailAreaContainer>
      <EmailAreaLeft>
        <EmailAreaLeftH3>
          Inscreva-se e receba todas as novidades.
        </EmailAreaLeftH3>
        <EmailAreaLeftInput
          type="email"
          placeholder="Digite seu melhor e-mail"
        />
        <EmailAreaLeftButton>Realizar inscrição</EmailAreaLeftButton>
      </EmailAreaLeft>
      <EmailAreaRight>
        <img alt="Banner email" src={EmailCarImage} />
      </EmailAreaRight>
    </EmailAreaContainer>
  )
}
