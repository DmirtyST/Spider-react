/** @format */
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import SwiperCore, {Pagination} from "swiper";
import styles from "./TeamSlider.module.scss";
import "./TeamSlider.scss";
import ContainerImageCover from "../../../ContainerImage/ContainerImageCover";
SwiperCore.use([Pagination]);
function TeamSlider(props) {
	const {items = []} = props;
	return (
		<div>
			<Swiper
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 0,
					},
					790: {
						slidesPerView: 2,
						spaceBetween: 10,
					},

					906: {
						slidesPerView: 2.5,
						spaceBetween: 25,
					},

					1200: {
						slidesPerView: 3,
						spaceBetween: 10,
					},
					1701: {
						slidesPerView: 4,
						spaceBetween: -50,
					},

					1800: {
						slidesPerView: 4,
						spaceBetween: -50,
					},
				}}
				autoplay={{
					delay: 500,
				}}
				spaceBetween={-50}
				slidesPerView={4}
				pagination={{clickable: true}}
				onSlideChange={() => console.log("slide change")}
				className={styles.team_slider}
			>
				{items.map((e) => {
					return (
						<SwiperSlide key={e.id}>
							<div className={styles.team_slide}>
								<div className={styles.slide_image}>
									<ContainerImageCover path={e.imgPath} />
								</div>
								<div className={styles.slide_title}>{e.title}</div>
								<div className={styles.slide_sub}>{e.sub}</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}

export default TeamSlider;
