import React from 'react'

const StarVote = ({ vote }) => {
    const stars = []

    const starVote = parseInt(vote)

    for (let i = 0; i < 5; i++) {

        if (starVote > i) {
            stars.push(<i className="fa-solid fa-star text-warning" key={i}></i>)
        } else {
            stars.push(<i className="fa-regular fa-star" key={i}></i>)
        }
    }

    return (
        <div className="">{stars}</div>
    )
}

export default StarVote
