
function SelectInput({name, id}: {name: string, id: string}) {
    return (
        <select name={name} id={id}>
            <option value="">Escolher</option>
            <option value="terror">Terror</option>
            <option value="acao">Ação</option>
            <option value="suspense">Suspense</option>
            <option value="drama">Drama</option>
            <option value="comedia">Comédia</option>
            <option value="romance">Romance</option>
            <option value="infantil">Infantil</option>
        </select>
    );
}

export default SelectInput;