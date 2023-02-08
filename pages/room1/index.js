/* eslint-disable react-hooks/rules-of-hooks */
import styles from "../../styles/pages/room.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  DotButton,
  PrevButton,
  NextButton,
} from "../../components/EmblaCarouselArrowsDotsButtons";
import { useCallback, useEffect, useState } from "react";
import Carousel from "../../components/Carousel";
import TargetServices from "../../components/TargetServices";

export default function room() {
  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <div className={styles.container}>
      <div className={styles.container__data}>
        <div className={styles.data__title}>
          <h1>Habitación Familiar</h1>
          <h2>Capacidad para 5 personas</h2>
          <p>
            Espectacular habitación con una capacidad de 5 personas, las cuales
            ocuparían una cama doble, una cama sencilla y un camarote, esta
            habitación es ideal para familias o grupos de amigos que viajan
            juntos, cuenta con dos baños compartidos.
          </p>
        </div>
        <div className="sandbox">
          <section className="sandbox__carousel">
            <Carousel />
          </section>
        </div>
      </div>
      <div className={styles.data__roomInfo}>
        <div className={styles.roomInfo__room}>
          <h2>En el baño encuentras:</h2>
          <p>Toallas</p>
          <p>Ducha de Agua Caliente</p>
          <p>Papel higienico</p>
          <p>Jabon de manos</p>
          <p>Espejos</p>
        </div>
        <div className={styles.roomInfo__room}>
          <h2>Equipamiento Habitación:</h2>
          <p> Ropa de Cama</p>
          <p>Servicio de despertador</p>
          <p>Toallas</p>
          <p>Artículos de aseo Gratis</p>
          <p>Recepción 24h</p>
        </div>
      </div>
      <TargetServices />
    </div>
  );
}
