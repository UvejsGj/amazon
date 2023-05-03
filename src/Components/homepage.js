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
import led from "../Images/led.jpg"
import cas from "../Images/case.jpg"
import dino from "../Images/dino.jpg"
import plane from "../Images/plane.jpg"
import bag from "../Images/bags.jpg"
import sink from "../Images/water.jpg"
import watch from "../Images/watch.jpg"
import pipe from "../Images/pipe.jpg"
import nail from "../Images/gozhd.jpg"  
import asus from "../Images/asus.jpg"
import cpu from "../Images/cpu.jpg"
import ram from "../Images/ram.jpg"
import ssd from "../Images/ssd.jpg"
import gpu from "../Images/gpu.jpg"
import cooler from "../Images/cooler.jpg"
import green from "../Images/green.jpg"
import purple from "../Images/purple.jpg"
import mast from "../Images/mast.jpg"
import shampoo from "../Images/shampoo.jpg"
import { BsGlobe2 } from "react-icons/bs"
import { BsCurrencyEuro } from "react-icons/bs"
import { GiUsaFlag } from "react-icons/gi"

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
            <h1 className="freq"> Frequently repurchased in Home </h1>
                <div> <img className="img" src={dollap} /> </div>
                <div> <img className="img" src={led} /> </div>
                <div> <img className="img" src={dollap} /> </div>
                <div> <img className="img" src={led} /> </div>
                <div> <img className="img" src={dollap} /> </div>
                <div> <img className="img" src={led} /> </div>
        </div>

        <div className="grid3">
            <h1 className="inter"> International top sellers in Home </h1>
                <div> <img className="img1" src={cas} /> </div>
                <div> <img className="img1" src={dino} /> </div>
                <div> <img className="img1" src={cas} /> </div>
                <div> <img className="img1" src={dino} /> </div>
                <div> <img className="img1" src={cas} /> </div>
                <div> <img className="img1" src={dino} /> </div>
        </div>

        <div className="grid4">
            <div className="plane"> <h1 className="hplane"> Kids Shop </h1> <img className="planeimg" src={plane} /></div>
            <div className="bag"> <h1 className="hbag"> Frequently repurchased in <br/> Drugstore </h1> <img className="bagimg" src={bag} /> </div>
            <div className="sink"> <h1 className="hsink"> Home refresh ideas </h1> <img className="sinkimg" src={sink} /></div>
            <div className="watch"> <h1 className="hwatch"> Shop activity trackers and <br/> smartwatches </h1> <img className="watchimg" src={watch} /></div>
        </div>

        <div className="grid5">
            <h1 className="top"> International top sellers in Home Improvement </h1>
                <div> <img className="img2" src={pipe} /> </div>
                <div> <img className="img2" src={nail} /> </div>
                <div> <img className="img2" src={pipe} /> </div>
                <div> <img className="img2" src={nail} /> </div>
                <div> <img className="img2" src={pipe} /> </div>
                <div> <img className="img2" src={nail} /> </div>
        </div>

        <div className="grid6">
            <h1 className="popular"> Popular products in PC internationally </h1>
                <div> <img className="img3" src={cpu} /> </div>
                <div> <img className="img3" src={asus} /> </div>
                <div> <img className="img3" src={cpu} /> </div>
                <div> <img className="img3" src={asus} /> </div>
                <div> <img className="img3" src={cpu} /> </div>
                <div> <img className="img3" src={asus} /> </div>
        </div>

        <div className="grid7">
            <div className="ram"> <h1 className="hram"> Ram Memory </h1> <img className="ramimg" src={ram} /></div>
            <div className="ssd"> <h1 className="hssd"> SSD M.2 Storage</h1> <img className="ssdimg" src={ssd} /> </div>
            <div className="cooler"> <h1 className="hcooler"> CPU Cooler </h1> <img className="coolerimg" src={cooler} /></div>
            <div className="gpu"> <h1 className="hgpu"> GPU - Nvidia </h1> <img className="gpuimg" src={gpu} /></div>
        </div>

        <div className="grid8">
            <h1 className="books"> Top Sellers in Books for you </h1>
                <div> <img className="img4" src={green} /> </div>
                <div> <img className="img4" src={purple} /> </div>
                <div> <img className="img4" src={green} /> </div>
                <div> <img className="img4" src={purple} /> </div>
                <div> <img className="img4" src={green} /> </div>
                <div> <img className="img4" src={purple} /> </div>
        </div>

        <div className="grid9">
            <h1 className="shampoo"> Popular products in Beauty internationally </h1>
                <div> <img className="img5" src={mast} /> </div>
                <div> <img className="img5" src={shampoo} /> </div>
                <div> <img className="img5" src={mast} /> </div>
                <div> <img className="img5" src={shampoo} /> </div>
                <div> <img className="img5" src={mast} /> </div>
                <div> <img className="img5" src={shampoo} /> </div>
        </div>

        <div className="grid10">
            <div className="plane"> <h1 className="hplane"> Kids Shop </h1> <img className="planeimg" src={plane} /></div>
            <div className="bag"> <h1 className="hbag"> Frequently repurchased in <br/> Drugstore </h1> <img className="bagimg" src={bag} /> </div>
            <div className="sink"> <h1 className="hsink"> Home refresh ideas </h1> <img className="sinkimg" src={sink} /></div>
            <div className="watch"> <h1 className="hwatch"> Shop activity trackers and <br/> smartwatches </h1> <img className="watchimg" src={watch} /></div>
        </div>

            <div className="above">
                <h3> Back to top </h3>
            </div>



        <div className="footer">
            <div className="get">
                <ul>
                    <li className="h1"> Get to Know Us </li>
                    <li> Careers </li>
                    <li> Blog </li>
                    <li> About Amazon </li>
                    <li> Investor Relations </li>
                    <li> Amazon Devices </li>
                    <li> Amazon Science </li> 
                </ul>
            </div>
            <div className="make">
                <ul>
                    <li className="h1"> Make Money with Us </li>
                    <li> Sell products on Amazon </li>
                    <li> Sell on Amazon Business </li>
                    <li> Sell apps on Amazon </li>
                    <li> Become an Affiliate </li>
                    <li> Advertise Your Products </li>
                    <li> Self-Publish with Us </li> 
                    <li> Host an Amazon Hub </li>
                    <li> › See More Make Money with Us </li>
                </ul>
            </div>
            <div className="amazon">
                <ul>
                    <li className="h1"> Amazon Payment Products </li>
                    <li> Amazon Business Card </li>
                    <li> Shop with Points </li>
                    <li> Reload Your Balance </li>
                    <li> Amazon Currency Converter </li>
                </ul>
            </div>
            <div className="amazon">
                <ul>
                    <li className="h1"> Amazon Payment Products </li>
                    <li> Amazon and COVID-19 </li>
                    <li> Your Account </li>
                    <li> Your Orders </li>
                    <li> Shipping Rates & Policies </li>
                    <li> Returns & Replacements </li>
                    <li> Manage Your Content and Devices </li>
                    <li> Amazon Assistant </li>
                    <li> Help </li>
                </ul>
            </div>

            <div className="belowfooter">
                <img className="amazonlogofooter" src={amazon} />
                <h3 className="globe"> <BsGlobe2/> English</h3>
                <h3 className="euro"> <BsCurrencyEuro/> EUR - Euro </h3>
                <h3 className="usa"> <GiUsaFlag/> United State </h3>
            </div>
        </div>

        
        </>
    )
}

export default HomePage;