import styles from './styles.module.scss';

export function Tela1() {
    return (
        <div className={styles.tela1Container}>
            <div className={styles.Banner}>
                
                <span>
                    Único destino de tênis do Brasil!
                    jordan que pertence a você,
                    você encomenda aqui!!
                    Faça a sua encomenda por nossas redes sociais
                </span>
            </div>
            <div className={styles.tenis}>
                <img src="/tenis1.svg" alt="" />
                <img src="/tenis2.svg" alt="" />
                <img src="/tenis3.svg" alt="" />
            </div>

        </div>
    )
}