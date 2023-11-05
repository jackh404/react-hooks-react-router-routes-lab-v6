function Person({person}) {
    const {name, movies} = person
    return (
        <article>
            <h2>{name}</h2>
            <ul>
                {movies.map(movie=><li>{movie}</li>)}
            </ul>
        </article>
    )
}

export default Person