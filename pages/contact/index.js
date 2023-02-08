import TargetServices from "../../components/TargetServices";
import styles from "../../styles/pages/contact.module.scss";

export default function contact() {
  return (
    <div className={styles.container}>
      <div className={styles.container__data}>
        <h1>Contacto</h1>
        <div className={styles.data__contact}>
          <div className={styles.contac__loc}>
            <h2>Dirección:</h2>
            <p>Carrera 80D # 22 - 72</p>
            <h2>Barrio:</h2>
            <p>Modelia</p>
            <h2>Horario:</h2>
            <p>Siempre abierto</p>
            <h2>Bogotá - Colombia</h2>
          </div>
          <div className={styles.contac__info}>
            <h2>Telefono y WhatsApp:</h2>
            <p> +57 305 801 0485</p>
            <h2>Email</h2>
            <p>sevgisensehostel@gmail.com</p>
          </div>
        </div>
        <TargetServices />
        <h1>Ubicación</h1>
        <div className={styles.data__loc}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d417.98991002375607!2d-74.12611899810035!3d4.6629630988859905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9dedd22edd69%3A0xe2461ba33dbf4b27!2sSevgi%20Sense!5e0!3m2!1ses!2sco!4v1673229127101!5m2!1ses!2sco"
            width="600"
            height="450"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
