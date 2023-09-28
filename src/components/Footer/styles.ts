import styled from 'styled-components'

export const FooterContainer = styled.footer`
  max-width: 71.25rem;
  margin: auto;
  border-top: 1px solid ${(props) => props.theme['gray-200']};
  display: flex;
  justify-content: space-between;

  span {
    color: ${(props) => props.theme['gray-700']};
    font-size: 1.125rem;
    font-weight: 400;
    margin: 3.125rem 0;
  }

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
