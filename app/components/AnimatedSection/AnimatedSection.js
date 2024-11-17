'use client';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import React from "react";

const AnimatedSection = ({ children }) => {
    const [hasAnimated, setHasAnimated] = useState(false);  // Track if the element has already animated

    const handleIntersection = (entries) => {
        const [entry] = entries;
        // Only trigger animation when it first becomes visible
        if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);  // Trigger the animation
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.3,  // Trigger when 30% of the element is visible
        });

        const element = document.querySelector(".animate-section");
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [hasAnimated]);

    // Variants for staggered animation
    const containerVariants = {
        hidden: { opacity: 0, x: -100 }, // Start from left (off-screen)
        visible: {
            opacity: 1,
            x: 0, // Move to the normal position (on-screen)
            transition: {
                staggerChildren: 0.2, // Delay between each child animation
                duration: 0.8, // Smooth transition
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, translateY: 20 }, // Optionally add slight vertical movement
        visible: { opacity: 1, translateY: 0 },
    };

    return (
        <motion.div
            className="animate-section"
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"} // Trigger animation only once
            variants={containerVariants}
        >
            {React.Children.map(children, (child) => (
                <motion.div variants={childVariants}>{child}</motion.div>
            ))}
        </motion.div>
    );
};

export default AnimatedSection;
