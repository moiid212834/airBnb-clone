import {useRouter} from 'next/router'
import Layout from '../../components/layout'

export default ()=> {
  const router = useRouter();
  return (
    <Layout>
      <div className="w-100" style={{backgroundImage:"url('/images/landing.jpg')",height:"600px",backgroundSize:"cover",backgroundPosition:"center center"}}>
      <div className="navpadding"></div>
      
      <div>
        <ul className="menu2">
          <li><a href="#">Places to stay</a></li>
            <li><a href="#">Expeirences</a></li>
            <li><a href="#">Online Expeirences</a></li>
        </ul>
      </div>
      <div className="container">
        <div className="bg-white rounded shadow text-center d-flex flex-row justify-content-between">
          <div className="btn btn-light btn-block p-3 m-0">Hello</div>
          <div className="btn btn-light btn-block p-3 m-0 border-left">Hello</div>
          <div className="btn btn-light btn-block p-3 m-0 border-left">Hello</div>
          <div className="btn btn-light btn-block p-3 m-0 border-left">Hello</div>
        </div>
      </div>
      <div className="p-5 ">
        <div className="w-100 display-1 font-weight-bolder text-white">
          Go <br/>
          Near
        </div>
        <div className="btn btn-sm btn-light m-2">Explore Nearby Locations</div>
      </div>
      </div>
      <div className={'container'} style={{height:"400px"}}>
      
      </div>
    </Layout>
  )
}
