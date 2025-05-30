import React from 'react'

const Homepage = () => {
    return (
        <>
            <div className="p-5">
                <h1><b>Latest movies</b></h1>
                <div className='container mt-4'>
                    <div className="row">
                        <div className="col-4 col-md-3 col-lg-2">
                            <div className="card rounded-0 border-0">
                                <img src="https://picsum.photos/200/300" alt="" className="card-img-top rounded-0 shadow-sm" />
                                <div className='mt-2'>
                                    <div className="fs-6"><b>Titolo film</b></div>
                                    <div className="">Voto</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage
