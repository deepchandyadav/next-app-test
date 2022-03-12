import { fetchUser, fetchAlbums } from "../../helpers";
import Album from "./Album";

export async function getServerSideProps(context) {
  const { userid } = context.query;
  const [user, albums] = await Promise.all([
    fetchUser(userid),
    fetchAlbums(userid),
  ]);
  return {
    props: {
      albums,
      user
    }
  }
}

export default function Albums({ albums, user }) {
  const pageTitle = user ? `${user.name}'s Albums` : 'All Albums';

  return (
    <>
      <h1 className="page-title">{pageTitle} </h1>
      {albums.map(album => <Album key={album.id} {...album} />)}
    </>
  )
}