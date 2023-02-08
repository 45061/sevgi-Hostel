import styles from "../styles/components/DrawerNav.module.scss";
import MenuNavbar from "./MenuNavbar";
import RoomsData from "./RoomsData";
import Link from "next/link";

export default function DrawerNav() {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Link href="/" prefetch={false}>
          <h2>Home</h2>
        </Link>
        <Link href="/about" prefetch={false}>
          <h2>Nosotros</h2>
        </Link>
        <Link href="/contact" prefetch={false}>
          <h2>Contacto</h2>
        </Link>
        <MenuNavbar />
      </div>
      <div className={styles.rooms}>
        <RoomsData />
      </div>
    </div>
  );
}
