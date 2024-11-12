import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <section className='h-[100vh] w-[100vw] bg-white overflow-x-hidden'>
        <video
          className='w-[100%] h-[100%] object-cover'
          src='https://media.istockphoto.com/id/1480282371/video/4k-aerial-view-day-to-night-hyper-lapse-footage-of-above-captain-cook-bridge-with-brisbane.mp4?s=mp4-640x640-is&k=20&c=4NkOgyaCVl371bE2ebMWdns6u3XQNG4GVtDskZM5bNw='
          autoPlay
          loop
        />
      </section>
      <section className='w-[100vw] h-auto mx-auto bg-white'>
        <div className='grid grid-cols-1 md:grid-cols-2 content-center items-center w-[100%] my-20 gap-y-5'>
          <Image
            className='w-[90%] h-auto mx-auto rounded-lg'
            width={400}
            height={300}
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
            alt='Hero2'
          />
          <div className='w-[80%] mx-auto space-y-4'>
            <h3 className='font-semibold text-rose-400 text-3xl'> Our Promise</h3>
            <h1 className='font-bold text-5xl overflow-hidden'>
              Creating the world's finest developments
            </h1>
            <p className='text-xl text-gray-800 font-medium '>
              Lodha is India’s leading real estate developer, delivering thoughtfully designed, premium properties that shape urban lifestyle.
            </p>
            <button className='rounded-lg border-2 border-rose-400 py-3 px-5 text-rose-400 hover:bg-rose-400 hover:text-white delay-300'> Know More</button>
          </div>
        </div>
      </section>
      <section className='w-[100vw] h-auto lg:h-[100vh] grid grid-cols-1 lg:grid-cols-2 bg-rose-200 content-center items-center gap-y-5'>
        <div className=''>
          <div className='w-[80%] mx-auto space-y-4 py-10'>
            <h3 className='font-semibold text-rose-400 text-3xl'> Our Promise</h3>
            <h1 className='font-bold text-5xl overflow-hidden'>
              Creating the world's finest developments
            </h1>
            <p className='text-xl text-gray-800 font-medium '>
              Lodha is India’s leading real estate developer, delivering thoughtfully designed, premium properties that shape urban lifestyle.
            </p>
            <button className='rounded-lg border-2 border-rose-400 py-3 px-5 text-rose-400 hover:bg-rose-400 hover:text-white delay-300'> Know More</button>
          </div>
        </div>
        <div className=' grid grid-cols-1 lg:grid-cols-2 w-full gap-y-5'>
          <div
            className='relative overflow-hidden h-fit w-[90%] rounded-lg'
          >
            <Image
              className='lg:w-[90%] h-[500px] mx-auto rounded-lg hover:scale-110 delay-500'
              width={400}
              height={300}
              src="https://images.unsplash.com/photo-1723796994732-b375f31ef231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D"
              alt='Hero3'
            />
            <span className='absolute bottom-20 left-1/2 text-white z-50 hover:underline'> Our Story </span>
          </div>
          <div
            className='relative overflow-hidden h-fit w-[90%] rounded-lg'
          >
            <Image
              className='lg:w-[90%] h-fit mx-auto rounded-lg hover:scale-110 delay-500'
              width={400}
              height={300}
              src="https://images.unsplash.com/photo-1544207240-8b1025eb7aeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D"
              alt='Hero4'
            />
            <span className='absolute bottom-20 left-1/2 text-white z-50'> Our Impact </span>
          </div>
        </div>
      </section>
      <section className='w-full lg:w-[90%] h-[100vh] mx-auto flex items-center flex-col gap-10 py-6  overflow-hidden'>
        <div className='mx-auto text-center'>
          <h1 className='text-rose-800 font-semibold text-xl'> Our Pride </h1>
          <h1 className='font-bold text-3xl text-gray-800'> Iconic Projects </h1>
        </div>
        <div className='w-full lg:w-[90%] mx-auto flex gap-4'>
          <div className='text-center'>
            <div className='w-[300px] h-[400px] overflow-hidden rounded-lg'>
              <Image
                width={300}
                height={400}
                src="https://images.unsplash.com/photo-1631901999319-efd71a712378?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="hero5"
                className='hover:scale-110 delay-150 rounded-lg'
              />
            </div>
            <h1 className='py-4'> Atlanta </h1>
          </div>
          <div className='text-center'>
            <div className='w-[300px] h-[400px] overflow-hidden rounded-lg'>
              <Image
                width={300}
                height={400}
                src="https://images.unsplash.com/photo-1631901999319-efd71a712378?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="hero5"
                className='hover:scale-110 delay-150 rounded-lg'
              />
            </div>
            <h1 className='py-4'> Atlanta </h1>
          </div>
          <div className='text-center'>
            <div className='w-[300px] h-[400px] overflow-hidden rounded-lg'>
              <Image
                width={300}
                height={400}
                src="https://images.unsplash.com/photo-1631901999319-efd71a712378?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="hero5"
                className='hover:scale-110 delay-150 rounded-lg'
              />
            </div>
            <h1 className='py-4'> Atlanta </h1>
          </div>
          <div className='text-center'>
            <div className='w-[300px] h-[400px] overflow-hidden rounded-lg'>
              <Image
                width={300}
                height={400}
                src="https://images.unsplash.com/photo-1631901999319-efd71a712378?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="hero5"
                className='hover:scale-110 delay-150 rounded-lg'
              />
            </div>
            <h1 className='py-4'> Atlanta </h1>
          </div>
        </div>
        <div className=''>
          <button className='py-2 px-5 border-2 border-rose-600 rounded-lg text-rose-600 hover:bg-rose-600 hover:text-white delay-300'> View Profile </button>
        </div>
      </section>
      <section className='w-[100vw] h-auto mx-auto bg-rose-200'>
        <div className='grid grid-cols-1 md:grid-cols-2 content-center items-center w-[100%] my-20 gap-y-5'>
          <Image
            className='w-[80%] h-auto mx-auto rounded-lg'
            width={400}
            height={300}
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
            alt='Hero2'
          />
          <div className='w-[80%] mx-auto space-y-4'>
            <h3 className='font-semibold text-rose-400 text-3xl'> Our Promise</h3>
            <h1 className='font-bold text-5xl overflow-hidden'>
              Creating the world's finest developments
            </h1>
            <p className='text-xl text-gray-800 font-medium '>
              Lodha is India’s leading real estate developer, delivering thoughtfully designed, premium properties that shape urban lifestyle.
            </p>
            <button className='rounded-lg border-2 border-rose-400 py-3 px-5 text-rose-400 hover:bg-rose-400 hover:text-white delay-300'> Know More</button>
          </div>
        </div>
      </section>
      <section className='py-10 space-y-5'>
        <h1 className='text-center'> Our Brands </h1>
        <div className='flex flex-wrap justify-center gap-7 lg:gap-10'>
          <Image
            className='h-[200px] w-[250px]'
            width={300}
            height={200}
            alt="hero8"
            src="https://images.unsplash.com/photo-1615915468538-0fbd857888ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyYW5jaCUyMGxvZ298ZW58MHx8MHx8fDA%3D"
          />
          <Image
            className='h-[200px] w-[250px]'
            width={300}
            height={200}
            alt="hero8"
            src="https://images.unsplash.com/photo-1615915468538-0fbd857888ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyYW5jaCUyMGxvZ298ZW58MHx8MHx8fDA%3D"
          />
          <Image
            className='h-[200px] w-[250px]'
            width={300}
            height={200}
            alt="hero8"
            src="https://images.unsplash.com/photo-1615915468538-0fbd857888ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyYW5jaCUyMGxvZ298ZW58MHx8MHx8fDA%3D"
          />
        </div>
      </section>
      <footer className='flex w-full mx-auto bg-rose-100 justify-evenly py-10'>
        <div className='flex gap-20'>
          <div>
            {
              ["Our Story", "Our Impact", "Careers", "Investor Relation", "All Projects", "Grievance Portal"].map((item, index) => (
                <h1 key={index} className='text-gray-700 hover:font-bold cursor-pointer'> {item} </h1>
              ))
            }
          </div>
          <div>
            {
              ["Our Story", "Our Impact", "Careers", "Investor Relation", "All Projects", "Grievance Portal"].map((item, index) => (
                <h1 key={index} className='text-gray-700 hover:font-bold cursor-pointer'> {item} </h1>
              ))
            }
          </div>
        </div>
        <div>
          <Image
            className='h-[150px] w-[200px]'
            width={300}
            height={200}
            alt="hero8"
            src="https://images.unsplash.com/photo-1615915468538-0fbd857888ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyYW5jaCUyMGxvZ298ZW58MHx8MHx8fDA%3D"
          />
        </div>
      </footer>
    </div>
  )
}

export default page
