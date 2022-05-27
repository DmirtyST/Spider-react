/** @format */

import {NavLink} from "react-router-dom";
import {headerNav} from "../../../Data/data";

/** @format */

function HeaderNavigation({styles}) {
	return (
		<nav className={styles.header_nav}>
			<ul className={styles.nav_lists}>
				{headerNav.map((e) => {
					return (
						<li className={styles.nav_list} key={e.id}>
							<NavLink className={styles.nav_link} to={e.path}>
								{e.names}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default HeaderNavigation;
