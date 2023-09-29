import styled from 'styled-components'

export const BannerSectionContainer = styled.section`
  background-color: ${(props) => props.theme['gray-100']};
  padding-top: 3.125rem;

  @media (max-width: 900px) {
    padding-top: 1.875rem;
  }

  @media (max-width: 784px) {
    padding-top: 0px;
  }
`

export const BannerContainer = styled.div`
  max-width: 71.25rem;
  margin: auto;
  height: 31.25rem;
  display: flex;
  align-items: end;

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
    height: 28.125rem;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding-top: 6.25rem;
    height: 100%;
  }
`

export const LeftArea = styled.div`
  @media (max-width: 784px) {
    width: 100%;
    margin-top: 1.5rem;
  }
`

export const BannerTitle = styled.h1`
  width: 21.875rem;
  font-size: 3.125rem;
  font-weight: 600;
  color: ${(props) => props.theme['gray-700']};

  span {
    color: ${(props) => props.theme['orange-500']};
  }

  @media (max-width: 1280px) {
    font-size: 3rem;
  }

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 900px) {
    max-width: 18.75rem;
    font-size: 2.25rem;
  }

  @media (max-width: 784px) {
    width: 12.5rem;
    font-size: 2rem;
  }

  @media (max-width: 640px) {
    height: 28.125rem;
  }
`

export const BannerPhrase = styled.div`
  width: 18.437rem;
  color: ${(props) => props.theme['gray-700']};
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 1.875rem;

  @media (max-width: 1280px) {
    font-size: 1.375rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.25rem;
  }

  @media (max-width: 900px) {
    margin-top: 1.25rem;
  }

  @media (max-width: 784px) {
    width: 15.625rem;
  }

  @media (max-width: 640px) {
    display: none;
  }
`

export const BannerButtonLeft = styled.button`
  background-color: ${(props) => props.theme['orange-500']};
  color: ${(props) => props.theme.white};
  text-decoration: none;
  width: 13rem;
  height: 4rem;
  border: 0;
  font-size: 1.125rem;
  font-weight: 500;
  margin-top: 3.125rem;
  margin-bottom: 3.125rem;
  cursor: pointer;

  @media (max-width: 900px) {
    margin-top: 1.25rem;
  }

  @media (max-width: 784px) {
    width: 11.25rem;
    height: 3rem;
  }

  @media (max-width: 640px) {
    display: none;
  }
`

export const RightArea = styled.div`
  flex: 1;

  @media (max-width: 640px) {
    margin-bottom: 3.43rem;
    align-self: flex-end;
    display: flex;
    justify-content: end;
    height: 100%;
  }
`

export const BannerImageDesktop = styled.img`
  width: 100%;
  height: 50%;

  @media (max-width: 640px) {
    display: none;
  }
`

export const BannerImageMobile = styled.img`
  width: 100%;
  height: 50%;
  display: none;

  @media (max-width: 640px) {
    display: flex;
    flex: 1;
    max-width: 90%;
  }
`

export const ButtonMobile = styled.button`
  background-color: ${(props) => props.theme['orange-500']};
  color: ${(props) => props.theme.white};
  text-decoration: none;
  width: 13rem;
  height: 4rem;
  border: 0;
  font-size: 1.125rem;
  font-weight: 500;
  margin-top: 3.125rem;
  margin-bottom: 3.125rem;
  cursor: pointer;
  display: none;

  @media (max-width: 640px) {
    display: block;
    background-color: ${(props) => props.theme['orange-500']};
    color: ${(props) => props.theme.white};
    text-decoration: none;
    width: 90%;
    height: 4rem;
    border: 0;
    font-size: 1.125rem;
    font-weight: 500;
    cursor: pointer;
  }
`
