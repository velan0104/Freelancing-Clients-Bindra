"use client";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import Blogs from "./Blogs";
import Image from "next/image";

const BlogPage = () => {
  const router = useRouter();
  const currentUrl = usePathname();

  return (
    <div className="mt-16 h-auto bg-gray-100">
      <h1 className="text-center font-semibold text-[7vw] pt-5 md:text-[4vw] text-gold-1">
        {" "}
        Bindra Lifestyle{" "}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-8 lg:px-16 py-8">
        {Blogs.map((blog, index) => (
          <article
            key={index}
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg cursor-pointer bg-white"
            onClick={() => router.push(`${currentUrl}/${index + 1}`)}
          >
            <Image
              alt={`{Blog-${index + 1}}`}
              src={blog.img}
              width={400}
              height={300}
              className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6">
              <time
                dateTime="2022-10-10"
                className="block text-xs text-gray-500"
              >
                {" "}
                10th Oct 2022{" "}
              </time>

              <h3 className="mt-0.5 text-lg text-gray-900">{blog.title}</h3>

              <div className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {blog.description()}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
