import React from 'react'

const Service = () => {
    return (
        <div className='service-main'>

            <div className='service-wrapper'>

                <h2 className='main-heading'>Our Services</h2>

                <div className='service-card-wrapper'>

                    <div className='service-card'>

                        <div className='service-img'>
                            <img src="/service/training.jpg" alt="training-img" className='service-img' />
                            <div className='service-img-backdrop'></div>
                        </div>

                        <div className='service-details'>
                            <h2>Training</h2>
                            <p>In India shares everything about dogs including dog health, dog news, dog breeds, dog training, inspiring dog stories.In India shares everything about dogs including dog health, dog news, dog breeds, dog training, inspiring dog stories.</p>
                        </div>
                    </div>

                    <div className='service-card'>

                        <div className='service-img'>
                            <img src="/service/grooming.jpg" alt="training-img" className='service-img' />
                            <div className='service-img-backdrop'></div>
                        </div>

                        <div className='service-details'>
                            <h2>Grooming</h2>
                            <p>In India shares everything about dogs including dog health, dog news, dog breeds, dog training, inspiring dog stories.In India shares everything about dogs including dog health, dog news, dog breeds, dog training, inspiring dog stories.</p>
                        </div>
                    </div>

                    <div className='service-card'>

                        <div className='service-img'>
                            <img src="/service/walking.jpeg" alt="training-img" className='service-img' />
                            <div className='service-img-backdrop'></div>
                        </div>

                        <div className='service-details'>
                            <h2>Walking</h2>
                            <p>In India shares everything about dogs including dog health, dog news, dog breeds, dog training, inspiring dog stories.In India shares everything about dogs including dog health, dog news, dog breeds, dog training, inspiring dog stories.</p>
                        </div>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default Service