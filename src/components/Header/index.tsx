import Logo from '../../assets/icons/Logo Imagine.svg';
import HomeIcon from '../../assets/icons/Home Icon.svg';
import ChatIcon from '../../assets/icons/Chat Icon.svg';
import SettingsIcon from '../../assets/icons/Settings Icon.svg';
import UserPic from '../../assets/pictures/Userpic.png';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <img src={Logo} className={styles.header__logo} alt="Logo" />
        </div>
        <nav className={styles.header__navigate}>
          <ul className={styles.header__icons}>
            <li>
              <button className={styles.header__icon} onClick={(e) => e.preventDefault}>
                <img src={HomeIcon} alt="Home" />
              </button>
            </li>
            <li className={styles.chat_active}>
              <button className={styles.header__icon} onClick={(e) => e.preventDefault}>
                <img src={ChatIcon} alt="Chat" />
              </button>
            </li>
            <li>
              <button className={styles.header__icon} onClick={(e) => e.preventDefault}>
                <img src={SettingsIcon} alt="Settings" />
              </button>
            </li>
            <li>
              <button className={styles.header__icon} onClick={(e) => e.preventDefault}>
                <img src={UserPic} alt="Account" />
              </button>
            </li>
            <li>
              <select>
                <option value="ENG">ENG</option>
                <option value="RU">RU</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
