import styles from "./Header.module.css";
import Link from "next/link";

export function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.info}>
				<h1 className={styles.name}>{" Linkdienst "}</h1>
			</div>
			<Link href="/">
				<a>
					<img
						className={styles.avatar}
						alt="Stefan Kühnel"
						src="https://assets-cdn.stefankuehnel.com/images/modules/site/favicon/mask-icon.svg"
					></img>
				</a>
			</Link>
		</header>
	);
}