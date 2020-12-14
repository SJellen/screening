import React, {useContext} from 'react'
import {Context} from '../../Context'



function MovieDetails() {

    const {movieDetails, posterPathSmall, dollarsWithCommas}  = useContext(Context)
    const {budget, id, genres, production_companies, production_countries, revenue} = movieDetails
   
    

    const genrelist = genres && genres.map(genre => 
        <div key={genre.id}>
            <li className="movie-details-list-item">{genre.name}</li> 
        </div>)

    const productionCountriesList = production_countries && production_countries.map((country, index) => 
        <div key={index}>
            <li className="movie-details-list-item">{country.name}</li> 
        </div>)   

    const productionCompaniesList = production_companies && production_companies.map(company => 
    <div key={company.id}>

        <li className="movie-details-list-item"><span>{company.logo_path !== null ? <img className="movie-details-list-logo" src={`${posterPathSmall}${company.logo_path}`} alt="company logo"/> : ''}</span>{company.name}</li> 
    </div>)       
        
        
    

   const movieDetailsTile = (
   
    <div key={id} className="details-movie-details-tile">
    
        <div className="movie-details-list-container">
          <span className="movie-details-list-title">Genres</span>
        <ul className="movie-details-list">
            {genrelist}
        </ul>  
        </div>
        <div className="movie-details-list-container">
          <span className="movie-details-list-title">Production Companies</span>
        <ul className="movie-details-list">
            {productionCompaniesList}
        </ul>  
        </div>
        <div className="movie-details-list-container">
          <span className="movie-details-list-title">Production Countries</span>
        <ul className="movie-details-list">
          {productionCountriesList}
        </ul>  
        </div>
        <div className="movie-details-list-container">
          <span className="movie-details-list-title">Finances</span>
        <ul className="movie-details-list">
            <li className="movie-details-list-item">Budget: ${budget && dollarsWithCommas(budget)}</li>
            <li className="movie-details-list-item">Revenue: ${revenue && dollarsWithCommas(revenue)}</li>
            <li className="movie-details-list-item">Profit/Loss: ${revenue && budget && dollarsWithCommas(revenue - budget)}</li>
        </ul>  
        </div>
        
    </div>
   )


    return {movieDetailsTile}

}

export default MovieDetails