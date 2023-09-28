import styled from 'styled-components'

export const VersionsContainer = styled.section`
  margin: auto;
  margin-top: 1.875rem;
  max-width: 71.25rem;
  display: flex;

  @media (max-width: 1280px) {
    max-width: 64rem;
  }

  @media (max-width: 1024px) {
    max-width: 56.25rem;
  }

  @media (max-width: 900px) {
    max-width: 49.125rem;
  }
`

export const VersionsLeftArea = styled.div`
  margin-right: 3.125rem;
  min-width: 18.75rem;
  height: 100%;
`

export const VersionsAreaH3 = styled.h3`
  font-size: 2.5rem;
  font-weight: 500;
  color: ${(props) => props.theme['gray-700']};
  line-height: 2.125rem;
  margin-bottom: 2.81rem;

  @media (max-width: 900px) {
    font-size: 1.75rem;
  }
`

export const VersionsButtons = styled.button`
  margin-bottom: 4.375rem;

  button {
    width: 10.625rem;
    height: 3.125rem;
    border-radius: 48px;
    border: 0;
    color: ${(props) => props.theme['gray-300']};
    background-color: ${(props) => props.theme.white};
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['orange-500']};
      color: ${(props) => props.theme.white};
    }
    &.active {
      background-color: ${(props) => props.theme['orange-500']};
      color: ${(props) => props.theme.white};
    }

    @media (max-width: 1024px) {
      width: 7.5rem;
      height: 2.5rem;
    }
  }
`

export const VersionsImageCar = styled.img`
  width: 100%;
  height: 40%;
  margin-bottom: 4.375rem;
`

export const VersionsPrice = styled.div`
  font-size: 1.125rem;
  font-weight: 400;
  color: ${(props) => props.theme['gray-700']};
  line-height: 2.125rem;

  span {
    color: ${(props) => props.theme['orange-500']};
  }
`

export const VersionsRightArea = styled.div`
  min-width: 31.25rem;

  @media (max-width: 900px) {
    max-width: 25rem;
  }
`

export const VersionsRightAreaH3 = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.125rem;
  color: ${(props) => props.theme['gray-700']};

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 900px) {
    font-size: 1.625rem;
  }
`

export const VersionsFeatures = styled.div`
  display: flex;
  margin: 1.25rem;
  width: 90%;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme['gray-200']};
  padding: 1.25rem;

  p {
    font-size: 1.375rem;
    font-weight: 400;
    line-height: 2.125rem;
    color: ${(props) => props.theme['gray-700']};

    @media (max-width: 1280px) {
      font-size: 1.25rem;
    }

    @media (max-width: 1024px) {
      font-size: 1.125rem;
    }

    @media (max-width: 900px) {
      font-size: 1rem;
    }
  }

  img {
    width: 1.56rem;
    height: 1.56rem;
    margin-right: 1.25rem;
  }
`

export const VersionsFeaturesLast = styled.div`
  border: 0;
`

export const Button = styled.button`
  width: 13rem;
  height: 4rem;
  background-color: ${(props) => props.theme['orange-500']};
  border: 1px solid ${(props) => props.theme['gray-200']};
  font-size: 1.125rem;
  font-weight: 400;
  color: ${(props) => props.theme.white};
  cursor: pointer;
  margin-top: 6rem;

  @media (max-width: 1280px) {
    margin-top: 3.125rem;
  }

  @media (max-width: 1024px) {
    margin-top: 0;
    height: 3rem;
  }
`
