/** @format */

import styles from "../../../Styles/Home/BenefitsGame/BenefitsGame.module.scss";
import ContainerSection from "../../Container";
import GeneralItem from "./GeneralItem";
import ItemLeft from "./ItemLeft";
import ItemRigth from "./ItemRight";

function BenefitsGame() {
	return (
		<div className={styles.benefitsGame}>
			<div className={styles.benefitsGame_title}>
				<div className={styles.title_title}>Play to earn</div>
				<div className={styles.title_sub}>Many ways to earn tokens and NFTs</div>
			</div>
			<ContainerSection>
				<div className={styles.benefitsGame_row}>
					<div className={styles.row_column}>
						<GeneralItem styles={styles} />
					</div>
					<div className={styles.row_column}>
						<ItemLeft styles={styles} />
					</div>
					<div className={styles.row_column}>
						<ItemRigth styles={styles} />
					</div>
				</div>
			</ContainerSection>
		</div>
	);
}

export default BenefitsGame;
