import React from 'react'
import { Link } from 'react-router'
import StarVote from './StarVote'

const MovieCard = ({ movie }) => {
    const { title, director, image, id } = movie

    return (
        <div className="col-4 col-md-3 col-lg-2">
            <Link className='text-decoration-none' to={`/${id}`}>
                <div className="card rounded-0 border-0 mb-4">
                    <img src={image} alt="" className="card-img-top rounded-0 shadow" />
                    <div className='mt-2'>
                        <div><b>{title}</b></div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard
