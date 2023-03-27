import { useState } from "react";
import { AlbumGrid, SearchArtist } from "./components";
import { getAlbumFromArtist } from "./helpers/getAlbumFromArtist";

export const SpotifySearchApp = () => {

  const [albums, setAlbums] = useState([])

  const onAddAlbums = async(artist) => {
    const albums = await getAlbumFromArtist(artist);
    setAlbums(albums);
  }

  return (
    <>
      <SearchArtist onAddAlbums={onAddAlbums}/>

      <div className="mx-2 row row-cols-1 row-cols-md-4 g-4 mt-3">
      {
        albums.map(album => (
          <AlbumGrid key={album.id} {...album} />
        ))
      }
      </div>
    </>
  )
}
