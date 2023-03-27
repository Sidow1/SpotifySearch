import { useState } from "react"

export const SearchArtist = ({onAddAlbums}) => {

    const [artist, setArtist] = useState('');

    const onInputChange = ({target}) => {
        setArtist(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newArtist = artist.trim();
        if (newArtist.length < 1 ) return;

        onAddAlbums(newArtist);
        setArtist('');
    }

  return (
    <form onSubmit={onSubmit}>
        <input
            className="form-control my-3" 
            type="text"
            placeholder="Buscar artista"
            value={artist}
            onChange={onInputChange}
        />
    </form>
  )
}
