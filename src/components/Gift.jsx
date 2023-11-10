import { Player } from '@lottiefiles/react-lottie-player';
import styles from "../styles/Gift.module.css";
import Animation from "../animation.json";

export default function Gift() {
    return (
        <>
            <div className={styles.gift}>
                <div className={styles.lid}></div>
                <div className={styles.body}></div>
                <div className={styles.ribbon1}></div>
                <div className={styles.ribbon2}></div>
            </div>
            <Player
                src={Animation}
                className="player"
                loop
                autoplay
                style={{ height: '190px', width: '190px' }}
            />
        </>
    );
}
