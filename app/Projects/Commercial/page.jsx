import Slider from "../../components/Slider/Slider";

const Page = () => {
  const ImageSlider = [
    {
      img: "/images/Commercial/Commercial_1.JPG",
      title: "Slide 01",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, sed. Alias, sint?",
    },
    {
      img: "/images/Commercial/Commercial_2.JPG",
      title: "Slide 02",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, sed. Alias, sint?",
    },
    {
      img: "/images/Commercial/Commercial_3.JPG",
      title: "Slide 03",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, sed. Alias, sint?",
    },
    {
      img: "/images/Commercial/Commercial_4.JPG",
      title: "Slide 04",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, sed. Alias, sint?",
    },
    {
      img: "/images/Commercial/Commercial_5.JPG",
      title: "Slide 05",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, sed. Alias, sint?",
    },
    {
      img: "/images/Commercial/Commercial_6.JPG",
      title: "Slide 06",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, sed. Alias, sint?",
    },
  ];

  return (
    <div className="">
      <h1 className="mt-16 text-center text-5xl font-bold text-gold-1 p-5">
        {" "}
        Bindra's{" "}
      </h1>
      <h1 className="mt-4 text-3xl font-bold border-b-4 border-gold-1 text-gold-1 inline-block w-[90%] mx-[5%] py-5">
        {" "}
        COMMERCIAL PROJECTS{" "}
      </h1>
      <div className="">
        <Slider ImageSlider={ImageSlider} />
      </div>
    </div>
  );
};

export default Page;
