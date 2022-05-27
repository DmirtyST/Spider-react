/** @format */
import {useState} from "react";
import styles from "../../Styles/Header/Header.module.scss";
import HeaderBurger from "./HeaderBurger";
import HeaderButton from "./HeaderButton";
import HeaderDropMenu from "./HeaderDropMenu";
import HeaderNavigation from "./HeaderNavigation";

const Header = () => {
	const [scroll, setScroll] = useState(false);
	let newPosition = () => {
		const scrollvalue = document.documentElement.scrollTop;
		if (scrollvalue > 0) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};
	const [menu, setMenu] = useState(false);
	const toggleMenu = () => {
		setMenu(!menu);
	};
	window.addEventListener("scroll", newPosition);
	return (
		<header className={scroll === true ? styles.header + " " + styles.header_active : styles.header}>
			<div className={styles.header_container}>
				<div className={styles.header_row}>
					<div className={styles.row_column}>
						<div className={styles.header_logo}>
							<img src="./Image/logo.svg" alt="" />
						</div>
					</div>
					<div className={styles.row_column}>
						<HeaderNavigation styles={styles} />
					</div>
					<HeaderBurger toggleMenu={toggleMenu} menu={menu} />
					<HeaderDropMenu toggleMenu={toggleMenu} menu={menu} />
					<div className={styles.row_column}>
						<HeaderButton styles={styles} />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
