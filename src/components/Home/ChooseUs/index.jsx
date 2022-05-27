/** @format */

import ContainerImageCover from "../../ContainerImage/ContainerImageCover";
import styles from "../../../Styles/Home/ChooseUs/ChooseUs.module.scss";
import {ChooseUsDataItem} from "../../../Data/data";
import ContainerSection from "../../Container";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ChooseUs() {
	return (
		<div className={styles.chooseUs}>
			<ContainerImageCover path={"./Image/ChooseUsBg.png"} />
			<ContainerSection>
				<div className={styles.chooseUs_row}>
					{ChooseUsDataItem.slice(0, 1).map((e) => {
						return (
							<div key={e.id} className={styles.row_column}>
								<div className={styles.column_item}>
									<div className={styles.item_title}>{e.title}</div> <div className={styles.item_text}>{e.text}</div>
									<button className={styles.item_btn}>Learn more about SpiderShiba</button>
								</div>
							</div>
						);
					})}
					<div className={styles.row_column}>
						{ChooseUsDataItem.slice(1, 3).map((e) => {
							return (
								<div key={e.id} className={styles.column_item}>
									<div className={styles.item_row}>
										<ul className={styles.item_icon}>
											<li className={styles.icon}>
												<FontAwesomeIcon icon={e.icon} />
											</li>
										</ul>
										<div className={styles.item_box}>
											<div className={styles.item_title}>{e.title}</div>
											<div className={styles.item_rigthText}>{e.text}</div>
										</div>
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

export default ChooseUs;
