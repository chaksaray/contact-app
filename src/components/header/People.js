import { Fragment } from 'react';

import { BsFillGridFill, BsDistributeVertical } from 'react-icons/bs';
import { Row, Col } from 'react-bootstrap';

const People = (props) => {
    return (
        <Fragment>
            <Row>
                <Col>
                    <h1 className={`primary-color`}>People</h1>
                </Col>
                <Col className="mt-2">
                    <h3 className="primary-color">
                        <BsFillGridFill />
                    </h3>
                </Col>
                <Col className="mt-2">
                    <h3 className="inactive-color">
                        <BsDistributeVertical />
                    </h3>
                </Col>
            </Row>
        </Fragment>
    );
};

export default People;
