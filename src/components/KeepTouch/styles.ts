import styled from 'styled-components'

export const KeepTouchContainer = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 71.25rem;
  margin: auto;
  margin-top: 1.875rem;

  @media (max-width: 1280px) {
    max-width: 64rem;
  }

  @media (max-width: 1024px) {
    max-width: 56.25rem;
  }

  @media (max-width: 900px) {
    max-width: 49.125rem;
  }

  @media (max-width: 784px) {
    max-width: 40rem;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`

export const KeepTouchArea1 = styled.div`
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    text-align: center;
  }
`

export const KeepTouchArea1H2 = styled.h2`
  font-size: 2.81rem;
  font-weight: 700;
  color: ${(props) => props.theme['orange-500']};
`

export const KeepTouchArea1P = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  margin-top: 1.875rem;
  color: ${(props) => props.theme['gray-700']};
`

export const KeepTouchArea2 = styled.div`
  margin-right: 3.125rem;

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    margin-top: 1.25rem;
  }
`

export const KeepTouchArea2Title = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${(props) => props.theme['gray-700']};
  margin-bottom: 2rem;
`

export const KeepTouchArea2Link = styled.div`
  font-size: 1.125rem;
  font-weight: 400;
  color: ${(props) => props.theme['gray-400']};
  margin-bottom: 2rem;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0.625rem;
  }
`

export const KeepTouchArea3 = styled.div`
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    margin-top: 1.25rem;
    margin-bottom: 4.68rem;
  }
`

export const KeepTouchArea3Title = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${(props) => props.theme['gray-700']};
  margin-bottom: 2rem;
`

export const KeepTouchArea3Socials = styled.div`
  width: 11rem;
  display: flex;
  justify-content: space-between;
`

export const KeepTouchArea3SocialsImg = styled.div`
  width: 3rem;
  height: 3rem;
  border: 1px solid ${(props) => props.theme['gray-200']};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover .insta-v1,
  &:hover .wpp-v1,
  &:hover .twt-v1 {
    display: none;
  }

  &:hover .insta-v2,
  &:hover .wpp-v2,
  &:hover .twt-v2 {
    display: flex;
  }
`

export const InstaV1 = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`

export const InstaV2 = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  display: none;
`

export const WhatsV1 = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`

export const WhatsV2 = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  display: none;
`

export const TwitterV1 = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`

export const TwitterV2 = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  display: none;
`
