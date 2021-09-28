import styled from 'styled-components';

const mobile = 768;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.main`
  display: flex;
  align-items: center;
  width: 100%;
  height: calc(100% - 95px);

  section {
    width: 100%;
    background: white;
    padding: 2rem;
    max-width: 530px;

    margin: 0 auto;
    border: 1px solid ${({ theme }) => theme.colors.accent};
    border-radius: 8px;

    @media screen and (max-width: ${mobile}px) {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 1.5rem;
`;

export const Field = styled.fieldset`
  label {
    display: flex;
    flex-direction: column;

    text-align: center;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};

    margin-bottom: 1rem;

    input {
      padding: 0.5rem;
      border: 1px solid ${({ theme }) => theme.colors.accent};
      border-radius: 5px;
      height: 60px;
      margin-top: 1rem;

      font-size: 1.5rem;
      text-align: center;
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
    background: ${({ theme }) => theme.colors.accent};
    padding: 0.5rem;
    width: 80%;
    align-self: center;

    color: white;
    font-size: 1.5rem;
    border-radius: 5px;

    transition: all 0.3s ease;

    :hover {
      opacity: 0.7;
    }

    @media screen and (max-width: ${mobile}px) {
      margin-top: 1rem;
      width: 100%;
    }
  }

  a {
    margin-top: 0.5rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.primary};
    transition: all 0.3s ease;

    :hover {
      opacity: 0.7;
    }
  }
`;
