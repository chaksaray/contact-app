import { useState, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { addOnePeople } from '../../store/actions/people';
import { useSelector } from 'react-redux';

import { Form, Button, Col, Row } from 'react-bootstrap';
import styles from './NewPeople.module.css';
import { isValidURL } from '../../lib/helper';

const textFieldReducer = (state, action) => {
	if (action.type === 'USER_INPUT') {
		return {
			value: action.value,
			isTouch: true,
			isValid: action.value.trim() !== '',
		};
	}
	if (action.type === 'INPUT_BLUR') {
		return {
			value: state.value,
			isTouch: true,
			isValid: state.isValid,
		};
	}
	return { value: '', isTouch: false, isValid: false };
};

const initialReducerState = {
	value: '',
	isTouch: false,
	isValid: false,
};

const NewPeople = () => {
	const [isEntering, setIsEntereing] = useState(false);
	const dispatch = useDispatch();

	const [nameState, dispatchName] = useReducer(
		textFieldReducer,
		initialReducerState,
	);

	const [positionState, dispatchPosition] = useReducer(
		textFieldReducer,
		initialReducerState,
	);

	const [companySate, dispatchCompany] = useReducer(
		textFieldReducer,
		initialReducerState,
	);

	const [citySate, dispatchCity] = useReducer(
		textFieldReducer,
		initialReducerState,
	);

	const [profileImageSate, dispatchProfileImage] = useReducer(
		textFieldReducer,
		initialReducerState,
	);

	const nameInputIsInvalid = !nameState.isValid && nameState.isTouch;
	const positionInputIsInvalid =
		!positionState.isValid && positionState.isTouch;
	const companyInputIsInvalid = !companySate.isValid && companySate.isTouch;
	const cityInputIsInvalid = !citySate.isValid && citySate.isTouch;
	const profileImgIsInvalid =
		!profileImageSate.isValid && profileImageSate.isTouch;

	const [profileImgName, setProfileImgName] = useState('');

	const [fbUrl, setFbUrl] = useState('');
	const fbUrlIsValid = isValidURL(fbUrl) || fbUrl === '';

	const [linkdedInUrl, setLinkdedInUrl] = useState('');
	const linkdedInUrlIsValid = isValidURL(linkdedInUrl) || linkdedInUrl === '';

	const [igUrl, setIgUrl] = useState('');
	const igUrlIsValid = isValidURL(igUrl) || igUrl === '';

	const [twtUrl, setTwtUrl] = useState('');
	const twtUrlIsValid = isValidURL(twtUrl) || twtUrl === '';

	const nameOnChangeHandler = (event) => {
		dispatchName({ type: 'USER_INPUT', value: event.target.value });
	};

	const nameOnBlurHandler = () => {
		dispatchName({ type: 'INPUT_BLUR' });
	};

	const positionOnChangeHandler = (event) => {
		dispatchPosition({ type: 'USER_INPUT', value: event.target.value });
	};

	const positionOnBlurHandler = () => {
		dispatchPosition({ type: 'INPUT_BLUR' });
	};

	const companyOnChangeHandler = (event) => {
		dispatchCompany({ type: 'USER_INPUT', value: event.target.value });
	};

	const companyOnBlurHandler = () => {
		dispatchCompany({ type: 'INPUT_BLUR' });
	};

	const cityOnChangeHandler = (event) => {
		dispatchCity({ type: 'USER_INPUT', value: event.target.value });
	};

	const cityOnBlurHandler = () => {
		dispatchCity({ type: 'INPUT_BLUR' });
	};

	const profileOnChangeHandler = (event) => {
		dispatchProfileImage({
			type: 'USER_INPUT',
			value: event.target.files[0],
		});
		setProfileImgName(
			event.target.files[0].name.replace(/\s+/g, '-').toLowerCase(),
		);
	};

	const profileOnBlurHandler = () => {
		dispatchProfileImage({ type: 'INPUT_BLUR' });
	};

	const fbOnChangeHandler = (event) => {
		setFbUrl(event.target.value);
	};

	const linkedInOnChangeHandler = (event) => {
		setLinkdedInUrl(event.target.value);
	};
	const igOnChangeHandler = (event) => {
		setIgUrl(event.target.value);
	};
	const twtOnChangeHandler = (event) => {
		setTwtUrl(event.target.value);
	};

	let formIsValid = false;
	if (
		nameState.isValid &&
		positionState.isValid &&
		companySate.isValid &&
		citySate.isValid &&
		profileImageSate.isValid &&
		fbUrlIsValid &&
		linkdedInUrlIsValid &&
		igUrlIsValid &&
		twtUrlIsValid
	) {
		formIsValid = true;
	}

	const formSubmitHandler = (event) => {
		event.preventDefault();

		setIsEntereing(false);

		if (!formIsValid) {
			return;
		}

		const person = {
			avatar: profileImgName,
			city: citySate.value,
			id: Math.random(),
			company: companySate.value,
			isContact: false,
			isFavorite: false,
			name: nameState.value,
			position: positionState.value,
			social_networks: {
				facebook: fbUrl,
				instagram: igUrl,
				linkedin: linkdedInUrl,
				twitter: twtUrl,
			},
		};

		uploadImage();

		// post to people
		dispatch(addOnePeople(person));

		dispatchName({});
		dispatchPosition({});
		dispatchCompany({});
		dispatchCity({});
		dispatchProfileImage({});

		setProfileImgName('');
		setFbUrl('');
		setLinkdedInUrl('');
		setIgUrl('');
		setTwtUrl('');
	};

	const uploadImage = () => {
		const formData = new FormData();
		formData.append('myfile', profileImageSate.value, profileImgName);

		// axios.post('assets/images', formData);
	};

	const formOnFocusHandler = () => {
		setIsEntereing(true);
	};

	const status = useSelector((state) => state.ui.addPeopleStatus);

	window.onbeforeunload = function () {
		if (isEntering) {
			return 'Are you sure you want to leave?';
		}

		return;
	};

	return (
		<div>
			<h3 className="primary-color">Add new people</h3>
			<hr />
			<br />
			<div className={`${styles['form-wrapper']} w-50`}>
				<Form onSubmit={formSubmitHandler} onFocus={formOnFocusHandler}>
					<Form.Group className="mb-3" controlId="formName">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter name"
							className={nameInputIsInvalid ? 'invalid' : ''}
							value={nameState.value}
							onChange={nameOnChangeHandler}
							onBlur={nameOnBlurHandler}
						/>
						{nameInputIsInvalid && (
							<p className={styles['text-error']}>
								Name must not be empty.
							</p>
						)}
					</Form.Group>

					<Form.Group className="mb-3" controlId="formPosition">
						<Form.Label>Position</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter position"
							className={positionInputIsInvalid ? 'invalid' : ''}
							value={positionState.value}
							onChange={positionOnChangeHandler}
							onBlur={positionOnBlurHandler}
						/>

						{positionInputIsInvalid && (
							<p className={styles['text-error']}>
								Position must not be empty.
							</p>
						)}
					</Form.Group>

					<Form.Group className="mb-3" controlId="formCompany">
						<Form.Label>Company</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter company"
							className={companyInputIsInvalid ? 'invalid' : ''}
							value={companySate.value}
							onChange={companyOnChangeHandler}
							onBlur={companyOnBlurHandler}
						/>
						{companyInputIsInvalid && (
							<p className={styles['text-error']}>
								Company must not be empty.
							</p>
						)}
					</Form.Group>

					<Form.Group className="mb-3" controlId="formCity">
						<Form.Label>City</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter city"
							className={cityInputIsInvalid ? 'invalid' : ''}
							value={citySate.value}
							onChange={cityOnChangeHandler}
							onBlur={cityOnBlurHandler}
						/>
						{cityInputIsInvalid && (
							<p className={styles['text-error']}>
								City must not be empty.
							</p>
						)}
					</Form.Group>

					<Form.Group controlId="formProfile" className="mb-3">
						<Form.Label>Profile</Form.Label>
						<Form.Control
							type="file"
							accept="image/*"
							className={profileImgIsInvalid ? 'invalid' : ''}
							onChange={profileOnChangeHandler}
							onBlur={profileOnBlurHandler}
						/>
						{profileImgIsInvalid && (
							<p className={styles['text-error']}>
								Please select profile picture.
							</p>
						)}
					</Form.Group>

					<Form.Group
						as={Row}
						className="mb-3"
						controlId="formPlaintextPassword"
					>
						<Col sm="12">
							<Form.Label column sm="2">
								Social Links
							</Form.Label>
						</Col>
						<Form.Label column sm="2">
							Facebook
						</Form.Label>
						<Col sm="10">
							<Form.Control
								type="url"
								placeholder="link"
								className={!fbUrlIsValid ? 'invalid' : ''}
								onChange={fbOnChangeHandler}
							/>
							{!fbUrlIsValid && (
								<p className={styles['text-error']}>
									Invalid Url
								</p>
							)}
						</Col>

						<Form.Label column sm="2">
							LinkedIn
						</Form.Label>
						<Col sm="10">
							<Form.Control
								type="url"
								placeholder="link"
								className={
									!linkdedInUrlIsValid ? 'invalid' : ''
								}
								onChange={linkedInOnChangeHandler}
							/>
							{!linkdedInUrlIsValid && (
								<p className={styles['text-error']}>
									Invalid Url
								</p>
							)}
						</Col>

						<Form.Label column sm="2">
							Instagram
						</Form.Label>
						<Col sm="10">
							<Form.Control
								type="url"
								placeholder="link"
								className={!igUrlIsValid ? 'invalid' : ''}
								onChange={igOnChangeHandler}
							/>
							{!igUrlIsValid && (
								<p className={styles['text-error']}>
									Invalid Url
								</p>
							)}
						</Col>

						<Form.Label column sm="2">
							Twitter
						</Form.Label>
						<Col sm="10">
							<Form.Control
								type="url"
								placeholder="link"
								className={!twtUrlIsValid ? 'invalid' : ''}
								onChange={twtOnChangeHandler}
							/>
							{!twtUrlIsValid && (
								<p className={styles['text-error']}>
									Invalid Url
								</p>
							)}
						</Col>
					</Form.Group>
					{status == 'pending' && <p>processing..</p>}
					{status == 'error' && (
						<p className="text-error">saving error.</p>
					)}
					{status == 'success' && (
						<p className="text-success">Saving successfully.</p>
					)}
					<Button
						variant="primary"
						type="submit"
						disabled={!formIsValid}
					>
						Save
					</Button>
				</Form>
			</div>
		</div>
	);
};

export default NewPeople;
