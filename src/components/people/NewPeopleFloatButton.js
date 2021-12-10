import { Link } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';
import styles from './NewPeopleFloatButton.module.css';

const NewPeopleFloatButton = () => {
	return (
		<Link to="/new-people" className={styles['float-button']}>
			<span className={styles['add-text']}>
				<BsFillPencilFill />
			</span>
		</Link>
	);
};

export default NewPeopleFloatButton;
