import Head from 'next/head'
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faHamburger, faBars, faGlobe, faArrowDown, faAngleDown, faUserCircle } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { DatePicker, Menu, Dropdown, Button,InputNumber } from 'antd';
import LoginModal from './loginmodal'
import RegisterModal from './registermodal'
const { RangePicker } = DatePicker;
const menulang = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" >
          English
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          Spanish
        </a>
      </Menu.Item> 
    </Menu>
  );

  const menuuser = (
    <Menu>
      <Menu.Item>
          <RegisterModal></RegisterModal>
      </Menu.Item>
      <Menu.Item>
        <LoginModal></LoginModal>
      </Menu.Item>
      <hr/>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" >
          Host a Home
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" >
          Host an experience
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" >
          Help
        </a>
      </Menu.Item>
    </Menu>
  );
export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menutoggle: false,
        };
        this.props=props;
    }
    
    

    componentDidMount(){
    window.addEventListener("scroll", this.handleScroll);
    
    };

    componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    };

    handleScroll = () => {
        if (window.scrollY > 1) {
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
    
          <header >
            <nav style={{zIndex:"99999"}} className={this.props.transparent}>
               
               <div className="menu-icon" onClick={this.menuopen}>
                    <FontAwesomeIcon icon={faBars} style={{display:"block", float:"right"}}></FontAwesomeIcon>
               </div>
               
               
               <div className="menu d-flex flex-row justify-content-between flex-wrap" style={{zIndex:"999"}}>
               <div className="logo">
                  <a href="/en" className="text-light text-decoration-none">LOGO</a>
               </div>
                <ul className ={this.state.menutoggle? "showing":""}>
                    
                    <li><a href="/en/host">Become a Host</a></li>
                    <li><a href="#">
                        
                        <Dropdown overlay={menulang} placement="bottomCenter" arrow>
                            <Button><FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon><FontAwesomeIcon className="ml-1" icon={faAngleDown}></FontAwesomeIcon></Button>
                        </Dropdown>
                    </a></li>
                    <li><a href="#">
                        <Dropdown overlay={menuuser} placement="bottomCenter" arrow>
                            <Button><FontAwesomeIcon className="mr-1 text-black-50" icon={faBars} size="lg"></FontAwesomeIcon><FontAwesomeIcon className="text-black-50 ml-1" icon={faUserCircle}  size="lg"></FontAwesomeIcon></Button>
                        </Dropdown>
                    </a></li>
                </ul>
               </div>
            </nav>
         </header>
    
    )
    }
}
