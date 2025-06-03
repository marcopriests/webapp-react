import React from 'react'
import { Link } from 'react-router'
import StarVote from './StarVote'

const MovieCard = ({ movie }) => {
    const { title, image, averageVote, id } = movie
    console.log(`pirupiru ${averageVote}`)

    return (
        <div className="col-4 col-md-3 col-lg-2">
            <Link className='text-decoration-none' to={`/${id}`}>
                <div className="card rounded-0 border-0 mb-4">
                    <img src={image} alt="" className="card-img-top rounded-0 shadow-sm" />
                    <div className='mt-2'>
                        <div className="fs-6"><b>{title}</b></div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard
