import React from "react"
import '../App.css'


function Header(props) {
    const handleLoginKeyUp = (e) => {
        if (e.key === 'Enter') {
            props.onSearchHandler();
        }
    }

    return (
        <div className="searchContainer">
            <input className="searchInput" placeholder="Enter the City name" onKeyPress={handleLoginKeyUp} onChange={props.onCityHandler} type="text" required />
            <button className="searchButton" onClick={props.onSearchHandler}>Search</button>
            <p></p>
        </div>
    )

}
export default Header;