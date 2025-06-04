import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const ReviewForm = ({ movie_id, reloadReviews }) => {
    const initialData = {
        name: '',
        vote: '',
        text: ''
    }

    const [formData, setFormData] = useState(initialData)

    const setFieldValue = (e) => {
        const { value, name } = e.target

        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(`http://127.0.0.1:3000/movies/${movie_id}/reviews`, formData, { headers: { 'Content-Type': 'application/json' } }).then(() => {
            setFormData(initialData)
            reloadReviews()
        })
    }

    return (
        <div className="container p-5 border rounded mb-5">
            <div className="row">
                <div className="col-12 mb-3">
                    <h2 className='fw-semibold'>Add new review</h2>
                </div>
                <div className="col-12">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="" className='control.label'>Name</label>
                            <input type="text" className='form-control' name='name' placeholder='Insert your name' required value={formData.name} onChange={setFieldValue} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="" className='control.label'>Vote</label>
                            <input type="number" className='form-control' name='vote' placeholder='Insert vote form 0 to 5' min={0} max={5} required value={formData.vote} onChange={setFieldValue} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="" className='control.label'>Text</label>
                            <textarea name="text" className='form-control' placeholder='Write your review' id="text" value={formData.text} onChange={setFieldValue}></textarea>
                        </div>
                        <button className="btn btn-danger fw-semibold">Publish review</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ReviewForm
