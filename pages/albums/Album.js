import styled from "styled-components";
import Link from "next/link";

const AlbumDiv = styled.div`
  padding: 10px;
  margin-bottom: 15px;
  background: #c9c4ff;
  color: #1803ff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.p`
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

export default function Album({ id, title }) {
  return <AlbumDiv>
    <Title>{title}</Title>
    <Button><Link href={`/photos?albumId=${id}`}>Photos</Link></Button>
  </AlbumDiv>
}
