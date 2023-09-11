import * as Styles from './searchResult.styled.ts';
import {IMovie} from "../../../../utils/api.ts";
import {ChangeEvent} from "react";


interface ISearchResultProps{
    isActive: boolean,
    movies: IMovie[],
    handleSelect: (a: number)=> void
}
function SearchResult({isActive, movies, handleSelect} : ISearchResultProps){
    return (
        <Styles.Select onChange={(e: ChangeEvent<HTMLSelectElement>)=> handleSelect(Number(e.target.value))} className={isActive ? 'activeSelect' : undefined}>
            <option value=""> Resultado da Pesquisa</option>
            {movies.map(item=> {
                return <option key={item.id} value={item.id}>{item.title}</option>
            })}
        </Styles.Select>
    )
}


export default SearchResult;