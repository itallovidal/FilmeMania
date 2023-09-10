const AUTHORIZATION = '19c7f0980d03f9d9dc3a583e89766f55'
const API_BASE_PATH = 'https://api.themoviedb.org/3/'
// const OPTIONS = {
//     headers: {
//         accept: 'application/json',
//         Authorization: AUTHORIZATION
//     }
// } as const

export async function searchMovie(movie: string){
    const response = await fetch(`${API_BASE_PATH}search/movie?api_key=${AUTHORIZATION}&query=${movie}`)
    const data = await response.json()
    console.log(data)

    return movie
}

