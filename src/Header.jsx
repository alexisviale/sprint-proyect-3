import logo from "./images/logo-desktop.svg"
import logoNoche from "./images/logo-mobile-modo-noct.svg"
import caratula from "./images/ilustra_header.svg"
import iconSearch from "./images/icon-search-mod-noc.svg"

const Header = ({clic, setClic, search, setSearch, modoDark, setModoDark, autoComData}) => {

    const manejadorModoDark = () => {
        setModoDark(!modoDark);
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleClic = (e) => {
        e.preventDefault();
        setClic(true)
    }

    const handleSugClick = (e) => {
        e.preventDefault();
        let buttonName = e.target.name;
        setSearch(buttonName)
        setClic(true)
        
    }

    const handleEnter = (e) => {
        if (e.keyCode === 13) {
            return handleClic(e)
        }
    }

    return (
        <div className={`header ${modoDark && `dark`}`}>
            <div className="logo-bar">          
                <img className="logo-header" src={!modoDark ? logo : logoNoche} alt="Logo GIFOS" />
                <button onClick={manejadorModoDark} className={`boton-header ${modoDark && `dark-boton-mode`}`}>{ !modoDark ? "MODO DARK" : "MODO LIGHT"}</button>
            </div>
            <div >
                <h3 className={`slogan ${modoDark && `dark`}`}>¡Inspirate y busca los mejores <span>GIFS!</span></h3>
                <img src={caratula} alt="" />
                <div className={`search-bar ${modoDark && `dark-bordes`}`}>
                    <input onKeyUp={handleEnter} value={search} onChange={handleChange} className={`search ${modoDark && `dark`}`}  type="text" placeholder='Busca GIFs' />
                    <button id="btn" onClick={handleClic} className={`search-button ${modoDark && `dark-bordes-left`}`} type="button"><img src={iconSearch} /></button>
                </div>
                
            </div>
            {autoComData.map((suggestion) => (<div><button className={`suggestion-button ${modoDark && `dark-suggestion`}`} name={suggestion.name} onClick={handleSugClick}>{suggestion.name}</button></div>))}
        </div>
    )
}

export default Header;