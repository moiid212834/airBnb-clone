import Head from 'next/head'
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faHamburger, faBars, faGlobe, faArrowDown, faAngleDown, faUserCircle } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menutoggle: false,
        };
    }
 

    componentDidMount(){
    window.addEventListener("scroll", this.handleScroll);
    
    };

    componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    };

    handleScroll = () => {
        if (window.scrollY > 20) {
            document.querySelector("nav").className = "black";
        } else {
            document.querySelector("nav").className = "";
        }
    };

    menuopen = () => {
        if(this.state.menutoggle){
            this.setState({menutoggle:false})
        }else{
            this.setState({menutoggle:true})
        }
    }
    render(){
    return (
      <div>
          <header>
            <nav>
               
               <div className="menu-icon" onClick={this.menuopen}>
                    <FontAwesomeIcon icon={faBars} style={{display:"block", float:"right"}}></FontAwesomeIcon>
               </div>
               
               
               <div className="menu d-flex flex-row justify-content-between flex-wrap">
               <div className="logo">
                  LOGO
               </div>
                <ul className ={this.state.menutoggle? "showing":""}>
                    
                    <li><a href="#">Become a Host</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon><FontAwesomeIcon className="ml-1" icon={faAngleDown}></FontAwesomeIcon></a></li>
                    <li><a href="#"><span className="p-3 bg-white shadow " style={{borderRadius:"25px"}}><FontAwesomeIcon className="mr-1 text-black-50" icon={faBars} size="lg"></FontAwesomeIcon><FontAwesomeIcon className="text-black-50 ml-1" icon={faUserCircle}  size="lg"></FontAwesomeIcon></span></a></li>
                </ul>
               </div>
            </nav>
         </header>
      </div>
    )
    }
}
