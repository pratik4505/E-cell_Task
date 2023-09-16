import Navigation from './Navigation.js';

const Layout=(props)=>{
    return (
        <div>
          <Navigation />
          <main >{props.children}</main>
        </div>
      );
}

export default Layout;