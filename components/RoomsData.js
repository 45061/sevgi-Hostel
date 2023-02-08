import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.scss";

export default function RoomsData() {
  return (
    <div className={styles.thirdBox__rooms}>
      <Link href="/room1">
        <div className={styles.rooms__bookingRoom}>
          <Image
            className={styles.bookingRoom__Image}
            src="/101.jpg"
            alt="first Room"
            width={400}
            height={320}
          />
          <h3>Habitación Familiar</h3>
          <h4>Capacidad 5 Personas</h4>
        </div>
      </Link>
      <div className={styles.rooms__bookingRoom}>
        <Image
          className={styles.bookingRoom__Image}
          src="/201.jpg"
          alt="second Room"
          width={400}
          height={320}
        />
        <h3>Habitación Triple Baño Privado</h3>
        <h4>Capacidad 3 Personas</h4>
      </div>
      <div className={styles.rooms__bookingRoom}>
        <Image
          className={styles.bookingRoom__Image}
          src="/202.jpg"
          alt="first Room"
          width={400}
          height={320}
        />
        <h3>Habitación Triple Baño Compartido</h3>
        <h4>Capacidad 3 Personas</h4>
      </div>
    </div>
  );
}
