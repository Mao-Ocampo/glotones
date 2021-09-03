import { FirstRecommended } from "../../components/FirstRecommended";
import { SecondRecommended } from "../../components/SecondRecommended";
import "./firstSection.css";

export const FirstSection = () => {
  return (
    <section id="recommended-section" class="main-recommended-container">
      <div className="main-recommended-container-title">
        <h2>Glotones te Recomienda!</h2>
      </div>
      <FirstRecommended />
      <SecondRecommended />
    </section>
  );
};
