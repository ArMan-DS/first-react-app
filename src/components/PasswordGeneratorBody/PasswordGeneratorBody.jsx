/** @format */

import s from './style.module.css';

import { passwordGenerator } from '../../libs/passwordGenerator';

export const PasswordGeneratorBody = (props) => {
	const submit = (event) => {
		event.preventDefault();
		let formData = {};
		console.log('***', 'onSubmited!');
		new FormData(event.currentTarget).forEach((value, key) => {
			formData[key] = value;
		});

		let generatePassword = passwordGenerator(formData);

		props.onSubmit(generatePassword);
	};

	return (
		<form onSubmit={submit}>
			<div className={`${s.grid_container}`}>
				<div className={`${s.grid_item}`}>
					<label htmlFor='range'>Size</label>
					<select
						defaultValue={15}
						name='size'
						id='size'>
						<option value='5'>5</option>
						<option value='10'>10</option>
						<option value='15'>15</option>
						<option value='20'>20</option>
					</select>
				</div>

				<div className={`${s.grid_item}`}>
					<label htmlFor='uppercase'>Uppercase</label>
					<input
						defaultChecked
						type='checkbox'
						name='uppercase'
						id='uppercase'
					/>
				</div>

				<div className={`${s.grid_item}`}>
					<label htmlFor='numbers'>Numbers</label>
					<input
						defaultChecked
						type='checkbox'
						name='numbers'
						id='numbers'
					/>
				</div>

				<div className={`${s.grid_item}`}>
					<label htmlFor='specials'>Specials</label>
					<input
						defaultChecked
						type='checkbox'
						name='specials'
						id='specials'
					/>
				</div>
			</div>
			<div className={`${s.btn_container}`}>
				<button
					type='submit'
					className={`${s.btn_generator}`}>
					GENERATE
				</button>
			</div>
		</form>
	);
};
