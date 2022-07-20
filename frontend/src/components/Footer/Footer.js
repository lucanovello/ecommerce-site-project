import footerStyle from './Footer.module.css';
import {
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiInstagramLine,
  RiGithubFill,
  RiGithubLine,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className={footerStyle.footerContainer}>
      <div className={footerStyle.footerLinksContainer}>
        <div className={footerStyle.footerLogo}>
          <Link to="/">{'Logo'}</Link>
        </div>
        <Link to="/" className={footerStyle.footerLinksTitle}>
          {'Links'}
        </Link>
        <div className={footerStyle.footerAbout}>
          <p>
            Sit amet mauris commodo quis imperdiet massa tincidunt nunc
            pulvinar. Et ligula ullamcorper malesuada proin libero nunc
            consequat interdum varius. Accumsan tortor posuere ac ut consequat
            semper. Velit dignissim sodales ut eu sem integer vitae.
          </p>
          <p>
            Odio morbi quis commodo odio aenean sed adipiscing. Tempor orci eu
            lobortis elementum nibh. Sit amet venenatis urna cursus eget nunc
            scelerisque viverra. Non pulvinar neque laoreet suspendisse interdum
            consectetur libero id faucibus.
          </p>
        </div>
        <div className={footerStyle.footerLinksList}>
          <ul>
            <li>
              <Link to="/">Featured</Link>
            </li>
            <li>
              <Link to="/">Best Sellers</Link>
            </li>
            <li>
              <Link to="/">New Arrivals</Link>
            </li>
            <li>
              <Link to="/">Trending</Link>
            </li>
            <li>
              <Link to="/">Artists</Link>
            </li>
            <li>
              <Link to="/">Genres</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={footerStyle.footerCopyright}>
        <p className={footerStyle.footerCopyrightText}>
          {' '}
          Copyright &copy; {year}
          {' | '}
          <span>Luca Novello</span>
          {' | '}All rights Reserved
        </p>
        <p className={footerStyle.footerCopyrightSocial}>
          {' '}
          <RiFacebookFill
            className={`${footerStyle.footerCopyrightSocialLink} ${footerStyle.footerCopyrightSocialFacebook}`}
          />
          <RiTwitterFill
            className={`${footerStyle.footerCopyrightSocialLink} ${footerStyle.footerCopyrightSocialTwitter}`}
          />
          <RiInstagramLine
            className={`${footerStyle.footerCopyrightSocialLink} ${footerStyle.footerCopyrightSocialInstagram}`}
          />
          <RiLinkedinFill
            className={`${footerStyle.footerCopyrightSocialLink} ${footerStyle.footerCopyrightSocialLinkedin}`}
          />
          <RiGithubFill
            className={`${footerStyle.footerCopyrightSocialLink} ${footerStyle.footerCopyrightSocialGithub}`}
          />
        </p>
      </div>
    </div>
  );
};

export default Footer;
