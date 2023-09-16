import Image from "next/image";
import classes from "./Home.module.css";
import Pic from "../../public/images/Pratik.jpeg";
import Head from "next/head";
import Link from "next/link";
const Home=()=>{


    return <div className={classes.bg}>
    <Head>
        <title>Home</title>
      
      </Head>
    <div className={classes.portfolio}>
    <Image className={classes.profile} src={Pic} alt="Pratik"/>
        <div className={classes.about}>
            <h1>Hi, I'm Pratik Nandan</h1>
            <p>Web Developer</p>
            <p>Reg. No - 20223183</p>
            <Link href="https://instagram.com/pratik.nandan.50?igshid=MzNlNGNkZWQ4Mg=="><button className={classes.button}>Follow</button></Link>
            
        </div>
        
        
        
        
    </div>
    
    </div>
    
};

export default Home;