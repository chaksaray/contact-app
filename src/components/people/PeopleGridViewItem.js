import Socials from './Socials';
import SocialButton from '../UI/SocialButton';
import { transformSocialLink } from '../../lib/helper';

import { Card, Image } from 'react-bootstrap';
import {
	BsFacebook,
	BsLinkedin,
	BsTwitter,
	BsSkype,
	BsInstagram,
} from 'react-icons/bs';
import AddDeleteButton from '../UI/AddDeleteButton';

const PeopleGridViewItem = (props) => {
	const people = props.people;
	const transformedSocialLink = transformSocialLink(people.social_networks);

	const socials = transformedSocialLink.map((item) => (
		<SocialButton key={item.id + '' + people.id} link={item.link}>
			{item.id === 'facebook' && <BsFacebook />}
			{item.id === 'linkedin' && <BsLinkedin />}
			{item.id === 'twitter' && <BsTwitter />}
			{item.id === 'instagram' && <BsInstagram />}
			{item.id === 'skype' && <BsSkype />}
		</SocialButton>
	));

	return (
		<Card className="text-center" style={{ borderBottom: 'none' }}>
			<Card.Body>
				<Image
					src={people.avatar}
					roundedCircle
					style={{ width: '8rem' }}
				/>
				<Card.Title className="primary-color mt-2">
					{people.name}
				</Card.Title>
				<Card.Text>{people.position}</Card.Text>
				<Socials>{socials}</Socials>
				<Card.Text>{people.city}</Card.Text>
				{people.isContact && (
					<AddDeleteButton variant="outline-danger">
						delete from constacts
					</AddDeleteButton>
				)}

				{people.isContact && people.isFavorite && (
					<AddDeleteButton variant="outline-danger">
						delete from favorites
					</AddDeleteButton>
				)}

				{people.isContact && !people.isFavorite && (
					<AddDeleteButton variant="outline-primary">
						add to favorites
					</AddDeleteButton>
				)}

				{!people.isContact && !people.isFavorite && (
					<AddDeleteButton variant="outline-primary">
						add to contacts
					</AddDeleteButton>
				)}
			</Card.Body>
		</Card>
	);
};

export default PeopleGridViewItem;
