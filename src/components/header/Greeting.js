import { Fragment } from 'react';

import styles from './Greeting.module.css';
import { Image } from 'react-bootstrap';

const Greeting = () => {
	return (
		<Fragment>
			<div className={styles.greeting}>
				<div className="mt-2">
					<span className={styles.welcometxt}>Welcome,</span>
					<div className="d-flex justify-content-between">
						<Image
							src="/assets/images/profile.jpg"
							roundedCircle
							style={{ width: '3rem', marginRight: '10px' }}
						/>
						<div className="mt-2">
							<h4>John Doe</h4>
						</div>
					</div>
				</div>
				<div className="">
					<Image
						src="/assets/images/logo.png"
						roundedCircle
						style={{
							width: '4rem',
							marginLeft: '10px',
							marginTop: '10px',
						}}
					/>
				</div>
			</div>
		</Fragment>
	);
};

export default Greeting;
