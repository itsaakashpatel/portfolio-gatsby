/* eslint-disable */ 
import styled from 'styled-components';
import { DialogContent } from '@material-ui/core';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const GridWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  cursor : pointer;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  h4 {
    color: #212121;
  }

  p {
    color: #707070;
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
`;

export const Stats = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items : flex-end;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    span {
      color: #000;
      margin-left: 0.5rem;
    }
  }
`;

export const DialogBody = styled.div`
  margin  : 0 auto;
  width   : 90%;


`
export const DialogContentWrapper = styled(DialogContent)`
  .content {
    padding: 10px 0;
    .type, .description, .technology, .problem, .solution, .github {
      display : flex;

      div {
        font-size : 18px;
        font-weight : bold;
        min-width : 120px;
      }

      .button {
        padding : 0;
        justify-content: flex-start;

        &:hover {
          background-color : rgba(0, 0, 0, 0.04)
        }
      }
    }
  }

`
