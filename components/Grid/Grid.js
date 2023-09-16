import classes from "./Grid.module.css";
import Box3 from "./Box3";
import ecell from "../../public/images/ecell_logo.jpeg";
import Image from "next/image";
const Grid = () => {
  return (
    <div className={classes.grid}>
      <div className={classes.box1} />
      <div className={classes.box2}>
        <Image
          
          style={{ width: '100%', height: 'auto' }}
          src={ecell}
          alt="E-Cell MNNIT"
        />
      </div>
      <Box3 />
    </div>
  );
};

export default Grid;
