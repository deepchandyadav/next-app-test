import Link from "next/link";
import styled from "styled-components";

const Button = styled.button`
  padding: 5px;
  border-radius: 10px;
  max-height: 30px;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
`;


const UserDiv = styled.div`
  padding: 10px;
  margin-bottom: 15px;
  background: #c9c4ff;
  color: #1803ff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`;

export default function User({ id, name }) {
  return <UserDiv>
    <p>{name}</p>
    <div>
      <Button>
        <Link href={`/todos?userid=${id}`}>Todos</Link>
      </Button>
      <Button>
        <Link href={`/albums?userid=${id}`}>Albums</Link>
      </Button>
    </div>
  </UserDiv>;
}

