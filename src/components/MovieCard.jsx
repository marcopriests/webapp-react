import React from 'react'

const MovieCard = ({ movie }) => {
    const { title, averageVote } = movie

    const stars = []

    const vote = Math.round(averageVote / 2)
    console.log(vote)
    for (let i = 0; i < 5; i++) {

        if (vote > i) {
            stars.push(<i className="fa-solid fa-star"></i>)
        } else {
            stars.push(<i className="fa-regular fa-star"></i>)
        }

    }

    return (
        <div className="col-4 col-md-3 col-lg-2">
            <div className="card rounded-0 border-0">
                <img src="https://picsum.photos/200/300" alt="" className="card-img-top rounded-0 shadow-sm" />
                <div className='mt-2'>
                    <div className="fs-6"><b>{title}</b></div>
                    <div className="">{stars}</div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
