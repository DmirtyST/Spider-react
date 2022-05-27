/** @format */
import {tokenItemData} from "../../../Data/data";
import styles from "../../../Styles/Home/Token/Token.module.scss";
import ContainerSection from "../../Container";
import ContainerImageCover from "../../ContainerImage/ContainerImageCover";

function Token() {
	return (
		<div className={styles.Token}>
			<div className={styles.Token_title}>Tokenomics</div>
			<ContainerSection>
				<div className={styles.Token_row}>
					<div className={styles.row_column}>
						{tokenItemData.itemLeft.map((e) => {
							return (
								<div key={e.id} className={styles.column_item}>
									<div className={styles.item_item}>
										<div className={styles.item_title}>{e.title}</div>
										<div className={styles.item_text}>{e.text}</div>
									</div>
								</div>
							);
						})}
					</div>
					<div className={styles.row_column}>
						{tokenItemData.itemCenter.map((e) => {
							return (
								<div key={e.id} className={styles.Token_image}>
									<ContainerImageCover path={e.pathImg} />
								</div>
							);
						})}
					</div>
					<div className={styles.row_column}>
						{tokenItemData.itemRight.map((e) => {
							return (
								<div key={e.id} className={styles.column_item}>
									<div className={styles.item_item}>
										<div className={styles.item_title}>{e.title}</div>
										<div className={styles.item_text}>{e.text}</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</ContainerSection>
		</div>
	);
}

export default Token;
