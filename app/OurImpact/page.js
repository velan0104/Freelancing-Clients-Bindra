import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div>
            <section>
                <Image
                    src="https://images.unsplash.com/photo-1592595896616-c37162298647?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width="400"
                    height="400"
                    alt="OurImpact"
                    className="w-[100vw] h-[100vh] aspect-auto"
                />
            </section>

            <section className='py-10 lg:w-[80%] mx-auto'>
                <div className='text-center space-y-4 w-[70%] mx-auto'>
                    <h1 className='text-xl font-bold'> Creating a positive impact </h1>
                    <p>
                        Lodha is committed to using our capabilities to create a positive impact on the environment and on society. As we grow, so does the scale of the impact we can make.
                    </p>
                    <p>
                        Through Lodha Foundation, we implement transformative projects in Education, Women's Empowerment, and Sustainable Urbanization to create a positive impact on the environment and society. We are recognized in global sustainability indices and rankings for the work we do to address the environmental impact of the built environment.
                    </p>
                    <button className='border-black border-2 px-5 py-3 rounded-md'> Our Integrated Report </button>
                </div>
                <div className='text-center py-8 space-y-4'>
                    <h1 className='text-xl font-bold'> Environmental Impact </h1>
                    <p className='w-[70%] mx-auto'> Our approach to sustainable construction focuses on reducing carbon emissions (decarbonisation) and on creating assets that will be resilient to future climate change (resilience).</p>

                    <div className='flex gap-5 mx-auto flex-wrap justify-center px-2 md:px-6 lg:px-10'>
                        {
                            Array.from({ length: 3 }).map((_, index) => (
                                <div key={index} className='space-y-3 w-[350px]'>
                                    <Image
                                        src="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D"
                                        width="300"
                                        height="300"
                                        alt={`environmental${index}`}
                                        className="h-auto w-[90%] mx-auto rounded-md"
                                    />
                                    <div className='w-[90%] mx-auto'>
                                        Our approach to sustainable construction focuses on reducing carbon emissions (decarbonisation) and on creating assets that will be resilient to future climate change (resilience).
                                    </div>
                                    <button className='mx-auto border-2 border-black py-3 px-5 rounded-md'>Know More</button>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
        </div>
    )
}

export default page
