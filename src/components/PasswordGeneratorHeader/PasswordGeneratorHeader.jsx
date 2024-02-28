/** @format */

import s from './style.module.css';

import lockIcon from '../../assets/005 lock.svg';

export const PasswordGeneratorHeader = (props) => {
	return (
		<div className={`${s.root}`}>
			<div className={`${s.title}`}>Password Generator</div>
			<img
				src={lockIcon}
				alt='lock icon'
				className={`${s.icon}`}
			/>
		</div>
	);
};
