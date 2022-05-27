/** @format */
import {homeData} from "../../../Data/data";
import styles from "../../../Styles/Home/Partners/Partners.module.scss";
import ContainerImageCover from "../../ContainerImage/ContainerImageCover";

function Partners() {
	return (
		<div className={styles.partners}>
			<div className={styles.partners_image}>
				<img src="./Image/partnersbg.png" alt="" />
			</div>
			<div className={styles.partners_groupe}>
				{homeData.partnersItem.map((e) => {
					return (
						<div key={e.id} className={styles.groupe_column}>
							<div className={styles.groupe_item}>
								<ContainerImageCover path={e.path} />
							</div>
						</div>
					);
				})}
			</div>
			<div className={styles.partners_title}>
				{homeData.partnersTitle.map((e) => {
					return <div key={e.id}>{e.title}</div>;
				})}
			</div>
			<div className={styles.partners_button}>Let’s find out more</div>
		</div>
	);
}

export default Partners;
