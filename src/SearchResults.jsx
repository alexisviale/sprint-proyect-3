const SearchResults = ({modoDark, setModoDark, data, trendData, clic, search, isTrend}) => {
    
    return (
        <div className={`${modoDark && `dark`}`}>
            <h4 className={`titulo-resultados ${modoDark && `dark`}`}>Resultados de la búsqueda</h4>
            <div className={`cuadro-resultados ${modoDark && `dark-resultados`}`}>

                {(clic && search.length > 0 ? <h1>Loading...</h1> : data.length > 0 ? data.map(items => <img className="gif" onClick={() => window.open(items.images.original.url)} src={items.images.downsized_medium.url} key={items.id}></img>) : (!isTrend) ? null : <h1>No hay resultados</h1>)}

            </div>
        </div>
    ) 

}

export default SearchResults;