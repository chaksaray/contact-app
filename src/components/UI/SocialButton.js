import './SocialButton.css';

const SocialButton = (props) => {
	return (
		<a
			href={props.link}
			target="_blank"
			rel="noopener noreferrer"
			className="btn btn-outline-primary btn-sm"
		>
			{props.children}
		</a>
	);
};

export default SocialButton;
