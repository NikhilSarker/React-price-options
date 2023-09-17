import { useState } from "react";
import Links from "../Links/Links";
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";


const Navbar = () => {

  const [open, setOpen] = useState(false)
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Products", path: "/products" }
  ];
  


  return (
   <nav>
     <div className="md:hidden text-2xl cursor-pointer " onClick={()=> setOpen(!open)}>
      {
        open === true?<AiOutlineClose ></AiOutlineClose>: <AiOutlineMenu ></AiOutlineMenu>
      }
      
    
     </div>
    {/* <ul className={`md:flex absolute md:static ${open?'':'hidden'} bg-red-400`}> */}
    {/* <ul className={`md:flex absolute md:static duration-1000 md:duration-0 ${open?'top-10':'-top-60'} md:top-0 bg-red-400`}> */}
    <ul className={`md:flex absolute md:static duration-1000 md:duration-0 ${open?'left-0':'-left-60'} md:left-0`}>
      {
        routes && routes?.map((route, index)=>(
          <Links key={index} route={route}></Links>

        ))

      }
      
    </ul>
   </nav>
  );
};

export default Navbar;