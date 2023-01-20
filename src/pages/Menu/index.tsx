import styles from "./Menu.module.scss";
import logo from "assets/images/logo.png";

export default function Menu() {
   return (
      <main>
         <nav className={styles.menu}>
            <img src={logo} alt="Logo" height="100px" />
         </nav>
         <header className={styles.header}>
            <div className={styles.header__text}>

            </div>
         </header>
      </main>
   );
}
