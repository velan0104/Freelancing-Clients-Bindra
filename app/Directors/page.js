import Image from "next/image";
import React from "react";
export const metadata = {
  title: "Directors",
};

const page = () => {
  return (
    <div className="pt-20 bg-gray-100 pb-10">
      <h1 className=" py-4 text-4xl font-bold border-b-4 border-gold-1 text-gold-1 text-center w-[90%] mx-[5%] uppercase">
        Directors
      </h1>
      {Directors.map(({ img, name = "", content }, index) => (
        <div
          key={index}
          className="flex items-center justify-center mx-auto py-5 max-w-[800px] px-8"
        >
          <div className="space-y-4">
            <Image
              src={img}
              width={300}
              height={400}
              alt="Name"
              className="rounded-md w-[400px] max-h-[400px] aspect-auto mx-4 md:mx-auto "
            />
            <div className="text-center font-bold text-xl">
              <h1> {name} </h1>
            </div>
            <div className="text-justify text-lg">
              {typeof content === "function" ? content() : content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Directors = [
  {
    name: "Mr. P.S. Bindra",
    img: "/images/Directors/Director_1.jpeg",
    content: () => {
      return (
        <div>
          <p>
            Mr. P.S. Bindra, the founder of Bindra Group, is a visionary builder
            and a highly respected social and cultural contributor. Over the
            years, he has actively participated in numerous community-driven
            initiatives, establishing a legacy of service and leadership. Some
            of his notable contributions include:
          </p>
          <ul
            style={{
              listStyle: "inside",
              padding: "10px",
              lineHeight: "1.6",
            }}
          >
            <li>
              Serving as Vice President of Gurudwara Guru Nanak Darbar,
              Sher-e-Punjab Society, Andheri (E) for over a decade, with a
              vision to construct a Dharmshala for the needy.
            </li>
            <li>
              Being Trustee and Honorary Secretary of Sher-e-Punjab Gymkhana and
              Health Club for 12+ years, leading its completion under his
              guidance.
            </li>
            <li>
              Acting as Chairman of Gurunanak English High School, Sher-e-Punjab
              for 20 years, with plans to expand the institution for better
              education.
            </li>
            <li>
              Conceptualizing and establishing the Matoshree Sports Complex at
              JV Link Road, Andheri (E), recognized for its superior amenities
              and architectural design.
            </li>
            <li>
              Leading as Chairman of Sher-e-Punjab Society, overseeing 305
              buildings.
            </li>
          </ul>
          <p>
            Mr. Bindra’s dedication to social welfare has earned him numerous
            awards, including the Rashtriya Nirman Ratn Award, Gaurav of India
            Award, Best Citizen Award, and Sikh Pride Award. His belief in
            helping others is captured in his guiding principle: “GOD HELPS
            THOSE WHO HELP OTHERS.”
          </p>
        </div>
      );
    },
  },
  {
    name: "Mr. Amardeep Bindra",
    img: "/images/Directors/Director_3.jpeg",
    content:
      "Mr. Amardeep Bindra, a director at Bindra Group, carries forward his father’s legacy with a modern perspective and dynamic leadership. He oversees the company’s operations with a focus on innovation, expansion, and maintaining strong community ties. Amardeep has been instrumental in modernizing the group's projects and ensuring they align with contemporary architectural and sustainability standards. His dedication to quality and customer satisfaction has helped solidify Bindra Group's reputation in the real estate sector.",
  },
  {
    name: "Mr. King Bindra",
    img: "/images/Directors/Director_2.jpeg",
    content:
      "Mr. King Bindra, also a director at Bindra Group, complements his brother’s leadership with a keen eye for strategy and growth. He plays a pivotal role in identifying new opportunities and driving the company's vision for future developments. King's emphasis on maintaining strong relationships with stakeholders and enhancing operational efficiency ensures the group's consistent success.",
  },
  {
    name: "",
    img: "/images/Directors/Director_4.jpg",
    content:
      "Together, Amardeep and King Bindra bring youthful energy and strategic foresight to the Bindra Group, propelling their father’s vision of creating sustainable, community-focused developments into the future. Their leadership ensures that the Bindra Group continues to excel in real estate and social contributions alike.",
  },
];

export default page;
