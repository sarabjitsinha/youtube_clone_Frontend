import Home from "./Home";
// import Menu from "./Menu";
import Sidebar from "./Sidebar/Sidebar";

function HomeMenu(){
    return(
        <div className="flex gap-1 mt-2 p-2">
            <div className="flex">
        {/* <Menu/> */}
        <Sidebar/>
        </div>
        
        <Home/>
      
        </div>
    )
}

export default HomeMenu;