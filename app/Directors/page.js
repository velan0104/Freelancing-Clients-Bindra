import Image from "next/image";
import React from "react";
export const metadata = {
  title: "Directors",
};

const page = () => {
  return (
    <div className="my-20">
      <h1 className="text-center font-semibold text-5xl md:text-7xl p-5">
        {" "}
        Directors{" "}
      </h1>
      {["", "", ""].map((_, index) => (
        <div
          key={index}
          className="flex items-center justify-center mx-auto py-5 max-w-[700px] px-8"
        >
          <div className="space-y-4">
            <Image
              src={
                "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww"
              }
              width={300}
              height={400}
              alt="Name"
              className="rounded-md h-[400px] w-[300px] mx-auto"
            />
            <div className="text-center">
              <h1> Name </h1>
              <span> ( Time line ) </span>
            </div>
            <p className="text-justify">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac eu montes
              iaculis ac; mus quam tristique aliquam. Justo elementum feugiat
              netus dis pellentesque vel lectus sit. Nunc fames ac augue
              porttitor finibus, a donec nulla. Odio faucibus vivamus mattis in
              conubia rhoncus sed. Adipiscing varius urna nulla vehicula montes
              maximus. Posuere ullamcorper diam; lacinia adipiscing adipiscing
              ad sociosqu vitae. Lobortis facilisi nulla leo inceptos accumsan.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
