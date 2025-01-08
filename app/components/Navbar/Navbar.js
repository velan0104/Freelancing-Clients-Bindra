"use client";
import React, { useEffect, useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { MessageCircle } from "lucide-react";
import { CircleHelp } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState("");

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        setScrollDirection("");
        return;
      }

      if (currentScroll > lastScroll) {
        setScrollDirection("scroll-down");
      } else if (currentScroll < lastScroll) {
        setScrollDirection("scroll-up");
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Menus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Our Story",
      link: "/OurStory",
    },
    {
      name: "Projects",
      link: "/Projects",
      subMenu: [
        {
          name: "Commercial Projects",
          desc: "Mumbai",
          icon: CircleHelp,
          link: "/Commercial",
        },
        {
          name: "Residential Projects",
          desc: "Mumbai",
          icon: MessageCircle,
          link: "/Residential",
          subMenu: [
            {
              name: "Present Projects",
              desc: "Mumbai",
              icon: CircleHelp,
              link: "Present",
            },
            {
              name: "Past Projects",
              desc: "Mumbai",
              icon: CircleHelp,
              link: "Past",
            },
          ],
        },
      ],
      gridCols: 1,
    },
    {
      name: "Hospitality",
      link: "/Hospitality",
    },
    {
      name: "Directors",
      link: "/Directors",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <div className="relative">
      <header
        className={`  h-16 w-full text-[15px] text-gold-1 fixed z-[9999] bg-white/20 ${
          scrollDirection === "scroll-down" ? "-translate-y-full" : ""
        }
        ${scrollDirection === "scroll-up" ? " bg-white/20" : ""}`}
      >
        <div className="absolute top-0 h-16 w-full backdrop-blur z-0" />
        <nav className="h-full flex justify-between items-center w-full px-6 md:px-8 lg:px-20 z-[999]">
          <div className="flex items-center gap-x-3 z-[9999]">
            <Image
              src="/images/bindra_logo.jpg"
              alt="logo"
              width={100}
              height={100}
              className="w-14 h-14 rounded-md"
              priority
            />
          </div>

          <ul className="gap-x-2 md:flex lg:items-center hidden">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
          <div className="flex gap-x-5 md:hidden">
            <div className="mdp:hidden">
              <MobileMenu Menus={Menus} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
