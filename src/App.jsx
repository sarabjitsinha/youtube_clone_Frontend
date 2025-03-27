
import "./App.css"
import Header from "./components/Header"
import MyProvider from "./utils/MyProvider";
import { Outlet } from "react-router-dom";

function App(){
   
    return(
        <div >
            <MyProvider>
                <Header/>
                 <Outlet/>
            </MyProvider>
        </div>

    )
}

export default App;