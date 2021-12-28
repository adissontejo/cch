import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  height: calc(100vh - 95px);
  background: ${({ theme }) => theme.colors.background};
  max-width: 1400px;
`;

export const Content = styled.main`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: calc(100% - 95px);
  gap: 3rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: column;
  }
`;

export const Menu = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  svg {
    max-width: 80%;
  }

  div {
    display: flex;
    justify-content: space-evenly;
    gap: 1rem;

    button {
      color: ${({ theme }) => theme.colors.white};
      font-family: ${({ theme }) => theme.font.primary};
      font-size: 1.75rem;

      :hover {
        opacity: 0.8;
      }
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      gap: 1.5rem;
      margin-top: 1rem;

      button {
        font-size: 2.175rem;
      }
    }
  }
`;

export const JoinGame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: white;
  padding: 2rem;
  max-width: 400px;

  margin: 0 auto;
  border-radius: 15px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0;
    max-width: unset;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 400;
  font-size: 2.125rem;
  margin-bottom: 2rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid ${props => props.theme.colors.primary};
`;

export const Field = styled.fieldset`
  label {
    display: flex;
    flex-direction: column;

    text-align: center;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};

    margin-bottom: 3rem;

    input {
      padding: 0.5rem;
      border: 2px solid ${({ theme }) => theme.colors.primary};
      border-radius: 15px;
      height: 60px;
      margin-top: 1rem;

      font-size: 1.5rem;
      text-align: center;

      :focus {
        box-shadow: 2px 1px 55px -4px rgba(0, 0, 0, 0.1);
        -webkit-box-shadow: 2px 1px 55px -4px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 2px 1px 55px -4px rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

export const CodeWrapper = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-between;
  flex: 1;

  input {
    display: flex;
    flex: 1;
    width: calc((100% - 60px) / 6);
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  button {
    background: ${({ theme }) => theme.colors.primary};
    padding: 0.5rem;
    width: 80%;
    align-self: center;

    color: white;
    font-size: 1.5rem;
    border-radius: 15px;

    transition: all 0.3s ease;

    :hover {
      opacity: 0.7;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
      margin-top: 1rem;
      width: 100%;
    }
  }

  span {
    display: block;
    margin-top: 0.5rem;
    font-family: ${({ theme }) => theme.font.primary};
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.text};

    a {
      color: ${({ theme }) => theme.colors.secondary};
      transition: all 0.3s ease;

      :hover {
        opacity: 0.7;
      }
    }
  }
`;
