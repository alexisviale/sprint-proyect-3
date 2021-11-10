const SearchResults = ({modoDark, setModoDark, data, trendData, clic, search, isTrend}) => {
    
    return (
        <div className={`${modoDark && `dark`}`}>
            <h4 className={`titulo-resultados ${modoDark && `dark`}`}>Resultados de la búsqueda</h4>
            <div className={`cuadro-resultados ${modoDark && `dark-resultados`}`}>

                {(clic && search.length > 0 ? <img className="gif-loading" src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif" alt="Loading..." width="50px" height="50px"></img> : data.length > 0 ? data.map(items => <img className="gif" onClick={() => window.open(items.images.original.url)} src={items.images.downsized_medium.url} key={items.id} alt={items.id}></img>) : (!isTrend) ? null : <h1>No hay resultados</h1>)}

            </div>
        </div>
    ) 

}

export default SearchResults;