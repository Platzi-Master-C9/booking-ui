import { Close } from "../../assets/Close"
import styles from "./NotificationCard.module.scss";

export const NotificationCard = () => {
	return (
		<>
			<div className={styles.card}>
				<div className={styles.card__avatar}>
					{/* <img src="" alt="BookingSystem Logo" /> */}
					BS
				</div>
				<div className={styles.card__close}>
					<Close />
				</div>
				<div className={styles.card__content}>
					<div className={styles.card__text}>
						Invita a un amigo y consigue $50,000 COP
					</div>
					<div className={styles.card__date}>
						1 de febrero de 2022
					</div>
				</div>
			</div>
		</>
	);
};
