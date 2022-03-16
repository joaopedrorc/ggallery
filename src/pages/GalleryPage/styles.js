import styled from 'styled-components';

export const Styles = styled.div`
  h2 {
    color: var(--white);
    margin-bottom: 2rem;
  }
  .gallery-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    margin-bottom: 2.5rem;

    @media (min-width: 950px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;

      width: 60%;
      height: 800px;

      margin-right: auto;
      margin-left: auto;
      margin-bottom: 2.5rem;
    }
  }

  .gallery-box {
    width: 100%;
    padding: 1rem 0;

    background-color: var(--primary);
  }
`;
export const GardenHouseContainer = styled.div`
  width: 100%;
  padding: 1rem 0;

  background-color: var(--primary);
`;

export const GardenHouseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  margin-bottom: 2.5rem;

  @media (min-width: 950px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    width: 60%;
    height: 800px;

    margin-right: auto;
    margin-left: auto;
    margin-bottom: 2.5rem;
  }
`;
