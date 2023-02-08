import CollapseButton from "./CollapseButton";
import styles from "../styles/components/TargetServices.module.scss";

export default function TargetServices() {
  return (
    <div className={styles.sevgi__service}>
      <h2>Nuestros Servicios</h2>
      <div className={styles.service__buttons}>
        <div></div>
        <div className={styles.buttons__card}>
          <h4>Transporte</h4>
          <CollapseButton
            image="/autobus.png"
            text="Se presta el servicio de transporte por un costo adicional, el transporte puede ser a nivel urbano o intermunicipal de ser necesario."
          />
        </div>
        <div className={styles.buttons__card}>
          <h4>Wifi</h4>
          <CollapseButton
            image="/wifi.png"
            text="Hay conexión a internet Wi-Fi disponible en todo el establecimiento. Gratis."
          />
        </div>
        <div className={styles.buttons__card}>
          <h4>Parqueadero</h4>
          <CollapseButton
            image="/aparcamiento.png"
            text="Se presta el servicio de parqueadero con un costo adicional."
          />
        </div>
        <div className={styles.buttons__card}>
          <h4>Desayunos</h4>
          <CollapseButton
            image="/desayuno.png"
            text="Disfruta de un desayuno americano exquisito con tu familia en nuestro establecimiento."
          />
        </div>
        <div className={styles.buttons__card}>
          <h4>Habitaciones Familiares</h4>
          <CollapseButton
            image="/familia.png"
            text="Disfruta del calido alojamiento en nuestras habitaciones."
          />
        </div>
        <div className={styles.buttons__card}>
          <h4>Libre de Humo</h4>
          <CollapseButton
            image="/no-fumar.png"
            text="Disfruta de nuestros espacios libres de humo."
          />
        </div>
        <div className={styles.buttons__card}>
          <h4>Mascotas</h4>
          <CollapseButton
            image="/cat-dog.png"
            text="Las mascotas seran resividas previa confirmacion y por un cobro adicional."
          />
        </div>
      </div>
    </div>
  );
}
