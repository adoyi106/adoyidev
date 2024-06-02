import { IoIosMenu, IoMdClose } from "react-icons/io";

function MobileButton({isOpen, toggle}) {
 
  return (
    <button className="flex gap-2 lg:hidden text-[#333] cursor-pointer z-[999]" onClick={toggle}>
      {
!isOpen ?
        
        <IoIosMenu name="menu-outline" className={`icon-mobile-nav text-6xl `} /> :
      
      <IoMdClose name="close-outline" className="icon-mobile-nav text-6xl "/>
}
      
    </button>
  );
}

export default MobileButton;
