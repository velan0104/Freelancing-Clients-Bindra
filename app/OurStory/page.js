import Image from 'next/image'
import React from 'react'

const page = () => {

    const stories = [
        { img: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D", title: " A legacy of excellence", content: "At Lodha, our legacy of excellence is forged by the pioneering spirit of our esteemed team, the partnerships we cultivate with world-class collaborators, and the dynamic processes that consistently propel us beyond conventional boundaries." },
        { img: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D", title: "Crafting timeless elegance", content: "We hold an unwavering belief that quality is not just a destination, but an ongoing voyage. Each residence we create is meticulously crafted with the same attention to detail as if it were our very own. At Lodha, we nurture a culture of quality, employing innovative technologies and hand-selecting only the most exquisite materials." },
        { img: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D", title: "Sophistication on Grand Scale", content: "Lodha crafts both residential and commercial real estate developments, catering to a discerning spectrum of lifestyle preferences, across several geographies." },
        { img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D", title: "Building a sustainable legacy", content: "Our commitment extends beyond the realm of luxury living. We are dedicated to leaving a lasting, positive impact on the environment and society at large. Through innovative design and sustainable practices, we are minimising our carbon footprint and creating residences that stand resilient in the face of future challenges posed by climate change." },
    ];
    return (
        <div>
            <section className='w-[100vw] h-[100vh] '>
                <Image
                    className='h-[100vh] w-[100vw]'
                    width={400}
                    height={400}
                    src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="OurStoryHero"
                />
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 py-20 content-center items-center mx-auto gap-y-8 bg-rose-100'>
                <div>
                    <Image
                        className='w-[80%] md:w-[70%] h-auto mx-auto rounded-lg'
                        src="https://images.unsplash.com/photo-1569152811536-fb47aced8409?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D"
                        width={300}
                        height={300}
                        alt="hero10"
                    />
                </div>
                <div className='w-[80%] mx-auto'>
                    <h3 className='text-rose-700 font-semibold'>About Bindra</h3>
                    <h1 className='font-bold text-xl'> Shaping India Real Estate </h1>
                    <p className='text-gray-800'>
                        As creators of the world’s finest developments, Lodha leverages four decades of experience to transform the way people live and work. We combine this with the expertise to deliver both quality and scale at a pace that is unmatched in the industry.
                    </p>
                </div>
            </section>
            <section className='w-full py-10 lg:w-[90%] mx-auto '>
                <div className='text-center'>
                    <h1 className='font-semibold text-rose-500'> OUR STORY </h1>
                    <div> Raising Expectation for real estate </div>
                    <div>
                        {
                            stories.map((story, index) => (
                                <div key={index} className='grid grid-cols-1 md:grid-cols-2 mx-auto py-10 gap-y-10 content-center items-center'>
                                    <div className={`${index % 2 == 0 ? "md:order-1" : "md:order-2"} w-full`}>
                                        <Image
                                            src={story.img}
                                            height={400}
                                            width={400}
                                            alt={`story${index}`}
                                            className='rounded-md h-auto w-[80%] mx-auto'
                                        />
                                    </div>
                                    <div className={`${index % 2 == 0 ? "md:order-2" : "md:order-1"} px-5 w-[80%] mx-auto`}>
                                        <h1 className='font-bold text-xl text-[#dbc33b] text-left py-3'>{story.title} </h1>
                                        <p className='font-medium text-left'> {story.content} </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className='w-full py-10 bg-gray-100 mx-auto space-y-10 relative'>
                <div className='text-center'>
                    <h1 className='font-bold'>
                        KEY FACTS
                    </h1>
                    <div> Delivering excellence with continued growth </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto md:w-[60%] h-full gap-y-5'>
                    <div className='flex mx-auto gap-4 font-bold text-xl justify-center lg:border-r-4 border-black w-full lg:py-16'>
                        <p> 65,000+ </p>
                        <div>
                            <p> Home </p>
                            <p> Delivered </p>
                        </div>
                    </div>
                    <div className='w-full lg:w-[60%] mx-auto lg:py-10 text-gray-900 space-y-5 lg:space-y-1 flex flex-col items-center '>
                        <div className='flex gap-x-6'>
                            <p className='text-2xl font-bold'>44</p>
                            <div className='w-[150px] font-semibold'> Year legacy of shaping real estate </div>
                        </div>
                        <div className='flex gap-x-6 items-center'>
                            <p className='text-2xl font-bold'>40</p>
                            <div className='w-[150px] font-semibold'>operating projects*</div>
                        </div>
                        <div className='flex gap-x-6 '>
                            <p className='text-2xl font-bold'> 100 </p>
                            <div className='w-[150px] font-semibold'> mn. Sq. ft. area delivered </div>
                        </div>
                    </div>
                </div>
                <div className='w-full text-center '>
                    <h1 className='font-bold'> PRESENCE IN </h1>
                    <div className='w-[50%] mx-auto py-2'>
                        Mumbai, Thane, Pune, Bengaluru and London
                    </div>
                </div>
                {/* Date if needed */}
            </section>
            <section>
                <div className='w-full h-auto py-8'>
                    <div className='text-center my-5'>
                        <h1 className='font-bold'> WHO WE ARE </h1>
                        <p> Guided by visionary leadership </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 py-5 gap-y-8'>
                        <div className='border-2 border-[#f4e385] w-[80%] rounded-md mx-auto text-center px-10 py-6 space-y-2'>
                            <h1 className='font-bold'>Board of Directors </h1>
                            <p> Experienced industry leaders ensure we are growing our positive impact as we grow our business. </p>
                            <button className='rounded-md bg-[#f4e385] text-white  px-5 py-2 text-md'> View </button>
                        </div>
                        <div className='border-2 border-[#f4e385] w-[80%] rounded-md mx-auto text-center px-10 py-6 space-y-2'>
                            <h1 className='font-bold'>Leadership Team </h1>
                            <p> Experienced industry leaders ensure we are growing our positive impact as we grow our business. </p>
                            <button className='rounded-md bg-[#f4e385] text-white  px-5 py-2 text-md'> View </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page
