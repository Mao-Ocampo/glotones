import { DeliveryThirdSection } from "../../components/DeliveryThirdSection";
import { LogoThirdSection } from "../../components/LogoThirdSection";
import "./thirdSection.css";

export const ThirdSection = () => {
  return (
    <section className="main-info-container">
      <LogoThirdSection />
      <DeliveryThirdSection />
      <div>
        <h1 className="main-info-banner-lottery-title">Sorteo Espectacular</h1>
        <div className="main-info-banner-lottery">
          <p>¡Con tus pedidos una hermosa KTM Duke 390 puede ser tuya!</p>
        </div>
      </div>
    </section>
  );
};
