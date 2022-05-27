/** @format */
import {StatisticianItemData} from "../../../Data/data";
import styles from "../../../Styles/Home/Statistician/Statistician.module.scss";
import ContainerSection from "../../Container";
import ContainerImageContain from "../../ContainerImage/ContainerImageCover";

function Statistician() {
	return (
		<div className={styles.statistician}>
			<div className={styles.statistician_title}>Roadmap</div>
			<div className={styles.statistician_line}>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<ContainerSection>
				<div className={styles.statistician_row}>
					{StatisticianItemData.map((e) => {
						return (
							<div key={e.id} className={styles.row_column}>
								<div className={styles.column_container}>
									<div className={styles.column_item}>
										<div className={styles.item_row}>
											<div className={styles.item_icon}>
												<span> {e.icon}</span>
											</div>
											<div className={styles.item_box}>
												<div className={styles.box_title}>{e.title}</div>
												<div className={styles.box_text}>{e.text}</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</ContainerSection>
		</div>
	);
}

export default Statistician;
