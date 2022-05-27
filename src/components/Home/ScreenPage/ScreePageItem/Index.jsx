/** @format */

import ScreenPageImgItem from "../ScreePageImgItem";

/** @format */

function ScreenPageItem({styles}) {
	return (
		<div className={styles.screenPage_item}>
			<div className={styles.item_title}>
				<span>Who is</span> mr. Spidershiba Inu?
			</div>
			<div className={styles.item_sub}>it’s a hybrid of Shiba and Spiderman.... but</div>
			<div className={styles.item_text}>It’s not only for pump and dump by Elon tweets. This is real NFT game with Achiements, Goals and nice gameplay with tokenization</div>
			<div className={styles.screenPage_momileItem}>
				<div className={styles.momileItem_image}>
					<img src="./Image/homeImgItem.png" alt="" />
				</div>
			</div>
			<div className={styles.item_box_button}>
				<div className={styles.box_button_join}>Join Community</div>
				<div className={styles.box_button_more}>More about SpiderShiba Inu</div>
			</div>
			<div className={styles.item_box_codes}>
				<div className={styles.box_codes_title}>Contract address:</div>
				<div className={styles.box_codes_code}>0xe4C6E7a0F696Fb2356A187020eb13E742792Fdcc</div>
			</div>
		</div>
	);
}

export default ScreenPageItem;
