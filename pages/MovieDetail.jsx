import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import StarVote from '../src/components/StarVote'

const MovieDetail = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:3000/movies/${id}`).then(res => {
            console.log(res.data)
            setMovie(res.data)
        })
    }, [])

    const image = movie == [] ? 'https://picsum.photos/300/200' : `http://127.0.0.1:3000/img/movies/${movie.image}`
    return (
        <div className="p-5">
            <div className='container'>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <img className='img-fluid' src={image} alt="" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-8 mb-4">
                        <h2 className='text-uppercase'><b>{movie.title}</b></h2>
                        <div><b>{movie.director}</b></div>

                        <div className='mt-4 mb-5'><StarVote avgVote={movie.average_vote} /></div>

                        <div className=''>{movie.abstract}</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MovieDetail
