import React, { useState } from 'react'
import Show from './Serie'

export default function SerieList(props) {
    const [searchTerm, setSearchTerm] = useState();
    function research(event) {
        let value = event.target.value;
        setSearchTerm(value);
        if (event === props.title) {
        }
    }
    return (
        <div>
            <div>
                <div className="container">
                <p className="navbar"></p>
                <form className="flex">
                <input onInput={event => setSearchTerm(event.target.value)} className="form-control bg-light " type="text" placeholder="Recherche" name="Search" onChange={research}/>
                </form>
            </div>
        </div>{
        props.shows.filter((show)=>{
            if (searchTerm === undefined){
                return show
            } else if (show.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return show
            } 
                return false
        }).map((show) => {
            return (
            <Show key={show.id} show={show}/>)})
        }
        </div>
    )
}