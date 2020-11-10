
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
                <li><a href="/d/howairbnbworks" class="_o06542u">How Airbnb works</a></li>
                <li><a href="/press/news" class="_o06542u">Newsroom</a></li>
                <li><a href="/plus" class="_o06542u">Airbnb Plus</a></li>
                <li><a href="/luxury" class="_o06542u">Airbnb Luxe</a></li>
                <li><a rel="noopener noreferrer" target="_blank" href="https://www.hoteltonight.com/?utm_source_name=Airbnb&amp;utm_campaign_name=Dr_Us_Desktop_Airbnb_Footer" class="_o06542u">HotelTonight</a></li>
                <li><a href="/work?s=footer" class="_o06542u">Airbnb for Work</a></li>
                <li><a href="/d/olympics" class="_o06542u">Olympics</a></li>
                <li><a href="/careers" class="_o06542u">Careers</a></li>
              </ul>
            </div>
            <div className="col-md-3">
                <ul className="list-unstyled footer-menu">
                    <li className="mb-3 font-weight-bolder">COMMUNITY</li>
                    <li><a href="/against-discrimination" class="_o06542u">Against Discrimination</a></li>
                    <li><a href="/accessibility" class="_o06542u">Accessibility</a></li>
                    <li><a href="/associates?from=footer" class="_o06542u">Airbnb Associates</a></li>
                    <li><a href="/d/covid19relief" class="_o06542u">Frontline Stays</a></li>
                    <li><a href="/invite?r=6" class="_o06542u">Invite friends</a></li>
                    <li><a href="/gift-cards" class="_o06542u">Gift cards</a></li>
                </ul>
            </div>
            <div className="col-md-3">
                <ul className="list-unstyled footer-menu">
                    <li className="mb-3 font-weight-bolder">HOST</li>
                    <li class="_wmuyow"><a href="/host/homes?from_footer=1" class="_o06542u">Host your home</a></li>
                    <li class="_wmuyow"><a href="/d/onlinehost" class="_o06542u">Host an Online Experience</a></li>
                    <li class="_wmuyow"><a href="/host/experiences" class="_o06542u">Host an Experience</a></li>
                    <li class="_wmuyow"><a href="/help/responsible-hosting" class="_o06542u">Responsible hosting</a></li>
                    <li class="_wmuyow"><a href="/openhomes?from_footer=1" class="_o06542u">Open Homes</a></li>
                    <li class="_wmuyow"><a href="/resources" class="_o06542u">Resource Center</a></li>
                    <li class="_wmuyow"><a href="/help/community?s=footer" class="_o06542u">Community Center</a></li>
                </ul>
            </div>
            <div className="col-md-3">
              <ul className="list-unstyled footer-menu">
                <li className="mb-3 font-weight-bolder">SUPPORT</li>
                <li class="_wmuyow"><a href="/d/covidsafety" class="_o06542u">Our COVID-19 Response</a></li>
                <li class="_wmuyow"><a href="/help?from=footer" class="_o06542u">Help Center</a></li>
                <li class="_wmuyow"><a href="/help/article/2701/extenuating-circumstances-policy-and-the-coronavirus-covid19" class="_o06542u">Cancellation options</a></li>
                <li class="_wmuyow"><a href="/neighbors" class="_o06542u">Neighborhood Support</a></li>
                <li class="_wmuyow"><a href="/trust" class="_o06542u">Trust &amp; Safety</a></li>
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
