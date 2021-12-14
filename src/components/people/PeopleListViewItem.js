import { Fragment } from 'react';
import { transformSocialLink } from '../../lib/helper';
import { useDispatch } from 'react-redux';
import { updateOnePeople } from '../../store/actions/people';
import {
	addOneFavorite,
	deleteOneFavorite,
} from '../../store/actions/favorites';
import { IMAGE_DOMAIN } from '../../lib/constant';
import { addOneContact, deleteOneContact } from '../../store/actions/contacts';

import Socials from './Socials';
import SocialButton from '../UI/SocialButton';
import AddDeleteButton from '../UI/AddDeleteButton';

import { Card, Image, Row, Col } from 'react-bootstrap';
import {
	BsFacebook,
	BsLinkedin,
	BsTwitter,
	BsSkype,
	BsInstagram,
} from 'react-icons/bs';
import styles from './PeopleListViewItem.module.css';

const PeopleListViewItem = (props) => {
	const dispatch = useDispatch();
	const people = props.people;
	const tranformedSocialLinks = transformSocialLink(props.social_networks);

	const socials = tranformedSocialLinks.map((item) => (
		<SocialButton key={item.id + '' + props.id} link={item.value}>
			{item.id === 'facebook' && <BsFacebook />}
			{item.id === 'linkedin' && <BsLinkedin />}
			{item.id === 'twitter' && <BsTwitter />}
			{item.id === 'instagram' && <BsInstagram />}
			{item.id === 'skype' && <BsSkype />}
		</SocialButton>
	));

	const addToFavoriteHandler = () => {
		const newPeople = { ...people };
		newPeople.isFavorite = true;

		dispatch(addOneFavorite(newPeople));
		dispatch(updateOnePeople(newPeople));
	};

	const deleteFromFavoriteHandler = () => {
		const newPeople = { ...people };
		newPeople.isContact = false;

		dispatch(deleteOneContact(newPeople.id));
		dispatch(updateOnePeople(newPeople));
	};

	const addToContactHandler = () => {
		const newPeople = { ...people };
		newPeople.isContact = true;

		dispatch(addOneContact(newPeople));
		dispatch(updateOnePeople(newPeople));
	};

	const deleteFromContactHandler = () => {
		const newPeople = { ...people };
		newPeople.isFavorite = false;
		dispatch(deleteOneFavorite(newPeople.id));
		dispatch(updateOnePeople(newPeople));
	};

	return (
		<Fragment>
			<Row className={styles['div-row']} xs="auto">
				<Col>
					<Card style={{ border: 'none' }}>
						<Card.Body>
							<Image
								src={`${IMAGE_DOMAIN}/${people.avatar}`}
								roundedCircle
								style={{ width: '8rem' }}
							/>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ border: 'none' }}>
						<Card.Body>
							<Card.Title className="primary-color">
								{people.name}
							</Card.Title>
							<Card.Text>
								{people.company}, {people.position}
							</Card.Text>
							<Socials>{socials}</Socials>
							<Card.Text>{people.city}</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<div className="mt-4">
						{people.isContact && (
							<AddDeleteButton
								variant="outline-danger"
								onClick={deleteFromContactHandler}
							>
								delete from constacts
							</AddDeleteButton>
						)}

						{people.isContact && people.isFavorite && (
							<AddDeleteButton
								variant="outline-danger"
								onClick={deleteFromFavoriteHandler}
							>
								delete from favorites
							</AddDeleteButton>
						)}

						{people.isContact && !people.isFavorite && (
							<AddDeleteButton
								variant="outline-primary"
								onClick={addToFavoriteHandler}
							>
								add to favorites
							</AddDeleteButton>
						)}

						{!people.isContact && !people.isFavorite && (
							<AddDeleteButton
								variant="outline-primary"
								onClick={addToContactHandler}
							>
								add to contacts
							</AddDeleteButton>
						)}
					</div>
				</Col>
			</Row>
		</Fragment>
	);
};

export default PeopleListViewItem;
