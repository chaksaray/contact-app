import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addOnePeople } from '../../store/actions/people';
import { useSelector } from 'react-redux';

import { Form, Button, Col, Row } from 'react-bootstrap';
import styles from './NewPeople.module.css';
import { isValidURL } from '../../lib/helper';

const NewPeople = () => {
	const [isEntering, setIsEntereing] = useState(false);
	const dispatch = useDispatch();
	const [enteredName, setEnteredName] = useState('');
	const [enteredNameTouch, setEnteredNameTouch] = useState(false);
	const enteredNameIsValid = enteredName.trim() !== '';
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouch;

	const [enteredPosition, setEnteredPosition] = useState('');
	const [enteredPositionTouch, setEnteredPositionTouch] = useState(false);
	const enteredPositionIsValid = enteredPosition.trim() !== '';
	const positionInputIsInvalid =
		!enteredPositionIsValid && enteredPositionTouch;

	const [enteredCompany, setEnteredCompany] = useState('');
	const [enteredCompanyTouch, setEnteredCompanyTouch] = useState(false);
	const enteredCompanyIsValid = enteredCompany.trim() !== '';
	const companyInputIsInvalid = !enteredCompanyIsValid && enteredCompanyTouch;

	const [enteredCity, setEnteredCity] = useState('');
	const [enteredCityTouch, setEnteredCityTouch] = useState(false);
	const enteredCityIsValid = enteredCity.trim() !== '';
	const cityInputIsInvalid = !enteredCityIsValid && enteredCityTouch;

	const [profileImg, setProfileImg] = useState(null);
	const [profileImgName, setProfileImgName] = useState('');
	const [profileImgTouch, setProfileImgTouch] = useState(false);
	const profileImgIsValid = profileImg != null;
	const profileImgIsInvalid = !profileImgIsValid && profileImgTouch;

	const [fbUrl, setFbUrl] = useState('');
	const fbUrlIsValid = isValidURL(fbUrl) || fbUrl === '';

	const [linkdedInUrl, setLinkdedInUrl] = useState('');
	const linkdedInUrlIsValid = isValidURL(linkdedInUrl) || linkdedInUrl === '';

	const [igUrl, setIgUrl] = useState('');
	const igUrlIsValid = isValidURL(igUrl) || igUrl === '';

	const [twtUrl, setTwtUrl] = useState('');
	const twtUrlIsValid = isValidURL(twtUrl) || twtUrl === '';

	const nameOnChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const nameOnBlurHandler = () => {
		setEnteredNameTouch(true);
	};

	const positionOnChangeHandler = (event) => {
		setEnteredPosition(event.target.value);
	};

	const positionOnBlurHandler = () => {
		setEnteredPositionTouch(true);
	};

	const companyOnChangeHandler = (event) => {
		setEnteredCompany(event.target.value);
	};

	const companyOnBlurHandler = () => {
		setEnteredCompanyTouch(true);
	};

	const cityOnChangeHandler = (event) => {
		setEnteredCity(event.target.value);
	};

	const cityOnBlurHandler = () => {
		setEnteredCityTouch(true);
	};

	const profileOnChangeHandler = (event) => {
		setProfileImg(event.target.files[0]);
		setProfileImgName(
			event.target.files[0].name.replace(/\s+/g, '-').toLowerCase(),
		);
	};

	const profileOnBlurHandler = () => {
		setProfileImgTouch(true);
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
		enteredNameIsValid &&
		enteredPositionIsValid &&
		enteredCompanyIsValid &&
		enteredCityIsValid &&
		profileImgIsValid &&
		fbUrlIsValid &&
		linkdedInUrlIsValid &&
		igUrlIsValid &&
		twtUrlIsValid
	) {
		formIsValid = true;
	}

	const formSubmitHandler = (event) => {
		event.preventDefault();

		setEnteredNameTouch(true);
		setEnteredPositionTouch(true);
		setEnteredCompanyTouch(true);
		setEnteredCityTouch(true);
		setProfileImgTouch(true);
		setIsEntereing(false);

		if (!formIsValid) {
			return;
		}

		const person = {
			avatar: profileImgName,
			city: enteredCity,
			id: Math.random(),
			company: enteredCompany,
			isContact: false,
			isFavorite: false,
			name: enteredName,
			position: enteredPosition,
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

		setEnteredName('');
		setEnteredPosition('');
		setEnteredCompany('');
		setEnteredCity('');
		setProfileImg(null);
		setProfileImgName('');
		setFbUrl('');
		setLinkdedInUrl('');
		setIgUrl('');
		setTwtUrl('');

		setEnteredNameTouch(false);
		setEnteredPositionTouch(false);
		setEnteredCompanyTouch(false);
		setEnteredCityTouch(false);
		setProfileImgTouch(false);
	};

	const uploadImage = () => {
		const formData = new FormData();
		formData.append('myfile', profileImg, profileImgName);

		// axios.post('assets/images', formData);
	};

	const formOnFocusHandler = () => {
		setIsEntereing(true);
	};

	const status = useSelector((state) => state.ui.peopleStatus);

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
							value={enteredName}
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
							value={enteredPosition}
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
							value={enteredCompany}
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
							value={enteredCity}
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
