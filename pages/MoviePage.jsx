import React from 'react'
import MovieCard from '../src/components/MovieCard'

const movies = [
    {
        id: 1,
        title: 'Chi ha incastrato Roger Rabbit',
        director: 'Robert Zemeckis',
        releaseDate: 1988,
        averageVote: 9.9,
        genre: ['animation, comedy']
    },
    {
        id: 2,
        title: 'Big Fish',
        director: 'Tim Burton',
        releaseDate: 2004,
        averageVote: 7.8,
        genre: ['romance, adventure, action, comedy, drama']
    },
    {
        id: 3,
        title: 'Il postino',
        director: 'Massimo Troisi',
        releaseDate: 1994,
        averageVote: 6.5,
        genre: ['comedy, drama, romance']
    },
    {
        id: 4,
        title: 'Le avventure acquatiche di Steve Zissou',
        director: 'Wes Anderson',
        releaseDate: 2005,
        averageVote: 2.1,
        genre: ['comedy, drama, adventure']
    },
    {
        id: 5,
        title: 'Chi ha incastrato Roger Rabbit',
        director: 'Robert Zemeckis',
        releaseDate: 1988,
        averageVote: 9.9,
        genre: ['animation, comedy']
    },
    {
        id: 6,
        title: 'Big Fish',
        director: 'Tim Burton',
        releaseDate: 2004,
        averageVote: 7.8,
        genre: ['romance, adventure, action, comedy, drama']
    },
    {
        id: 7,
        title: 'Il postino',
        director: 'Massimo Troisi',
        releaseDate: 1994,
        averageVote: 6.5,
        genre: ['comedy, drama, romance']
    },
    {
        id: 8,
        title: 'Le avventure acquatiche di Steve Zissou',
        director: 'Wes Anderson',
        releaseDate: 2005,
        averageVote: 2.1,
        genre: ['comedy, drama, adventure']
    }
]

const Homepage = () => {
    return (
        <>
            <div className="p-5">
                <div className='container'>
                    <h1 className='mb-4'><b>Latest movies</b></h1>
                    <div className="row">
                        {movies.map(movie => {
                            return <MovieCard movie={movie} key={movie.id} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage
