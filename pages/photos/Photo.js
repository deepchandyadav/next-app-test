import Image from "next/image";
import styled from "styled-components";

const PhotoDiv = styled.div`
  padding: 10px;
  margin-bottom: 15px;
  background: #c9c4ff;
  color: #1803ff;
  border-radius: 5px;
  width: 125px;
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

export default function Photo({ albumId, id, title, url, thumbnailUrl }) {
  return <PhotoDiv>
    <Image src={thumbnailUrl} width="150" height="150" layout="responsive"></Image>
    <Title>{title}</Title>
  </PhotoDiv>
}
