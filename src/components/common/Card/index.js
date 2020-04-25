import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0px, 100%, 0px);
  }

  100% {
    opacity: 1;
    transform: none;
  }
`;

export const Card = styled.div`
  padding: 1rem;
  background: #fff;
  height: 100%;

  /* &:hover {
    animation-name: ${animation};
    animation-duration: 8s;
  } */
`;
