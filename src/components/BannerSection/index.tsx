import {
  BannerButtonLeft,
  BannerContainer,
  BannerImageDesktop,
  BannerImageMobile,
  BannerPhrase,
  BannerSectionContainer,
  BannerTitle,
  LeftArea,
  RightArea,
} from './styles'

import BannerImg from '../../assets/banner.png'
import EmailCarImg from '../../assets/email-car.png'
import { ButtonMobile } from '../BannerSection/styles'

export const BannerSection = () => {
  return (
    <BannerSectionContainer>
      <BannerContainer>
        <LeftArea>
          <BannerTitle>
            O CARRO PERFEITO PARA <span>VOCÊ</span>.
          </BannerTitle>
          <BannerPhrase>
            Cuidado, essa máquina
            <br /> vai te deixar apaixonado!
          </BannerPhrase>
          <BannerButtonLeft>Tenho interesse</BannerButtonLeft>
        </LeftArea>
        <RightArea>
          <BannerImageDesktop
            alt="Banner desktop"
            className="desktop"
            src={BannerImg}
          />
          <BannerImageMobile
            alt="Banner mobile"
            className="mobile"
            src={EmailCarImg}
          />
        </RightArea>
        <ButtonMobile className="mobile">Tenho interesse</ButtonMobile>
      </BannerContainer>
    </BannerSectionContainer>
  )
}
