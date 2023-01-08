import styled, { css } from 'styled-components';

export const Item = styled.li`
  padding: 15px;
  border-radius: 10px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${props =>
    props.gender === 'male'
      ? css`
          background-color: AliceBlue;
        `
      : css`
          background-color: Beige;
        `}
`;
export const Name = styled.span`
  color: green;
`;
export const Phone = styled.span`
  margin-left: 30px;
`;
export const List = styled.ul`
  padding: 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  margin-top: 30px;
`;
export const Button = styled.button`
  border: 1px solid gray;
  background-color: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-left: 5px;
`;
