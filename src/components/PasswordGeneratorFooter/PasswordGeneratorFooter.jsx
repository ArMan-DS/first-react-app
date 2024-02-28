/** @format */

import s from './style.module.css';

import copytPase from '../../assets/007 copy-paste.svg';

export const PasswordGeneratorFooter = (props) => {
	const savePasswordInClipboard = () => {
		navigator.clipboard.writeText(props.password);
		alert('Password saved to clickboard!');
	};

	let flagForHover = true;

	return (
		<div
			style={{ cursor: flagForHover ? 'pointer' : 'default' }}
			className={`${s.root}`}
			onClick={savePasswordInClipboard}>
			<div>{props.password}</div>
			<img
				className={`${s.icon}`}
				src={copytPase}
				alt='Copy pase'
			/>
		</div>
	);
};
