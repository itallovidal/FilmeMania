import * as Styles from './searchResult.styled.ts';
import {IMovie} from "../../../../utils/api.ts";
import {ChangeEvent} from "react";


interface ISearchResultProps{
    movies: IMovie[],
    handleSelect: (a: number)=> void
}
function SearchResult({movies, handleSelect} : ISearchResultProps){

    return (
        <Styles.Select
            onChange={(e: ChangeEvent<HTMLSelectElement>)=> handleSelect(Number(e.target.value))}
            className={movies.length > 0 ? 'activeSelect' : undefined}>

            <option value=""> Resultado da Pesquisa</option>

            {movies.map(item=> <option key={item.id} value={item.id}>{item.title}</option>)}
        </Styles.Select>
    )
}


export default SearchResult;