import { Fragment } from 'react';
import { transformSocialLink } from '../../lib/helper';

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

	return (
		<Fragment>
			<Row className={styles['div-row']} xs="auto">
				<Col>
					<Card style={{ border: 'none' }}>
						<Card.Body>
							<Image
								src={props.avatar}
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
								{props.name}
							</Card.Title>
							<Card.Text>{props.position}</Card.Text>
							<Socials>{socials}</Socials>
							<Card.Text>{props.city}</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<div className="mt-4">
						{props.isContact && (
							<AddDeleteButton variant="outline-danger">
								delete from constacts
							</AddDeleteButton>
						)}

						{props.isContact && props.isFavorite && (
							<AddDeleteButton variant="outline-danger">
								delete from favorites
							</AddDeleteButton>
						)}

						{props.isContact && !props.isFavorite && (
							<AddDeleteButton variant="outline-primary">
								add to favorites
							</AddDeleteButton>
						)}

						{!props.isContact && !props.isFavorite && (
							<AddDeleteButton variant="outline-primary">
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
