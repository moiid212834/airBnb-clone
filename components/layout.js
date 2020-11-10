import Link from 'next/link'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default class Layout extends React.Component {
  componentDidMount() {
    console.log('mount');
  }
  componentWillUnmount() {
    console.log('unmount');
  }
  render() {
    const { children, title = 'Airbnb | Clone' } = this.props;
    return (
      <div>
        
        <Head>
          <title>{ title }</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>

        <Header/>

        { children }

        <Footer/>
        
      </div>
    );
  }
}