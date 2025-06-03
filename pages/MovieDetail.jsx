import React from 'react'
import { useParams } from 'react-router'

const MovieDetail = () => {
    const { id } = useParams()
    return (
        <div>
            dettaglio film {id}
        </div>
    )
}

export default MovieDetail
