import styles from "../../styles/pages/about.module.scss";
import TargetServices from "../../components/TargetServices";

export default function userProfile() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__data}>
          <div className={styles.data__dataInitial}>
            <h1>Bienvenido</h1>
            <h1>Conoce quienes somos nosotros</h1>
          </div>
          <div className={styles.data__dataDescription}>
            <div className={styles.dataDescription__mision}>
              <h2>Nuestra Misión</h2>
              <p>
                Ofrecer un servicio de calidad y confort en el servicio de
                alojamiento, cumpliendo con las normas vigentes de calidad,
                dándonos a conocer por nuestros servicios y atención única en
                nuestra localidad, logrando así garantizar el bienestar físico y
                mental de nuestros usuarios y colaboradores.
              </p>
            </div>
            <div className={styles.dataDescription__vision}>
              <h2>Nuestra Visión</h2>
              <p>
                Posicionarnos en el 2024 como la mejor opción en servicios de
                alojamiento a nuestros usuarios, a través de un proceso de
                mejora continua al igual que, ser reconocidos por el
                profesionalismo, amabilidad y calidad humana que siempre nos ha
                caracterizado.
              </p>
            </div>
            <div className={styles.dataDescription__caracteristic}>
              <h2>¿Qué nos diferencia?</h2>
              <ul>
                <li>
                  <p>Calidad del Servicio.</p>
                </li>
                <li>
                  <p>Amabilidad en la atención.</p>
                </li>
                <li>
                  <p>
                    Ubicación cercanía al aeropuerto y vías principales de la
                    ciudad
                  </p>
                </li>
                <li>
                  <p>Desayuno Gratuito, Bebidas Calientes.</p>
                </li>
                <li>
                  <p>
                    Contamos con personal calificado para cada uno de nuestros
                    servicios.
                  </p>
                </li>
                <li>
                  <p>Servicios de primera a precio justo</p>
                </li>
                <li>
                  <p>
                    Muchos mas servicios para ser de su estadía una grata
                    experiencia.
                  </p>
                </li>
              </ul>
            </div>
            <TargetServices />
          </div>
        </div>
      </div>
    </>
  );
}
