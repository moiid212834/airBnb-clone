
import React from "react";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menutoggle: false,
        };
    }
 

    render(){
    return (
    
        <footer style={{background:"#F7F7F7"}} className="p-5 border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <ul className="list-unstyled footer-menu">
                <li className="mb-3 font-weight-bolder">ABOUT</li>
                <li><a href="/d/howairbnbworks" >How Airbnb works</a></li>
                <li><a href="/press/news" >Newsroom</a></li>
                <li><a href="/plus" >Airbnb Plus</a></li>
                <li><a href="/luxury" >Airbnb Luxe</a></li>
                <li><a rel="noopener noreferrer" target="_blank" href="https://www.hoteltonight.com/?utm_source_name=Airbnb&amp;utm_campaign_name=Dr_Us_Desktop_Airbnb_Footer" >HotelTonight</a></li>
                <li><a href="/work?s=footer" >Airbnb for Work</a></li>
                <li><a href="/d/olympics" >Olympics</a></li>
                <li><a href="/careers" >Careers</a></li>
              </ul>
            </div>
            <div className="col-md-3">
                <ul className="list-unstyled footer-menu">
                    <li className="mb-3 font-weight-bolder">COMMUNITY</li>
                    <li><a href="/against-discrimination" >Against Discrimination</a></li>
                    <li><a href="/accessibility" >Accessibility</a></li>
                    <li><a href="/associates?from=footer" >Airbnb Associates</a></li>
                    <li><a href="/d/covid19relief" >Frontline Stays</a></li>
                    <li><a href="/invite?r=6" >Invite friends</a></li>
                    <li><a href="/gift-cards" >Gift cards</a></li>
                </ul>
            </div>
            <div className="col-md-3">
                <ul className="list-unstyled footer-menu">
                    <li className="mb-3 font-weight-bolder">HOST</li>
                    <li ><a href="/host/homes?from_footer=1" >Host your home</a></li>
                    <li ><a href="/d/onlinehost" >Host an Online Experience</a></li>
                    <li ><a href="/host/experiences" >Host an Experience</a></li>
                    <li ><a href="/help/responsible-hosting" >Responsible hosting</a></li>
                    <li ><a href="/openhomes?from_footer=1" >Open Homes</a></li>
                    <li ><a href="/resources" >Resource Center</a></li>
                    <li ><a href="/help/community?s=footer" >Community Center</a></li>
                </ul>
            </div>
            <div className="col-md-3">
              <ul className="list-unstyled footer-menu">
                <li className="mb-3 font-weight-bolder">SUPPORT</li>
                <li ><a href="/d/covidsafety" >Our COVID-19 Response</a></li>
                <li ><a href="/help?from=footer" >Help Center</a></li>
                <li ><a href="/help/article/2701/extenuating-circumstances-policy-and-the-coronavirus-covid19" >Cancellation options</a></li>
                <li ><a href="/neighbors" >Neighborhood Support</a></li>
                <li ><a href="/trust" >Trust &amp; Safety</a></li>
              </ul>
            </div>
            
          </div>
          <hr className="my-2"/>
          <div className="my-3">
              &copy; ABCLONE, inc 2020. All rights reserved.&nbsp;&nbsp;|&nbsp;&nbsp;<a href="/privacy">Privacy</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="/terms">Terms</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="/legal">Leagal</a> 
              
          </div>
        </div>
        
      </footer>
    
    )
    }
}
