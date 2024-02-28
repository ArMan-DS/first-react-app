/** @format */

import s from './style.module.css';

import { PasswordGeneratorHeader } from '../PasswordGeneratorHeader/PasswordGeneratorHeader';
import { PasswordGeneratorBody } from '../PasswordGeneratorBody/PasswordGeneratorBody';
import { PasswordGeneratorFooter } from '../PasswordGeneratorFooter/PasswordGeneratorFooter';
import { useState } from 'react';

export const PasswordGeneratorCard = (props) => {
	const [password, setPassword] = useState();
	return (
		<div className={`${s.root}`}>
			<div className={`${s.main}`}>
				<PasswordGeneratorHeader></PasswordGeneratorHeader>
				<PasswordGeneratorBody onSubmit={setPassword}></PasswordGeneratorBody>
			</div>
			<PasswordGeneratorFooter password={password}></PasswordGeneratorFooter>
		</div>
	);
};
