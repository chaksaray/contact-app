import { Fragment } from 'react';
import { transformSocialLink } from '../../lib/helper';
import { useDispatch } from 'react-redux';
import { peopleActions } from '../../store/people-slice';

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
		<SocialButton key={item.id + '' + props.id} link={item.link}>
			{item.id === 'facebook' && <BsFacebook />}
			{item.id === 'linkedin' && <BsLinkedin />}
			{item.id === 'twitter' && <BsTwitter />}
			{item.id === 'instagram' && <BsInstagram />}
			{item.id === 'skype' && <BsSkype />}
		</SocialButton>
	));

	const addToFavoriteHandler = () => {
		dispatch(peopleActions.addToFavorite(people));
	};

	const deleteFromFavoriteHandler = () => {
		dispatch(peopleActions.deleteFromFavorite(people.id));
	};

	const addToContactHandler = () => {
		dispatch(peopleActions.addToContact(people));
	};

	const deleteFromContactHandler = () => {
		dispatch(peopleActions.deleteFromContact(people.id));
	};

	return (
		<Fragment>
			<Row className={styles['div-row']} xs="auto">
				<Col>
					<Card style={{ border: 'none' }}>
						<Card.Body>
							<Image
								src={people.avatar}
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
							<Card.Text>{people.position}</Card.Text>
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
