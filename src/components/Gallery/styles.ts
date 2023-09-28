import styled from 'styled-components'

export const GalleryContainer = styled.section`
  max-width: 71.25rem;
  margin: auto;
  margin-top: 1.875rem;

  @media (max-width: 1280px) {
    max-width: 64rem;
  }

  @media (max-width: 1024px) {
    max-width: 56.25rem;
  }
`

export const GalleryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1.875rem;

  @media (max-width: 1024px) {
    margin-bottom: 1.25rem;
  }
`

export const GalleryTitle = styled.h3`
  color: ${(props) => props.theme['gray-700']};
  font-size: 2.5rem;
  font-weight: 500;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`

export const GalleryButtonHeader = styled.button`
  width: 13rem;
  height: 4rem;
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme['gray-200']};
  font-size: 1.125rem;
  font-weight: 400;
  color: ${(props) => props.theme['orange-500']};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['orange-500']};
  }

  @media (max-width: 1024px) {
    height: 3rem;
  }

  @media (max-width: 640px) {
    display: none;
  }
`

export const GalleryPhotos = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 33%;
    height: 34.375rem;

    &:last-child {
      margin-right: 0;
    }

    @media (max-width: 1024px) {
      height: 28.125rem;
    }

    @media (max-width: 900px) {
      height: 25rem;
    }
  }
`

export const GalleryButton = styled.button`
  width: 13rem;
  height: 4rem;
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme['gray-200']};
  font-size: 1.125rem;
  font-weight: 400;
  color: ${(props) => props.theme['orange-500']};
  cursor: pointer;
  display: none;

  &:hover {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['orange-500']};
  }
`
