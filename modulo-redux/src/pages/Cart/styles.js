import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  background-color: #ffffff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #7159c1;
      padding: 6px 12px;
      border-radius: 4px;
      color: #ffff;
      border: 0;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;
      &:hover {
        filter: brightness(97%);
      }
    }
  }
`;
export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 15px;
  }

  tbody td {
    padding: 15px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px 12px;
  }
`;
export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
