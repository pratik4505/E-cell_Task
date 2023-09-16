import Link from 'next/link';

import classes from './Navigation.module.css';

function Navigation() {

  return (
    <header >
      <nav className={classes.navBar}>
        <ul>
          <li>
            <Link href='/Home'>Home</Link>
          </li>
          <li>
            <Link href='/'>Grid</Link>
          </li>
          <li>
            <Link href='https://www.linkedin.com/in/pratik-nandan-b57875276/'>LinkedIn</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
