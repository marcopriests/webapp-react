import React from 'react'

const StarVote = ({ avgVote }) => {
    const stars = []

    const vote = parseInt(avgVote)

    for (let i = 0; i < 5; i++) {

        if (vote > i) {
            stars.push(<i className="fa-solid fa-star text-warning" key={i}></i>)
        } else {
            stars.push(<i className="fa-regular fa-star" key={i}></i>)
        }
    }

    console.log(vote)
    return (
        <div className="">{stars}</div>
    )
}

export default StarVote
