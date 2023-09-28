import {
  InstaV1,
  InstaV2,
  KeepTouchArea1,
  KeepTouchArea1H2,
  KeepTouchArea1P,
  KeepTouchArea2,
  KeepTouchArea2Link,
  KeepTouchArea2Title,
  KeepTouchArea3,
  KeepTouchArea3Socials,
  KeepTouchArea3SocialsImg,
  KeepTouchArea3Title,
  KeepTouchContainer,
  TwitterV1,
  TwitterV2,
  WhatsV1,
  WhatsV2,
} from './styles'

import InstaImage from '../../assets/instagram-line.png'
import InstaImageV2 from '../../assets/instagramVariant2.png'
import WppV1 from '../../assets/whatsapp-line.png'
import WppV2 from '../../assets/wpp-Variant2 (1).png'
import Twt from '../../assets/twitter-line.png'
import TwtV2 from '../../assets/twitter-Variant2.png'

export const KeepTouch = () => {
  return (
    <KeepTouchContainer>
      <KeepTouchArea1>
        <KeepTouchArea1H2>
          <i>B7.Car</i>
        </KeepTouchArea1H2>
        <KeepTouchArea1P>O carro perfeito para você.</KeepTouchArea1P>
      </KeepTouchArea1>
      <KeepTouchArea2>
        <KeepTouchArea2Title>Navegue</KeepTouchArea2Title>
        <KeepTouchArea2Link>Galeria</KeepTouchArea2Link>
        <KeepTouchArea2Link>Versões</KeepTouchArea2Link>
      </KeepTouchArea2>
      <KeepTouchArea3>
        <KeepTouchArea3Title>Redes Sociais</KeepTouchArea3Title>
        <KeepTouchArea3Socials>
          <KeepTouchArea3SocialsImg>
            <a href="">
              <InstaV1 className="insta-v1" alt="Instagram" src={InstaImage} />
            </a>
            <a href="">
              <InstaV2
                className="insta-v2"
                alt="Instagram alternativo"
                src={InstaImageV2}
              />
            </a>
          </KeepTouchArea3SocialsImg>
          <KeepTouchArea3SocialsImg>
            <a href="">
              <WhatsV1 alt="WhastApp" className="wpp-v1" src={WppV1} />
            </a>
            <a href="">
              <WhatsV2
                alt="WhastApp alternativo"
                className="wpp-v2"
                src={WppV2}
              />
            </a>
          </KeepTouchArea3SocialsImg>
          <KeepTouchArea3SocialsImg>
            <a href="">
              <TwitterV1 alt="Twitter" className="twt-v1" src={Twt} />
            </a>
            <a href="">
              <TwitterV2
                alt="Twitter alternativo"
                className="twt-v2"
                src={TwtV2}
              />
            </a>
          </KeepTouchArea3SocialsImg>
        </KeepTouchArea3Socials>
      </KeepTouchArea3>
    </KeepTouchContainer>
  )
}
