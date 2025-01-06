import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className=" w-full bg-gold-1 pt-10 md:flex-row gap-y-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto relative items-center">
        <div className="text-lg w-[90%] mx-auto ">
          <div className="flex gap-10 flex-wrap justify-center">
            <Image
              className="h-[150px] w-[150px] hidden md:block md:h-[100px] md:w-[100px] rounded-md mix-blend-dark"
              width={150}
              height={150}
              alt="hero8"
              src="/images/bindra_logo.jpg"
            />
            <div className="flex flex-col gap-4 text-lg md:text-xl">
              <h1 className="font-bold text-center text-3xl p-1">
                {" "}
                Contact Us{" "}
              </h1>
              <div className="flex justify-between gap-10 text-base md:text-lg flex-wrap items-center">
                <div className="mx-auto text-center">
                  <h2 className="font-semibold text-xl"> Email: </h2>
                  <a href="mailto:thevarvelan@gmail.com" className="text-lg">
                    {" "}
                    bindras@bindras.com
                  </a>
                </div>
                <div className="mx-auto text-center">
                  <h2 className="font-semibold text-xl"> Telephone No: </h2>
                  <p className="text-lg">022-28360241</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex gap-20 py-10 justify-evenly md:justify-normal font-semibold">
              <div className="flex flex-col gap-3">
                <div>
                  <Link href="/" className="underline-effect">
                    {" "}
                    Home{" "}
                  </Link>
                </div>

                <div>
                  <Link href="/OurStory" className="underline-effect ">
                    About Us
                  </Link>
                </div>
                <div>
                  <Link href="/Blog" className="underline-effect lg:hidden">
                    {" "}
                    Blogs{" "}
                  </Link>
                </div>
              </div>
              <div className="lg:flex flex-col gap-3 hidden">
                <div>
                  <Link href="/Blog" className="underline-effect">
                    {" "}
                    Blogs{" "}
                  </Link>
                </div>
                <div>
                  <Link href={"/Directors"} className="underline-effect">
                    Directors
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="lg:hidden">
                  <Link href={"/Directors"} className="underline-effect ">
                    Directors
                  </Link>
                </div>
                <div>
                  <Link
                    href={"/Projects/Residential"}
                    className="underline-effect"
                  >
                    {" "}
                    Projects{" "}
                  </Link>
                </div>
                <div>
                  <Link
                    href={"/Hospitality"}
                    className="underline-effect"
                    prefetch={true}
                  >
                    {" "}
                    Hospitality{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl mx-auto w-[90%] md:w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15078.724588077195!2d72.8658487!3d19.121639!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c825e45d2b3b%3A0x273a6dbf1048d7a3!2sBindra%20Group!5e0!3m2!1sen!2sin!4v1732637399180!5m2!1sen!2sin"
            width="380"
            height="280"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className=" w-[500px] h-[300px] rounded-xl object-contain"
          ></iframe>
        </div>
      </div>

      <div className="m-5">
        <div className="flex justify-between md:justify-end items-center px-10 pt-3 border-t-4 border-black">
          <div className="">
            <div className="flex mx-auto justify-evenly md:justify-end gap-4 items-center pb-1">
              <a href="#" className="text-black hover:text-gray-900">
                <svg
                  className="w-8 h-8"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/bindragroup?igsh=MTdmM3NzcWozZDFlMA=="
                className="text-black hover:text-gray-900"
                target="_blank"
              >
                <svg
                  className="w-7 h-7"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="#" className="text-black hover:text-gray-900">
                <svg
                  // enableBackground="new 0 0 1668.56 1221.19"
                  viewBox="0 0 1668.56 1221.19"
                  id="twitter-x"
                  className="w-11 h-11"
                >
                  <circle
                    cx="834.28"
                    cy="610.6"
                    r="481.33"
                    stroke="#fff"
                    strokeMiterlimit="10"
                  ></circle>
                  <path
                    fill="#fff"
                    d="M485.39,356.79l230.07,307.62L483.94,914.52h52.11l202.7-218.98l163.77,218.98h177.32
			L836.82,589.6l215.5-232.81h-52.11L813.54,558.46L662.71,356.79H485.39z M562.02,395.17h81.46l359.72,480.97h-81.46L562.02,395.17
			z"
                    transform="translate(52.39 -25.059)"
                  ></path>
                </svg>
              </a>
              <a href="#" className="text-black hover:text-gray-900">
                <svg className=" w-8 h-8" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <p className="text-center">
              © 1980 Bindra, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
