import {
  Button,
  VersionsAreaH3,
  VersionsButtons,
  VersionsContainer,
  VersionsFeatures,
  VersionsFeaturesLast,
  VersionsLeftArea,
  VersionsPrice,
  VersionsRightArea,
  VersionsRightAreaH3,
} from './styles'

import CarImg from '../../assets/img-carro 1.png'
import BombaGasoline from '../../assets/gas-station-line.png'
import CronometroImg from '../../assets/timer-line.png'
import VelocimetroImg from '../../assets/speed-up-fill.png'
import RaioImg from '../../assets/flashlight-line.png'

export const Versions = () => {
  return (
    <VersionsContainer>
      <VersionsLeftArea>
        <VersionsAreaH3>
          Escolha versão que <br />
          combina com você.
        </VersionsAreaH3>
        <VersionsButtons>
          <button className="active">Aventador S</button>
          <button>Aventador B7</button>
        </VersionsButtons>
        <img alt="Imagem da versão do carro" src={CarImg} />
        <VersionsPrice>
          A partir de{' '}
          <span>
            <strong>
              <i>R$1.115.000,00</i>
            </strong>
          </span>
        </VersionsPrice>
      </VersionsLeftArea>
      <VersionsRightArea>
        <VersionsRightAreaH3>Diferenciais da Aventador S</VersionsRightAreaH3>
        <VersionsFeatures>
          <img alt="Bomba de gasolina" src={BombaGasoline} />
          <p>Consumo médio de 16.9 litros/100 km</p>
        </VersionsFeatures>
        <VersionsFeatures className="versions-features">
          <img alt="Cronômetro" src={CronometroImg} />
          <p>0 aos 100 km/h em 2.9 segundos</p>
        </VersionsFeatures>
        <VersionsFeatures className="versions-features">
          <img alt="Velecímetro" src={VelocimetroImg} />
          <p>Velocidade máxima de 350 km/h</p>
        </VersionsFeatures>
        <VersionsFeaturesLast className="versions-features last">
          <img alt="Raio" src={RaioImg} />
          <p>Potência máxima de 740 CV</p>
        </VersionsFeaturesLast>
        <Button>Tenho interesse</Button>
      </VersionsRightArea>
    </VersionsContainer>
  )
}
