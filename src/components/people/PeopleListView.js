import { Fragment } from 'react';
import Socials from './Socials';
import SocialButton from '../UI/SocialButton';

import { Card, Image, Button, Row, Col } from 'react-bootstrap';
import {
	BsFacebook,
	BsLinkedin,
	BsTwitter,
	BsSkype,
	BsInstagram,
} from 'react-icons/bs';

const PeopleListView = () => {
	return (
		<Fragment>
			<Row>
				<Col>
					<Card className="text-left" style={{ border: 'none' }}>
						<Card.Body>
							<Image
								src="/assets/images/img3.png"
								roundedCircle
								style={{ width: '8rem' }}
							/>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className="text-left" style={{ border: 'none' }}>
						<Card.Body>
							<Card.Title className="primary-color mt-2">
								Name One
							</Card.Title>
							<Card.Text>Logical solution, CEO</Card.Text>
							<Socials>
								<SocialButton>
									<BsFacebook />
								</SocialButton>
								<SocialButton>
									<BsLinkedin />
								</SocialButton>
								<SocialButton>
									<BsTwitter />
								</SocialButton>
								<SocialButton>
									<BsInstagram />
								</SocialButton>
								<SocialButton>
									<BsSkype />
								</SocialButton>
							</Socials>
							<Card.Text>Ukraine, Lviv</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<div className="mt-3">
						<div className="mb-2">
							<Button
								variant="outline-danger"
								size="sm"
								style={{ 'border-radius': '25px' }}
							>
								DELETE FROM CONTACTS
							</Button>
						</div>
						<div>
							<Button
								variant="outline-primary"
								size="sm"
								style={{ 'border-radius': '25px' }}
							>
								ADD TO FAVORITES
							</Button>
						</div>
					</div>
				</Col>
			</Row>
		</Fragment>
	);
};

export default PeopleListView;
