import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function DesktopMenu({ menu }) {
    const [isHover, toggleHover] = useState(false);

    const subMenuAnimate = {
        enter: {
            opacity: 1,
            translateY: 0,
            transition: {
                duration: 0.3,
            },
            display: "block",
        },
        exit: {
            opacity: 0,
            translateY: -10,
            transition: {
                duration: 0.3,
            },
            transitionEnd: {
                display: "none",
            },
        },
    };

    const hasSubMenu = menu?.subMenu?.length;

    return (
        <motion.li
            className="relative group/link"
            onHoverStart={() => toggleHover(true)}
            onHoverEnd={() => toggleHover(false)}
            key={menu.name}
        >
            <span className="flex items-center gap-1 cursor-pointer px-3 py-1 rounded-xl hover:bg-white/5 overflow-y-hidden">
                {menu.name}
                {hasSubMenu && (
                    <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
                )}
            </span>
            {hasSubMenu && (
                <motion.div
                    className="fixed top-16 backdrop-blur mt-2 bg-gray-500/50  shadow-lg rounded-lg p-4 mx-auto overflow-hidden "
                    initial="exit"
                    animate={isHover ? "enter" : "exit"}
                    variants={subMenuAnimate}
                >
                    <div
                        className={`grid gap-7 ${menu.gridCols === 3
                            ? "grid-cols-3"
                            : menu.gridCols === 2
                                ? "grid-cols-2"
                                : "grid-cols-1"
                            }`}
                    >
                        {menu.subMenu.map((submenu, i) => (
                            <div className="relative cursor-pointer" key={i}>
                                {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                                    <p className="text-sm mb-4 text-gray-500">
                                        {menu?.subMenuHeading?.[i]}
                                    </p>
                                )}
                                <div className="flex items-center gap-x-4 group/menubox justify-center">
                                    <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-gray-900 duration-300">
                                        {submenu.icon && <submenu.icon />}
                                    </div>
                                    <div>
                                        <h6 className="font-semibold ">{submenu.name}</h6>
                                        <p className="text-sm text-gray-900">{submenu.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.li>
    );
}
