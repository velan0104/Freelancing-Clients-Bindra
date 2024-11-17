import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function MobileMenu({ Menus }) {
    const [isOpen, setIsOpen] = useState(false);
    const [clicked, setClicked] = useState(null);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
        setClicked(null);
    };

    const subMenuDrawer = {
        enter: {
            height: "auto",
            overflow: "hidden",
        },
        exit: {
            height: 0,
            overflow: "hidden",
        },
    };

    return (
        <div>
            <motion.button
                className="md:hidden z-[999] relative"
                onClick={toggleDrawer}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {isOpen ? <X /> : <Menu />}
            </motion.button>

            <motion.div
                className="fixed left-0 right-0 top-16 overflow-y-auto h-fit bg-gray-500/50 backdrop-blur text-white p-6 pb-14"
                initial={{ y: "-100%" }}
                animate={{
                    y: isOpen ? "0%" : "-100%",
                }}
                transition={{
                    duration: 0.75,
                }}
            >
                <ul>
                    {Menus.map(({ name, subMenu }, i) => {
                        const isClicked = clicked === i;
                        const hasSubMenu = subMenu?.length;
                        return (
                            <li key={name} className="">
                                <span
                                    className="flex items-center justify-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                                    onClick={() => setClicked(isClicked ? null : i)}
                                >
                                    {name}
                                    {hasSubMenu && (
                                        <ChevronDown
                                            className={`ml-auto ${isClicked && "rotate-180"} `}
                                        />
                                    )}
                                </span>
                                {hasSubMenu && (
                                    <motion.ul
                                        initial="exit"
                                        animate={isClicked ? "enter" : "exit"}
                                        variants={subMenuDrawer}
                                        className="ml-5"
                                    >
                                        {subMenu.map(({ name, icon: Icon }) => (
                                            <li
                                                key={name}
                                                className="p-2 flex items-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer"
                                            >
                                                <Icon size={17} />
                                                {name}
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </motion.div>
        </div>
    );
}
