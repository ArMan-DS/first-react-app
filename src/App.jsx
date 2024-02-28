/** @format */

import s from './global.module.css';

import { PasswordGeneratorCard } from './components/PasswordGeneratorCard/PasswordGeneratorCard';

export const App = () => {
	return (
		<div className={`${s.container}`}>
			<PasswordGeneratorCard></PasswordGeneratorCard>
		</div>
	);
};
