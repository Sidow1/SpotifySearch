export const getSpotifyToken = async() => {

    const authParameters = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `grant_type=client_credentials&client_id=${import.meta.env.VITE_CLIENT_ID}&client_secret=${import.meta.env.VITE_CLIENT_SECRET}`
    }

    const result = await fetch('https://accounts.spotify.com/api/token', authParameters);
    const {access_token} = await result.json();
    return access_token;
}