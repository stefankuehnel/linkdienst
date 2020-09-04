import styles from "./Headline.module.css";

/**
 * Erstellt eine neue Überschrift mit einem Anker.
 * Quelle: https://bit.ly/2QlEFBL
 * @param {*} props
 */
const Headline = (props) => {
	/* Der eigentliche Inhalt der Überschrift. */
	const nodeValue = props.value;

	/* Ersetzt Leerzeichen durch einen Underscore. */
	const id = nodeValue.toLowerCase().split(" ").join("_");

	/* Fügt eine Raute zu Beginn der ID zur Verwendung in der URL ein. */
	const anchor = id.replace(/^/, "#");

	return (
		<>
			<h2 className={styles.headline} id={id}>
				{nodeValue}
				<a className={styles.anchor} href={anchor}>
					¶
				</a>
			</h2>
		</>
	);
};

export default Headline;
