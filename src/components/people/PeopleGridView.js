import { Fragment } from 'react';
import Socials from './Socials';
import SocialButton from '../UI/SocialButton';

import { CardGroup, Card, Image, Button } from 'react-bootstrap';
import {
    BsFacebook,
    BsLinkedin,
    BsTwitter,
    BsSkype,
    BsInstagram,
} from 'react-icons/bs';

const PeopleGridView = (props) => {
    return (
        <Fragment>
            <CardGroup>
                <Card
                    className="text-center"
                    style={{ 'border-bottom': 'none' }}
                >
                    <Card.Body>
                        <Image
                            src="/assets/images/img1.jpg"
                            roundedCircle
                            style={{ width: '8rem' }}
                        />
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
                    </Card.Body>
                </Card>
                <Card
                    className="text-center"
                    style={{ 'border-bottom': 'none' }}
                >
                    <Card.Body>
                        <Image
                            src="/assets/images/img2.jpg"
                            roundedCircle
                            style={{ width: '8rem' }}
                        />
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
                        </Socials>
                        <Card.Text>Ukraine, Lviv</Card.Text>
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
                    </Card.Body>
                </Card>
                <Card
                    className="text-center"
                    style={{ 'border-bottom': 'none' }}
                >
                    <Card.Body>
                        <Image
                            src="/assets/images/img3.png"
                            roundedCircle
                            style={{ width: '8rem' }}
                        />
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
                        </Socials>
                        <Card.Text>Ukraine, Lviv</Card.Text>
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
                    </Card.Body>
                </Card>
                <Card
                    className="text-center"
                    style={{ 'border-bottom': 'none' }}
                >
                    <Card.Body>
                        <Image
                            src="/assets/images/img1.jpg"
                            roundedCircle
                            style={{ width: '8rem' }}
                        />
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
                    </Card.Body>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card
                    className="text-center"
                    style={{ 'border-bottom': 'none' }}
                >
                    <Card.Body>
                        <Image
                            src="/assets/images/img1.jpg"
                            roundedCircle
                            style={{ width: '8rem' }}
                        />
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
                        </Socials>
                        <Card.Text>Ukraine, Lviv</Card.Text>
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
                    </Card.Body>
                </Card>
                <Card
                    className="text-center"
                    style={{ 'border-bottom': 'none' }}
                >
                    <Card.Body>
                        <Image
                            src="/assets/images/img2.jpg"
                            roundedCircle
                            style={{ width: '8rem' }}
                        />
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
                    </Card.Body>
                </Card>
                <Card
                    className="text-center"
                    style={{ 'border-bottom': 'none' }}
                >
                    <Card.Body>
                        <Image
                            src="/assets/images/img3.png"
                            roundedCircle
                            style={{ width: '8rem' }}
                        />
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
                    </Card.Body>
                </Card>
                <Card
                    className="text-center"
                    style={{ 'border-bottom': 'none' }}
                >
                    <Card.Body>
                        <Image
                            src="/assets/images/img1.jpg"
                            roundedCircle
                            style={{ width: '8rem' }}
                        />
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
                        </Socials>
                        <Card.Text>Ukraine, Lviv</Card.Text>
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
                    </Card.Body>
                </Card>
            </CardGroup>
        </Fragment>
    );
};

export default PeopleGridView;
