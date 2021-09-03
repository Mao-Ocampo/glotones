import './footer.css';
import Icon from '../../assets/img/logo/icon.png';
import Avatar from '../../assets/img/icons/avatar.svg';
import Copy from '../../assets/img/icons/copy.svg';
import Heart from '../../assets/img/icons/heart.svg';
import Settings from '../../assets/img/icons/settings-1.svg';

export const Footer = () => {
    return (
    <section className="container-footer">
        <footer>
            <section className="footer-menu">
                <ul className="footer-menu-container">
                    <div className="footer-menu-button"><a href="#"><img src= { Icon } alt="Nuevo Pedido"/></a></div>
                    <li><a href="#"><img src={ Avatar } alt="Mi perfil"/><span>Mi perfil</span></a></li>
                    <li><a href="#history-table"><img src={ Copy } alt="Historial de Pedidos"/><span>Historial</span></a></li>
                    <li><a href="#"><span className="footer-menu-pedido">Pedido</span></a></li>
                    <li><a href="#recommended-section"><img src={ Heart } alt="Favoritos"/><span>Favoritos</span></a></li>
                    <li><a href="#"><img src={ Settings } alt="Más Ajustes"/><span>Más</span></a></li>
                </ul>
            </section>
        </footer>
    </section>
    )
}