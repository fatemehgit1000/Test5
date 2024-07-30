//import React, { Component } from "react"

import React, { useState } from 'react';



import mystyle from "../styles/style.css"
import f1 from '../images/f1.jpg';
import f2 from '../images/f2.jpg';
import f3 from '../images/f3.png';





const SideMenu = ({ movies }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Get unique genres from the movie data
    const genres = [...new Set(movies.flatMap(movie => movie.genres))];

    // Filter movies based on search term and selected genre
    const [selectedGenre, setSelectedGenre] = useState('');
    const filteredMovies = movies.filter(movie => {
        const matchesSearchTerm = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSelectedGenre = selectedGenre ? movie.genres.includes(selectedGenre) : true;
        return matchesSearchTerm && matchesSelectedGenre;
    });

    return (
        <div className="side-menu">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="genre-list">
                <h3>Genres</h3>
                <ul>
                    <li
                        className={selectedGenre === '' ? 'active' : ''}
                        onClick={() => setSelectedGenre('')}
                    >
                        All
                    </li>
                    {genres.map((genre) => (
                        <li
                            key={genre}
                            className={selectedGenre === genre ? 'active' : ''}
                            onClick={() => setSelectedGenre(genre)}
                        >
                            {genre}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};












// اطلاعات فیلم‌ها
const movies = [
    {
        id: 1,
        title: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        year: 1994,
        genre: 'Drama',
        poster: 'https://example.com/shawshank-redemption.jpg'
    },
    {
        id: 2,
        title: 'The Godfather',
        director: 'Francis Ford Coppola',
        year: 1972,
        genre: 'Crime, Drama',
        poster: 'https://example.com/the-godfather.jpg'
    },
    // اطلاعات سایر فیلم‌ها
];

const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    // تابع برای تغییر اسلاید
    const handleSlideChange = (direction) => {
        if (direction === 'prev') {
            setCurrentSlideIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
        } else {
            setCurrentSlideIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
        }
    };

    // اسلایدر عکس‌ها





    const slides = [
        'https://example.com/f1.jpg',
        'https://example.com/f2.jpg',
        'https://example.com/f3.jpg'
    ];








    return (
        <div>
            {/* هدر سایت با سه گزینه */}
            <header>
                <nav className='header'>
                    <ul>
                        <li onClick={() => setActiveSection('home')}>Home</li>
                        <li onClick={() => setActiveSection('movies')}>Movies</li>
                        <li onClick={() => setActiveSection('about')}>About Us</li>
                    </ul>
                </nav>
            </header>

            {/* بخش Home با اسلایدر */}
            {activeSection === 'home' && (
                <section>
                    <div className="slider">
                        <img src={slides[currentSlideIndex]} alt={`Slide ${currentSlideIndex + 1}`} />
                        <button onClick={() => handleSlideChange('prev')}>Previous</button>
                        <button onClick={() => handleSlideChange('next')}>Next</button>
                    </div>
                </section>
            )}

            {/* بخش Movies با اطلاعات فیلم‌ها */}
            {activeSection === 'movies' && (
                <section>
                    <h2>Movies</h2>
                    <div className="movies-grid">
                        {movies.map((movie) => (
                            <div key={movie.id} className="movie-card">
                                <img src={movie.poster} alt={movie.title} />
                                <h3>{movie.title}</h3>
                                <p>Director: {movie.director}</p>
                                <p>Year: {movie.year}</p>
                                <p>Genre: {movie.genre}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* بخش About Us با توضیحات */}
            {activeSection === 'about' && (
                <section>
                    <h2>About Us</h2>
                    <p>فاطمه لطفی ,کارشناسی از دانشگاه دولتی قم</p>
                </section>
            )}
        </div>
    );
};



//export default Comp1;


export default App;