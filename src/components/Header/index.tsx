import styles from './styles.module.scss'

export function Header() {
    return(
        <header className={styles.headerContainer}>
            <div className="logo">
            <img src="/logo.svg" alt="logo" />
            </div>

            <div className="menu">
            <a href="#">
                Home
            </a>
            <a href="#">
                Adidas
            </a>
            <a href="#">
                Jordan
            </a>
            <a href="#">
                Balenciaga
            </a>
            <a href="#">
                Nike
            </a>
            <a href="#">
                <img src="/wpp.svg" alt="wpp" />
            </a>
            <a href="#">
                <img src="/insta.svg" alt="instagram" />
            </a>
            <a href="#">
                <img src="/face.svg" alt="facebook" />
            </a>
            </div>
        </header>
    );
}