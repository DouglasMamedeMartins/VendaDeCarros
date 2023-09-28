import styled from 'styled-components'

export const EmailAreaContainer = styled.section`
  background: linear-gradient(
    to right,
    ${(props) => props.theme['gray-900']},
    ${(props) => props.theme['gray-700']}
  );
  height: 33.375rem;
  max-width: 71.25rem;
  margin: auto;
  margin-top: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 10px 2px -2px ${(props) => props.theme['gray-600']};

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

export const EmailAreaLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 24rem;
  margin-left: 6.5rem;

  @media (max-width: 900px) {
    width: 18.75rem;
    margin-left: 5rem;
  }
`

export const EmailAreaLeftH3 = styled.h3`
  font-size: 2rem;
  color: ${(props) => props.theme.white};
  margin-bottom: 1.5rem;
`

export const EmailAreaLeftInput = styled.input`
  width: 90%;
  height: 4rem;
  padding: 0.93rem;
  font-size: 1.125rem;
  outline-color: ${(props) => props.theme['orange-500']};
  margin-bottom: 1.5rem;
`

export const EmailAreaLeftButton = styled.button`
  width: 90%;
  height: 4rem;
  font-size: 1.125rem;
  font-weight: 400;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['orange-500']};
  border: 0;
  cursor: pointer;
`

export const EmailAreaRight = styled.div`
  flex: 1;

  img {
    width: 100%;
    height: 65%;
  }
`
