
export async function fetchTodos(userId) {
  let api = "https://jsonplaceholder.typicode.com/todos";
  if (userId) {
    api = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;
  }
  const res = await fetch(api)
  const todos = await res.json();
  return todos;
}

export async function fetchUser(userId) {
  if (!userId) return null;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await res.json();
  return user;
}

export async function fetchAlbums(userId) {
  let api = "https://jsonplaceholder.typicode.com/albums";
  if (userId) {
    api = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
  }
  const res = await fetch(api)
  const albums = await res.json();
  return albums;
}

export async function fetchAlbum(albumId) {
  if (!albumId) return null;
  const api = `https://jsonplaceholder.typicode.com/albums?id=${albumId}`;
  const res = await fetch(api)
  const album = await res.json();
  return album;
}

export async function fetchPhotos(albumId) {
  let api = `https://jsonplaceholder.typicode.com/photos`;
  if (albumId) {
    api = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;
  }
  const res = await fetch(api)
  const photos = await res.json();
  return photos;
}


