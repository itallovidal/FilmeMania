import * as Styles from './searchResult.styled.ts';

function SearchResult({str} : {str: string[]}){
    return (
        <Styles.Select>
            <option value=""> Resultado da Pesquisa</option>
            {str.map(item=> {
                return <option value="volvo">{item}</option>
            })}
        </Styles.Select>
    )
}


export default SearchResult;