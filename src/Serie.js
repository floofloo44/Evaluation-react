import React from 'react'
import FavBtn from './Favoris';
import './css/index.css'

export default function Serie(props){
    const {show} =props;
    const genres =show.genres.map(genre =><span key={genre} className="badge">{genre}</span>);
    return (
    <div className="mx-4">
        <div className="card mt-4">
                <img src={show.images.banner} className="card-img-botom" alt="banner"/>
                <div className="card-body">
                    <h1 className="card-title">{show.title} ({show.creation})</h1>
                    <p className="info">{show.seasons} seasons |{show.episodes} episodes</p>
                    <p className="card-text">{show.description}</p>
                    <div className="d-flex justify-content-between">
                    <div>{genres}</div>
                    <FavBtn show={show} favorite={show.user.favorited}/>
                    </div>
                </div>
        </div>
    </div>)
}