import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 0;

  background-color: var(--primary);
`;

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  margin-bottom: 2.5rem;

  h2 {
    color: var(--white);
    margin-bottom: 2rem;
  }
`;
