import footerStyle from './Footer.module.css';
import { IconName } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className={footerStyle.footerContainer}>
      <div className={footerStyle.footerLinksContainer}>
        <div className={footerStyle.footerLinksColumnContainer}>
          <ul>
            <h3 className={footerStyle.footerLinksTitle}>Featured</h3>
            <li>Girl With A Pearl Earring</li>
            <li>The Desperate Man</li>
            <li>Mona Lisa</li>
            <li>The Great Wave Off Kanagawa</li>
            <li>The Kiss</li>
          </ul>
        </div>
        <div className={footerStyle.footerLinksColumnContainer}>
          <ul>
            <h3 className={footerStyle.footerLinksTitle}>Best Sellers</h3>
            <li>The Great Wave Off Kanagawa</li>
            <li>The Desperate Man</li>
            <li>The Kiss</li>
            <li>Jeanne Hebuterne With Hat And Necklace</li>
            <li>Mona Lisa</li>
          </ul>
        </div>
        <div className={footerStyle.footerLinksColumnContainer}>
          <ul>
            <h3 className={footerStyle.footerLinksTitle}>Artists</h3>
            <li>Leonardo Da Vinci</li>
            <li>Gustave Courbet</li>
            <li>Jan Vermeer</li>
            <li>Gustav Klimt</li>
            <li>Katsushika Hokusai</li>
          </ul>
        </div>
      </div>
      <div className={footerStyle.footerCopyright}>
        Copyright &copy; {new Date().getFullYear()}
        {' | Luca Novello | All rights Reserved'}
      </div>
    </div>
  );
};

export default Footer;
