import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import StarVote from '../src/components/StarVote'
import ReviewForm from '../src/components/ReviewForm'

const MovieDetail = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    const fetchMovies = () => {
        axios.get(`http://127.0.0.1:3000/movies/${id}`).then(res => {
            setMovie(res.data)
        })
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <>
            {movie === null
                ? <div>Loading...</div>
                : (
                    <div className="p-5">

                        <div className='container'>

                            <div className="row">

                                <div className="col-12 col-md-6 col-lg-4 mb-4">
                                    <img className='img-fluid' src={movie.image} alt="" />
                                </div>

                                <div className="col-12 col-md-6 col-lg-8 mb-4">
                                    <h2 className='text-uppercase'><b>{movie.title}</b></h2>
                                    <div><b>{movie.director}</b></div>

                                    <div className='mt-4 mb-5 d-flex'>
                                        <StarVote vote={movie.average_vote} />
                                        <span className='ms-1'>({movie.reviews.length})</span>
                                    </div>

                                    <span className="badge text-bg-danger mb-5">{movie.genre}</span>

                                    <div className=''>{movie.abstract}</div>

                                </div>

                                {/* Reviews form */}
                                <ReviewForm movie_id={movie.id} reloadReviews={fetchMovies} />

                                {/* Reviews list */}
                                <div className="col-12">
                                    <ul className="list-group p-3">
                                        {movie.reviews?.map(review => {
                                            return (
                                                <li className='list-item border p-3 mb-3 rounded list-unstyled' key={`review_${review.id}`}>

                                                    <div>
                                                        <b>{review.name}</b>
                                                    </div>
                                                    <StarVote vote={review.vote} />
                                                    <div className='mt-3'>{review.text}</div>

                                                </li>)
                                        })}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                )}
        </>
    )
}

export default MovieDetail
