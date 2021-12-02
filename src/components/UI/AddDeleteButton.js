import { Button } from 'react-bootstrap';

const AddDeleteButton = (props) => {
	return (
		<div className="mb-2">
			<Button
				variant={`${props.variant} text-uppercase`}
				size="sm"
				style={{ borderRadius: '25px' }}
				onClick={props.onClick}
			>
				{props.children}
			</Button>
		</div>
	);
};

export default AddDeleteButton;
