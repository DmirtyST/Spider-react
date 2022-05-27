/** @format */
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {footerItemData, footerSocialItem} from "../../Data/data";
import styles from "../../Styles/Footer/Footer.module.scss";
import ContainerSection from "../Container";
import ContainerImageCover from "../ContainerImage/ContainerImageCover";

function Footer() {
	return (
		<div className={styles.Footer}>
			<div className={styles.Footer_img}>
				<ContainerImageCover path={"./Image/footerBg.png"} />
			</div>
			<div className={styles.Footer_controll}>
				<div className={styles.Footer_title}>Join our SpiderShib Inu Community</div>
			</div>
			<ContainerSection>
				<div className={styles.Footer_row}>
					{footerSocialItem.map((e) => {
						return (
							<div key={e.id} className={styles.Footer_column}>
								<div className={styles.column_item}>
									<a className={styles.item_icon} href={e.path}>
										<FontAwesomeIcon icon={e.icon} />
									</a>
								</div>
							</div>
						);
					})}
				</div>

				{footerItemData.map((e) => {
					return (
						<div key={e.id} className={styles.Footer_item}>
							<div className={styles.item_image}>
								<ContainerImageCover path={e.imgPath} />
							</div>
							<div className={styles.item_box}>
								<div className={styles.item_sub}>{e.sub}</div>
								<div className={styles.item_text}>{e.text}</div>
							</div>
						</div>
					);
				})}
				<div className={styles.Footer_sub}>
					<p className={styles.sub_text}>Copyright © 2021 SpiderShiba Inu. All Rights Reserved.</p>
				</div>
			</ContainerSection>
		</div>
	);
}

export default Footer;
