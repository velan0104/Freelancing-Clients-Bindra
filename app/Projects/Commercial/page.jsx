import Slider from "../../components/Slider/Slider";

const Page = () => {
  const ImageSlider = [
    {
      img: "https://images.unsplash.com/photo-1731432246387-1bc4274a5a12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
      title: "Slide 01",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, sed. Alias, sint?",
    },
    {
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Slide 02",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, sed. Alias, sint?",
    },
    {
      img: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Slide 03",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, sed. Alias, sint?",
    },
    {
      img: "https://images.unsplash.com/photo-1735436313893-97fd977ab651?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
      title: "Slide 04",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, sed. Alias, sint?",
    },
    {
      img: "https://images.unsplash.com/photo-1496564203457-11bb12075d90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Slide 05",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, sed. Alias, sint?",
    },
    {
      img: "https://images.unsplash.com/photo-1496564203457-11bb12075d90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Slide 06",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, sed. Alias, sint?",
    },
  ];

  return (
    <div className="mt-16">
      <h1 className=" py-4 text-3xl font-bold border-b-4 border-gold-1 text-gold-1 text-center md:text-left w-[90%] mx-[5%] uppercase">
        {" "}
        Commercial Projects{" "}
      </h1>
      <div className="">
        <Slider ImageSlider={ImageSlider} />
      </div>
    </div>
  );
};

export default Page;
