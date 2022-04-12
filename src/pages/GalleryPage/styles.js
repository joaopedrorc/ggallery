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
  /* align-items: center; */
  text-align: center;

  margin-bottom: 2.5rem;

  h2 {
    color: var(--white);
    margin-bottom: 2rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  min-width: 400px;
  height: 58px;
  padding: 8px;

  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border: 1px solid white;
  /* margin-bottom: 1px; */
`;

export const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CustomButton = styled.button`
  width: 80px;
  height: 43px;
  background-color: ${(props) => (props.active ? 'white' : '#1652f0')};
  border: 1px solid #1652f0;
  border-radius: 4px;
  box-sizing: border-box;
  color: ${(props) => (props.active ? 'black' : '#ffffff')};
  cursor: pointer;
  font-family: Graphik, -apple-system, system-ui, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  line-height: 1.15;
  overflow: visible;
  padding: 12px 16px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: all 80ms ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;

  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  &:hover {
    background-color: white;
    color: black;
    border-color: #0a46e4;
  }
`;

export const CustomButton2 = styled.button`
  width: 80px;
  height: 43px;
  background-color: ${(props) => (props.active ? 'white' : '#1652f0')};
  border: 1px solid #1652f0;
  border-radius: 4px;
  box-sizing: border-box;
  color: ${(props) => (props.active ? 'black' : '#ffffff')};

  cursor: pointer;
  font-family: Graphik, -apple-system, system-ui, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  line-height: 1.15;
  overflow: visible;
  padding: 12px 16px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: all 80ms ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;

  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  &:hover {
    background-color: white;
    color: black;
    border-color: #0a46e4;
  }
`;
