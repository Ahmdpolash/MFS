import { useState } from "react";

import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router";
import Container from "../shared/Container";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useUser } from "@/context/user-provider";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { user } = useUser();
  console.log(user);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="backdrop-blur-sm border-b border-white/20"
    >
      <div
        onClick={() => setOpen(false)}
        className={`fixed duration-200 ${
          !open ? "invisible" : "visible"
        } w-screen h-screen  top-0 left-0 z-10 "flex items-center justify-between px-6 py-4 backdrop-blur-sm cursor-pointer `}
      ></div>

      <Container>
        <div className="flex justify-between py-4 items-center ">
          <div className="logo">
            <Link
              to={"/"}
              className="text-2xl font-semibold cursor-pointer text-white"
            >
              MoneyMate
            </Link>
          </div>

          {/* Desktop menu */}

          <div className="hidden md:flex items-center *:uppercase space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/">How it Works</NavLink>
            <NavLink href="/">About Us</NavLink>
            <NavLink href="/dashboard/user">Dashboard</NavLink>
          </div>

          {/* Mobile menu */}
          <div
            className={`${
              open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            } lg:hidden transition-all fixed z-50 duration-500 border-r border-gray-200/40 shadow-lg backdrop-blur-sm transform h-screen w-[350px] bg-whit text-black  top-0 left-0  bg-black/[0.97] `}
          >
            <button
              className="px-4 py-2 text-3xl  font-semibold flex cursor-pointer absolute right-0 mt-2"
              onClick={() => setOpen(false)}
            >
              <RxCross1 className="text-white " />
            </button>

            <div className="flex h-screen flex-col *:text-3xl p-5 gap-y-5 text-[18px] items-center justify-center">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/">How it Works</NavLink>
              <NavLink href="/">About Us</NavLink>
            </div>
          </div>

          <div className="flex items-center">
            <Link to={"/sign-in"}>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white cursor-pointer">
                {" "}
                SIGN IN
              </Button>
            </Link>

            <IoMdMenu
              className="text-3xl  text-white cursor-pointer lg:hidden ml-4"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={href}
      className="text-gray-300 hover:text-white transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
    </Link>
  );
}

export default Navbar;
