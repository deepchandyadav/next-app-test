import styled from "styled-components"

const TodoDiv = styled.div`
  padding: 10px;
  margin-bottom: 15px;
  background: #c9c4ff;
  color: #1803ff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`;

const TodoP = styled.p`
  flex-basis: 410px;
`;

const Button = styled.button`
  padding: 5px;
  border-radius: 10px;
  max-height: 30px;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
`;

export default function Todo({ title, onDelete }) {
  return <TodoDiv>
    <TodoP>{title}</TodoP>
    <Button onClick={onDelete}>- Delete</Button>
  </TodoDiv>
}
