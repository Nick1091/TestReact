import Logo from '../../assets/icons/Logo Imagine_white.svg';
import InstIcon from '../../assets/icons/Instagram.svg';
import FacebookIcon from '../../assets/icons/Facebook.svg';
import WhatsAppIcon from '../../assets/icons/WhatsApp.svg';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <img src={Logo} className={styles.footer__logo} alt="Logo" />
        <a href="!#" onClick={(e) => e.preventDefault()}>
          Contract offer
        </a>
        <a href="!#" onClick={(e) => e.preventDefault()}>
          Card payment rules
        </a>
        <a href="!#" onClick={(e) => e.preventDefault()}>
          imagine.com
        </a>
        <div className={styles.footer__info}>
          <a href="!#" onClick={(e) => e.preventDefault()}>
            info@imagine.com
          </a>
          <nav>
            <ul>
              <li>
                <a href="!#" onClick={(e) => e.preventDefault()}>
                  <img src={FacebookIcon} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="!#" onClick={(e) => e.preventDefault()}>
                  <img src={InstIcon} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="!#" onClick={(e) => e.preventDefault()}>
                  <img src={WhatsAppIcon} alt="WhatsApp" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p>© IMAGINE 2021. All rights Reserved</p>
      </div>
    </footer>
  );
}
