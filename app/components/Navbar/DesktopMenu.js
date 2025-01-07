import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function DesktopMenu({ menu }) {
  const [isHover, toggleHover] = useState(false);
  const [pathName, setPathName] = useState("Home");
  const path = usePathname();

  useEffect(() => {
    switch (path) {
      case "/":
        setPathName("Home");
        break;
      case "/OurStory":
        setPathName("Our Story");
        break;
      case "/Projects/Residential":
      case "/Projects/Commercial":
        setPathName("Projects");
        break;
      case "/Hospitality":
        setPathName("Hospitality");
        break;
      case "/Directors":
        setPathName("Directors");
        break;
      case "/Contact":
        setPathName("Contact");
        break;
      default:
        break;
    }
  }, [path]);

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
  const router = useRouter();

  return (
    <motion.li
      className="relative group/link"
      onHoverStart={() => toggleHover(true)}
      onHoverEnd={() => toggleHover(false)}
      key={menu.name}
    >
      {menu?.subMenu ? (
        <div>
          <span
            className={`flex items-center gap-1 cursor-pointer px-3 py-1 overflow-y-hidden text-md font-semibold text-gold-1 ${
              pathName === menu.name
                ? " border-b-4 border-gold-1 "
                : " underline-effect-gold"
            }`}
          >
            {menu.name}
            {hasSubMenu && (
              <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200 inline" />
            )}
          </span>
        </div>
      ) : (
        <Link href={menu.link} prefetch={true}>
          <div>
            <span
              className={`flex items-center gap-1 cursor-pointer px-3 py-1 overflow-y-hidden text-md font-semibold text-gold-1 ${
                pathName === menu.name
                  ? " border-b-4 border-gold-1 "
                  : " underline-effect-gold"
              }`}
            >
              {menu.name}
              {hasSubMenu && (
                <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200 inline" />
              )}
            </span>
          </div>
        </Link>
      )}
      {hasSubMenu && (
        <motion.div
          className="fixed top-16 backdrop-blur mt-2 bg-gray-500/50  shadow-lg rounded-lg p-4 overflow-hidden "
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <div
            className={`grid gap-7 ${
              menu.gridCols === 3
                ? "grid-cols-3"
                : menu.gridCols === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {menu.subMenu.map((submenu, i) => (
              <div className="group relative cursor-pointer" key={i}>
                {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                  <p className="text-sm mb-4 text-gray-500">
                    {menu?.subMenuHeading?.[i]}
                  </p>
                )}
                <div
                  className="flex items-center gap-x-4 group/menubox justify-start"
                  onClick={() => router.push(`${menu.link}/${submenu?.link}`)}
                >
                  <div>
                    <h6 className="font-semibold ">{submenu.name}</h6>
                    <p className="text-sm text-gray-900">{submenu.desc}</p>
                  </div>
                  {submenu?.subMenu && (
                    <ChevronDown className="mt-[0.6px] group-hover:rotate-180 duration-200" />
                  )}
                </div>
                <div className=" opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in">
                  {submenu?.subMenu?.map((submenus, index) => (
                    <div
                      key={index}
                      className="group-hover:flex py-3 gap-5 hidden hover:bg-transparent/10 px-5"
                      onClick={() =>
                        router.push(
                          `${menu.link}/${submenu?.link}?section=${submenus.link}`
                        )
                      }
                    >
                      <div>
                        <h6 className="font-semibold">{submenus.name}</h6>
                        <p className="text-sm text-gray-400">{submenus.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}
