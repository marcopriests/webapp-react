import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router'

const initialData = {
    title: '',
    director: '',
    image: null,
    abstract: ''
}

const AddMovie = () => {
    const [formData, setFormData] = useState(initialData)

    const navigate = useNavigate()

    const setFieldValue = (e) => {
        const { value, name } = e.target

        if (name === 'image') {
            setFormData({ ...formData, image: e.target.files[0] })
        } else {
            setFormData({ ...formData, [name]: e.target.value })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(`http://127.0.0.1:3000/movies/`, formData, { headers: { 'Content-Type': 'multipart/form-data' } }).then(res => {
            navigate('/')
        })
    }

    return (
        <div>
            <div className="container p-5">
                <div className="row">
                    <div className="col-12 mb-3">
                        <h2 className='fw-semibold'>Add new movie</h2>
                    </div>
                    <div className="col-12">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label htmlFor="">Title</label>
                                    <input type="text" className='form-control' placeholder='Title' name='title' required value={formData.title} onChange={setFieldValue} />
                                </div>
                                <div className="col-12 mb-3">
                                    <label htmlFor="">Director</label>
                                    <input type="text" className='form-control' placeholder='Director' name='director' required value={formData.director} onChange={setFieldValue} />
                                </div>
                                <div className="col-12 mb-3">
                                    <label htmlFor="">Cover image</label>
                                    <input type="file" className='form-control' placeholder='Upload image' name='image' required onChange={setFieldValue} />
                                </div>
                                <div className="col-12 mb-3">
                                    <label htmlFor="">Abstract</label>
                                    <textarea name="abstract" id="abstract" className='form-control' placeholder='Add abstract' value={formData.abstract} onChange={setFieldValue}></textarea>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-danger px-5 fw-semibold">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddMovie
