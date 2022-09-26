import styles from './CellDescription.module.scss';

export default function CellDescription(props) {
	const { img, span, text, classForSpan } = props;
	const classNames = require('classnames');
	return (
		<div className={styles.cell__description}>
			<img
				src={img}
				alt='icon for arrow'
			/>
			<p>
				<span className={classNames(classForSpan === 'green' ? [styles.green] : [styles.red])}>{span}</span>
				{text}
			</p>
		</div>
	);
}
