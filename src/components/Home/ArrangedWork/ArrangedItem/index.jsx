/** @format */

import {ArrangedItemData} from "../../../../Data/data";
import ContainerImageCover from "../../../ContainerImage/ContainerImageCover";

/** @format */

function ArrangedItem({styles}) {
	return (
		<>
			{ArrangedItemData.map((e) => {
				return (
					<div key={e.id} className={styles.arrangedWork_column}>
						<div className={styles.column_item}>
							<div className={styles.item_label}>
								<div className={styles.label_image}>
									<ContainerImageCover path={e.label} />
								</div>
							</div>
							<div className={styles.item_title}>{e.title}</div>
							<div className={styles.item_subTitle}>{e.subTitle}</div>
							<div className={styles.item_text}>{e.text}</div>
							<div className={styles.item_subText}>{e.subText}</div>
						</div>
					</div>
				);
			})}
		</>
	);
}

export default ArrangedItem;
