import "./Sidebar.css"
import home from "../../assets/home.png"
import game_icon from "../../assets/game_icon.png"
import automobile from "../../assets/automobiles.png"
import sports from "../../assets/sports.png"
import entertainment from "../../assets/entertainment.png"
import tech from "../../assets/tech.png"
import music from "../../assets/music.png"
import blogs from "../../assets/blogs.png"
import news from "../../assets/news.png"
import tom from "../../assets/tom.png"
import megan from "../../assets/megan.png"
import cameron from "../../assets/cameron.png"
import Mycontext from "../../utils/Mycontext"
import { useContext } from "react"
import user from "../../assets/user.jpeg"

function Sidebar(){
    const {value,theme}=useContext(Mycontext)
    return(
        <div className={`sidebar ${value ? "":"small-sidebar"} ${theme}` }>
            <div className="shortcut-links">
                <div className="side-link">
                    <img src={home} alt="" /><p>Home</p>
                </div>
                <div className="side-link">
                    <img src={game_icon} alt="" /><p>Gaming</p>
                </div>
                <div className="side-link">
                    <img src={automobile} alt="" /><p>Automobile</p>
                </div>
                <div className="side-link">
                    <img src={sports} alt="" /><p>Sports</p>
                </div>
                <div className="side-link">
                    <img src={entertainment} alt="" /><p>Entertainment</p>
                </div>
                <div className="side-link">
                    <img src={tech} alt="" /><p>Technology</p>
                </div>
                <div className="side-link">
                    <img src={music} alt="" /><p>Music</p>
                </div>
                <div className="side-link">
                    <img src={blogs} alt="" /><p>Blogs</p>
                </div>
                <div className="side-link">
                    <img src={news} alt="" /><p>News</p>
                </div>
            </div>
            <hr />
            
        <div className="subscribed-list">
            <h3>Subscribed</h3>
            <div className="side-link">
                <img src={user} alt="" /><p>javascript</p>
              </div>  
              <div className="side-link">
                <img src={user} alt="" /><p>html</p>
                </div>
                <div className="side-link">
                <img src={tom} alt="" /> <p>machhine learning</p>
                </div>
                <div className="side-link">
                <img src={megan} alt="" /><p>soccer</p>
                </div>
                <div className="side-link">
                <img src={cameron} alt="" /><p>Media</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;