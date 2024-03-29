import '../styles/global.css'
import '../styles/bootstrap.min.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import "antd/dist/antd.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}