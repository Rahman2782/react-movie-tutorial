import "../css/Home.css"
import MovieCard from "../components/MovieCard"
import { useState } from "react";

//making the 'Home' component with jsx and logic
export default function Home () {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "Madame Web", release_date: "2024"},
        {id: 2, title: "Tall Girl", release_date: "2018"},
        {id: 3, title: "Tall Girl 2", release_date: "2020"},
        {id: 4, title: "Hurry Up Tommorow", release_date: "2025"},
        {id: 5, title: "Toy Story 2", release_date: "2001"},
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }

    return (
        <div className="home"> 
            <form onSubmit={handleSearch} className="search-form"> 
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} 
                /> 
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map(
                    (movie) => 
                    movie.title.toLowerCase().startsWith(searchQuery) && (
                        <MovieCard movie={movie} key={movie.id}/>  
                    )
                )}
            </div>
        </div>
    )
}