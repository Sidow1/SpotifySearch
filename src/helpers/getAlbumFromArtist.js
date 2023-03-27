import { getSpotifyToken } from "./getSpotifyToken"

export const getAlbumFromArtist = async(artist) => {

    const accessToken = await getSpotifyToken();
  
    const authParameters = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    }

    const result = await fetch(`https://api.spotify.com/v1/search?q=${artist}&type=artist`, authParameters);
    const data = await result.json();
    const idArtist = data.artists.items[0].id;

    const result2 = await fetch(`https://api.spotify.com/v1/artists/${idArtist}/albums?include_groups=album&market=US&limit=50`, authParameters);
    const dataAlbum = await result2.json();

    const albums = dataAlbum.items.map(album => ({
        id: album.id,
        name: album.name,
        url: album.images[0].url
    }));

    return albums;
}
