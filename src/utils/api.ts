const AUTHORIZATION = '19c7f0980d03f9d9dc3a583e89766f55'
const API_BASE_PATH = 'https://api.themoviedb.org/3/'
export const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'


export interface IMovie{
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: Date,
    title: string,
    video: boolean,
    vote_average: boolean,
    vote_count: number
}

export async function searchMovie(movie: string) : Promise<IMovie[]>{
    const response = await fetch(`${API_BASE_PATH}search/movie?api_key=${AUTHORIZATION}&query=${movie}`)
    const data = await response.json()
    // console.log(data)

    return data.results
}

interface IGetMovie{
    genres: string[],
    poster: string,
    title: string
}
export async function getMovie(id: number): Promise<IGetMovie>{
    const response = await fetch(`${API_BASE_PATH}movie/${id}?api_key=${AUTHORIZATION}`)
    const data = await response.json()
    return {
        genres: [data.genres[0].name, data.genres[1].name],
        poster: data.poster_path,
        title: data.title
    }

}

