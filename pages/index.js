import Head from 'next/head'
import {useRouter} from 'next/router'

export default ()=> {
    return(
        <div className="w-100 d-flex flex-row justify-content-center container align-items-center" style={{"minHeight":"100vh"}}>
            <div className="container-fluid p-5 shadow border border-aqua text-center rounded">
            <h1>Coming <span className="text-theme">Soon</span></h1>
            <h6 className="text-theme">Booking App</h6>
            <br/><br/>
            <h5>
                Developed By
                <span className="text-theme ml-3">Moeed Ahmed</span>
            </h5>
            </div>
        </div>
    )
}
