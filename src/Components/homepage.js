import "./homepage.css"
import amazon from "../Images/amazonlogo.png";
import couch from "../Images/couch.jpg";
import { SlLocationPin } from "react-icons/sl";
import { SlMagnifier } from "react-icons/sl";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BiCartAdd } from "react-icons/bi"
import { GiHamburgerMenu } from "react-icons/gi"
import headset from "../Images/headset.jpg"
import glass from "../Images/glass.jpg"
import health from "../Images/health.jpg"
import dress from "../Images/dress.jpg"
import laptop from "../Images/laptop.jpg"
import electronics from "../Images/electronics.jpg"
import makeup from "../Images/makeup.jpg"
import dollap from "../Images/dollap.jpg"

function HomePage() {
    return(
        <>
        <div className="navbar">
            <img className="amazonlogo" src={amazon} />
            <h2 className="deliver"> <SlLocationPin/> Deliver to <br></br> Albania </h2>
            <input className="search" type="text" placeholder="Search Amazon" /> <SlMagnifier className="magnifier" color="black" size={30}/>
            <h4 className="eu"> US <AiOutlineCaretDown size={20}/> </h4>
            <h4 className="lists"> Hello, sign in <br></br> Account & Lists <AiOutlineCaretDown/> </h4>
            <h4 className="orders"> Return <br></br> & Orders </h4>
            <h4 className="cart"> <BiCartAdd size={40}/> Cart </h4>
        </div>

        <div className="undernavbar">
            <h5> <GiHamburgerMenu/> All </h5>
            <h5> Todays deals </h5>
            <h5> Customer Service </h5>
            <h5> Registry </h5>
            <h5> Gift Cards </h5>
            <h5> Sell </h5>
            <h4 className="shop"> Shop deals in Electronics </h4>
        </div>

        <div>
            <img className="couch" src={couch} />
        </div>

        <div className="grid">
            <div className="gaming"> <h1 className="h1g">Gaming accessories</h1>  <img className="headsetimg" src={headset}/></div>
            <div className="dining"> <h1 className="h1s">Refresh your space</h1> <img className="glassimg" src={glass} /> </div>
            <div className="health"> <h1 className="h1h"> Health & Personal Care </h1> <img className="healthimg" src={health} /> </div>
            <div className="signin"> <h1 className="h1i"> Sign in for the best experience </h1> <input className="button" value="Sign in securely" type="button"></input> </div>
            <div className="dress"> <h1 className="h1d"> Dresses </h1> <img className="dressimg" src={dress} /> </div>
            <div className="laptop"> <h1 className="h1l"> Shop by category </h1> <img className="laptopimg" src={laptop} /> </div>
            <div className="electronics"> <h1 className="h1e"> Electronics </h1>  <img className="electronicsimg" src={electronics} /> </div>
            <div className="makeup"> <h1 className="h1b"> Beauty Picks </h1> <img className="makeupimg" src={makeup} /> </div>
        </div>

        <div className="grid2">
                <div> <img src={dollap} /> </div>
                <div> <img src={dollap} /> </div>
                <div> <img src={dollap} /> </div>
                <div> <img src={dollap} /> </div>
        </div>

        </>
    )
}

export default HomePage;