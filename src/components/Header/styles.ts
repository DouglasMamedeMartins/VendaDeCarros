import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.875rem;
  position: fixed;
  border-bottom: 1px solid ${(props) => props.theme['gray-200']};
  background-color: ${(props) => props.theme['gray-100']};
`

export const HeaderNav = styled.nav`
  max-width: 71.25rem;
  height: 100%;
  padding: 0.625rem 1.25rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    max-width: 56.25rem;
  }

  @media (max-width: 900px) {
    max-width: 49.125rem;
  }

  @media (max-width: 784px) {
    max-width: 40rem;
  }
`

export const MenuLeft = styled.div`
  display: flex;
  font-size: 1.125rem;
  font-weight: 400;
  align-items: center;
  justify-content: space-between;
  width: 30%;

  img {
    width: 4.375rem;
    height: 1.125rem;
  }
`

export const MenuRight = styled.div`
  img {
    display: none;
  }
  @media (max-width: 640px) {
    img {
      display: flex;
    }
  }
`

export const MenuLink = styled.a`
  color: ${(props) => props.theme['gray-400']};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme['orange-500']};
  }

  @media (max-width: 640px) {
    display: none;
  }
`

export const MenuButton = styled.button`
  width: 13rem;
  height: 4rem;
  background-color: ${(props) => props.theme['gray-100']};
  border: 1px solid ${(props) => props.theme['gray-200']};
  font-size: 1.125rem;
  color: ${(props) => props.theme['orange-500']};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['orange-500']};
  }

  @media (max-width: 640px) {
    display: none;
  }
`
