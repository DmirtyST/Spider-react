/** @format */

import ContainerImageCover from "../../../ContainerImage/ContainerImageCover";

function ScreenPageImgItem({styles}) {
	return (
		<div className={styles.screenPage_imgItem}>
			<div className={styles.imgItem_image}>
				<ContainerImageCover path={"./Image/homeImgItem.png"} />
			</div>
		</div>
	);
}

export default ScreenPageImgItem;
