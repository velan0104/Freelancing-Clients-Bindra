'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import { MessageCircle } from "lucide-react";
import { CircleHelp } from "lucide-react";


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
        },
        {
            name: "Our Story",
        },
        {
            name: "Projects",
            subMenu: [
                {
                    name: "Present Projects",
                    desc: "Mumbai",
                    icon: CircleHelp,
                },
                {
                    name: "Past Projects",
                    desc: "Mumbai",
                    icon: MessageCircle,
                }
            ],
            gridCols: 1,
        },
        // {
        //   name: "Enterprise",
        //   subMenuHeading: ["Overview", "Features"],
        //   subMenu: [
        //     {
        //       name: "Enterprise",
        //       desc: "Overview",
        //       icon: ShieldPlus,
        //     },
        //     {
        //       name: "Collaboration",
        //       desc: "Design together",
        //       icon: Users,
        //     },
        //     {
        //       name: "Customers",
        //       desc: "Stories",
        //       icon: Dessert,
        //     },
        //     {
        //       name: "Security",
        //       desc: "Your site secured",
        //       icon: Lock,
        //     },
        //   ],
        //   gridCols: 2,
        // },
        {
            name: "Our Impact",
        },
        {
            name: "Contact",
        },
    ];


    return (
        <div>
            <header className={`  h-16 w-full text-[15px] text-[#DAA520] fixed z-[999] bg-white/20 ${scrollDirection === "scroll-down" ? "-translate-y-full" : ""}
        ${scrollDirection === "scroll-up" ? " bg-white/20" : ""}`}>
                <div className='absolute top-0 h-16 w-full backdrop-blur z-0' />
                <nav className="h-full flex justify-between items-center w-full px-6 md:px-8 lg:px-20 z-[999]">
                    <div className="flex items-center gap-x-3 z-[999]">
                        <h3 className="text-lg font-semibold">Bindra</h3>
                    </div>

                    <ul className="gap-x-1 lg:flex lg:items-center hidden">
                        {Menus.map((menu) => (
                            <DesktopMenu menu={menu} key={menu.name} />
                        ))}
                    </ul>
                    <div className="flex gap-x-5 lg:hidden">
                        <div className="lg:hidden">
                            <MobileMenu Menus={Menus} />
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;