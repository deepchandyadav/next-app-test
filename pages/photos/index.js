import { fetchAlbum, fetchPhotos } from "../../helpers";
import Photo from "./Photo";
import styled from "styled-components";

export async function getServerSideProps(context) {
  const { albumId } = context.query;
  const [album, photos] = await Promise.all([
    fetchAlbum(albumId),
    fetchPhotos(albumId),
  ]);
  return {
    props: {
      album: album?.[0] ?? null,
      photos
    }
  }
}

const PhotosList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function Photos({ album, photos }) {
  const pageTitle = album ? `${album.title}'s Photos` : 'All Photos';

  return (
    <>
      <h1 className="page-title">{pageTitle}</h1>
      <PhotosList>
        {photos.map(photo => <Photo key={photo.id} {...photo} />)}
      </PhotosList>
    </>
  )
}