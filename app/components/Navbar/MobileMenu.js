import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MobileMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState({
    submenu: false,
    innerSubmenu: false,
  });
  const [clicked, setClicked] = useState(null);
  const router = useRouter();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
    // setOpenSubMenu(false);
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
        className="fixed left-0 right-0 top-0 pt-16 overflow-y-auto h-fit bg-gray-500/50 backdrop-blur text-white p-6 pb-14"
        initial={{ y: "-100%" }}
        animate={{
          y: isOpen ? "0%" : "-100%",
        }}
        transition={{
          duration: 0.75,
        }}
      >
        <ul>
          {Menus.map((menu, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = menu?.subMenu?.length > 0;
            return (
              <li key={i} className="">
                <span
                  className="flex items-center justify-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                  onClick={() => {
                    setClicked(isClicked ? i : null);
                    hasSubMenu ?? router.push(menu.link);
                  }}
                >
                  {menu.name}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto ${isClicked && "rotate-180"} `}
                    />
                  )}
                </span>
                {hasSubMenu && (
                  <ul
                    className={`ml-5 ${
                      openSubMenu.submenu ? "flex flex-col" : "hidden"
                    }`}
                  >
                    {menu?.subMenu.map((submenu) => (
                      <div key={submenu.name} className="group">
                        <li className=" p-2 flex items-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer">
                          {submenu.icon && <submenu.icon />}
                          {submenu.name}
                          {submenu?.subMenu && (
                            <ChevronDown
                              className={`ml-auto group-hover:rotate-180 `}
                            />
                          )}
                        </li>
                        <ul
                          className={`ml-8 ${
                            openSubMenu.innerSubmenu
                              ? "flex flex-col"
                              : "hidden"
                          }`}
                        >
                          {submenu?.subMenu?.map((menu, index) => (
                            <li key={index} className="hover:bg-white/5 p-3">
                              {menu.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
