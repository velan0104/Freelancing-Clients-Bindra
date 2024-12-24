import Image from "next/image";
import BentroGrid from "../components/BentroGrid";

export const metadata = {
  title: "Our Story",
};

const page = () => {
  const stories = [
    {
      img: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
      title: " Residential Spaces ",
      content:
        "Thoughtfully designed homes that offer comfort and a sense of belonging.",
    },
    {
      img: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
      title: "Commercial Complexes",
      content: "Purpose-built infrastructure to support thriving businesses.",
    },
    {
      img: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
      title: "Clubhouses and Hotels",
      content: "Creating destinations where leisure meets elegance.",
    },
  ];
  return (
    <div>
      <section className="w-[100vw] h-[100vh]">
        <video
          className="w-[100%] h-[100%] object-cover"
          src="./videos/Bindra_logo.mp4"
          autoPlay
          loop
          muted
        />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 py-20 content-center items-center mx-auto gap-y-8 bg-gray-100 ">
        <div>
          <Image
            className="w-[80%] md:w-[70%] h-auto mx-auto rounded-lg"
            src="https://images.unsplash.com/photo-1569152811536-fb47aced8409?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D"
            width={300}
            height={300}
            alt="hero10"
          />
        </div>
        <div className="w-[80%] mx-auto space-y-3">
          <h3 className="text-gold-1 font-semibold text-3xl">About Bindra</h3>
          <h1 className="font-bold text-xl">
            {" "}
            29 Years of Excellence in Construction{" "}
          </h1>
          <p className="text-gray-950">
            For nearly thirty years, we have been a cornerstone in the
            transformation of Andheri (E) and its surrounding areas. Our journey
            began 29 years ago with a vision to create spaces that stand the
            test of time—whether they are residential buildings, commercial
            complexes, clubhouses, or luxury hotels. Quality has been our
            guiding principle as an ISO 9001:2000-certified firm. Every project
            we undertake reflects our dedication to superior craftsmanship,
            attention to detail, and unwavering commitment to excellence.
          </p>
        </div>
      </section>
      <section className="w-full py-10 mx-auto ">
        <div className="text-center ">
          <div className="mb-10">
            <h1 className="font-semibold text-gold-1 text-2xl"> OUR STORY </h1>
            <div className="text-xl font-bold p-2">
              {" "}
              A Legacy of Trust and Innovation{" "}
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[90%] mx-auto">
              <Image
                className="col-span-2 rounded-xl mx-auto w-full h-[300px] hidden lg:block"
                src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
                width={500}
                height={300}
                alt="img1"
              />
              <div className="flex justify-center flex-col  gap-5 px-4 order-2 md:order-1 text-center md:text-left">
                <h1 className="text-gold-1 text-2xl font-semibold ">
                  Residential Spaces
                </h1>
                <p className="text-lg font-light">
                  Thoughtfully designed homes that offer comfort and a sense of
                  belonging.
                </p>
              </div>
              <Image
                className="w-[80%] lg:w-full h-full rounded-xl md:order-2 mx-auto"
                src="https://images.unsplash.com/photo-1560184897-ae75f418493e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D"
                width={400}
                height={400}
                alt="img2"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 w-[90%] mx-auto">
              <Image
                className="w-[80%] lg:w-full h-full rounded-xl md:order-2 lg:order-1 mx-auto"
                src="https://images.unsplash.com/photo-1560184897-ae75f418493e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D"
                width={400}
                height={400}
                alt="img2"
              />
              <div className="flex justify-center flex-col  gap-5 px-4 md:order-1 text-center md:text-center">
                <h1 className="text-gold-1 text-2xl font-semibold ">
                  Commercial Complexes
                </h1>
                <p className=" text-lg font-light">
                  Purpose-built infrastructure to support thriving businesses.
                </p>
              </div>
              <Image
                className="w-[80%] mx-auto lg:w-full h-full rounded-xl"
                src="https://images.unsplash.com/photo-1560184897-ae75f418493e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D"
                width={400}
                height={400}
                alt="img2"
              />
              <div className="flex justify-center flex-col  gap-5 px-4 text-center md:text-left">
                <h1 className="text-gold-1 text-2xl font-semibold ">
                  Clubhouses and Hotels
                </h1>
                <p className="text-lg font-light">
                  Thoughtfully designed homes that offer comfort and a sense of
                  belonging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-gray-100">
        <h1 className="text-center font-bold text-5xl pb-10">
          {" "}
          Building the Future
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-5">
          <Image
            className="w-[80%] md:w-[70%] h-auto mx-auto rounded-lg"
            src="https://images.unsplash.com/photo-1569152811536-fb47aced8409?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D"
            width={300}
            height={300}
            alt="hero10"
          />
          <p className="w-[90%] font-medium text-lg md:text-xl text-center mx-auto">
            Our work is more than just construction; it’s about building a
            legacy that inspires trust and delivers value. With each project, we
            aim to redefine what it means to be a reliable name in the industry,
            contributing meaningfully to the development of Andheri (E) and its
            vibrant community.
          </p>
        </div>
      </section>
      <section className="w-full py-10 mx-auto space-y-10 relative">
        <h1 className="text-center font-bold text-5xl text-gold-1 p-4">
          {" "}
          Who We Are{" "}
        </h1>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          <div className=" p-10 border-2 border-gold-1 rounded-md space-y-2 max-w-[300px] text-center">
            <h1 className="font-bold text-center"> 29 Years of Experience </h1>
            <p> A proven track record in construction.</p>
          </div>
          <div className=" p-10 border-2 border-gold-1 rounded-md space-y-2 max-w-[300px] text-center">
            <h1 className="font-bold text-center">
              {" "}
              ISO 9001:2000 Certified:{" "}
            </h1>
            <p> Committed to adhering to global quality standards.</p>
          </div>
          <div className=" p-10 border-2 border-gold-1 rounded-md space-y-2 max-w-[300px] text-center">
            <h1 className="font-bold text-center"> Rooted in Andheri (E): </h1>
            <p> Deeply connected to the community we serve. </p>
          </div>
        </div>
        <div className="max-w-[750px] text-center mx-auto px-5 font-medium">
          Our story is not just about the buildings we’ve constructed but the
          relationships we’ve built along the way. With every foundation we lay,
          we are crafting spaces that inspire and endure for generations to
          come.
        </div>
      </section>
      {/* Bento Grid */}
      <BentroGrid />
    </div>
  );
};

export default page;
