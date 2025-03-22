import { menu } from "../utils/data";
import Mycontext from "../utils/Mycontext";
import { useContext } from "react";

function Menu(){
    const{value}=useContext(Mycontext);

    return(

        <div className="flex flex-col gap-4 text-xs w-30 sm:text-sm sm:w-30 md:text-lg md:w-40" >
            {menu.map((item)=>{
                return(
                    <ul key={item.name}>
                        {value ? <li className=" font-bold active:bg-green-600 ">{item.icon}  {item.name}</li> 
                        : <li className="p-1">{item.icon}</li>}
                    </ul>
                )
            })}
        </div>
    )
}

export default Menu;