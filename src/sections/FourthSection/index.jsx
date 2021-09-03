import './FourthSection.css';
import Twitter from '../../assets/img/icons/013-twitter.svg';
import Instagram from '../../assets/img/icons/011-instagram.svg';
import Youtube from '../../assets/img/icons/008-youtube.svg';
import Facebook from '../../assets/img/icons/001-facebook.svg';
import Copyright from '../../assets/img/icons/copyright.png';

export const FourthSection = () => {
    return (
    <div className="footer">
        <div className="footer-logo-glotones"></div>
        <section className="footer-social-media">
            <img src={ Twitter } alt="Twitter"/>
            <img src={ Instagram } alt="Instagram"/>
            <img src={ Youtube } alt="Youtube"/>
            <img src={ Facebook } alt="Facebook"/>
        </section>
        <section>
            <div>
                <p>No se reservan los derechos por falta de presupuesto <span><img src={ Copyright } alt="Copyright"/></span></p>
            </div>
        </section>
    </div>
    )
}