'use client';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [scrollDirection, setScrollDirection] = useState("");
    const [isMobile, setIsMobile] = useState(false);

    // Handle scroll direction
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

    return (
        <div>
            <nav className={`fixed flex justify-between top-0 left-0 w-full py-5 px-16 text-center bg-white/40 z-[9999] transition-all duration-300 ease-in-out text-black 
                ${scrollDirection === "scroll-down" ? "-translate-y-full" : ""}
                ${scrollDirection === "scroll-up" ? "drop-shadow-[0_-10px_20px_rgba(170,170,170)] bg-white/40" : ""}`}>
                <div className='flex gap-28'>
                    <div>
                        Bindra
                    </div>
                    <div className='gap-10 hidden lg:flex'>
                        {
                            ["Our Story", "Our Impact", "Our Projects"].map((item, index) => (
                                <h1 key={index}> {item} </h1>
                            ))
                        }
                    </div>
                </div>
                <div className='hidden lg:flex gap-10'>
                    {
                        ["Enquire", "Chat", "Search"].map((item, index) => (
                            <h1 key={index}> {item} </h1>
                        ))
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
