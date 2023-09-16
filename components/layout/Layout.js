import Navigation from './Navigation.js';
import classes from "./layout.module.css";
const Layout=(props)=>{
    return (
        <div>
          <Navigation />
          <main >{props.children}</main>
        </div>
      );
}

export default Layout;