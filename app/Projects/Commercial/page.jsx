import { ExpandableCardDemo } from "../../components/AnimatedCard";

const Page = () => {
  return (
    <div className="mt-16">
      <h1 className=" py-4  text-[8vw] lg:text-[5vw] font-semibold text-center ">
        {" "}
        Commercial Projects{" "}
      </h1>
      <div className="lg:mx-10">
        <ExpandableCardDemo />
      </div>
    </div>
  );
};

export default Page;
