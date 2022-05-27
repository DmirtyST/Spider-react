/** @format */

import styles from "../../../Styles/Home/ScreenPage/ScreenPage.module.scss";
import ContainerSection from "../../Container";
import ContainerImageCover from "../../ContainerImage/ContainerImageCover";
import ScreenPageImgItem from "./ScreePageImgItem";
import ScreenPageItem from "./ScreePageItem/Index";

function ScreenPage() {
	return (
		<div className={styles.screenPage}>
			<ul className={styles.screenPage_eclipce}>
				<li></li>
				<li></li>
			</ul>
			<span className={styles.screenPage_img}>
				<ContainerImageCover path={"./Image/homebg.png"} />
			</span>
			<div className={styles.screenPage_botoomBanner}>
				<ContainerImageCover path={"./Image/homeBanner.png"} />
			</div>
			<ContainerSection>
				<div className={styles.screenPage_row}>
					<div className={styles.row_column}>
						<ScreenPageItem styles={styles} />
					</div>
					<div className={styles.row_column}>
						<ScreenPageImgItem styles={styles} />
					</div>
				</div>
			</ContainerSection>
		</div>
	);
}

export default ScreenPage;
