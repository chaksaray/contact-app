import { Fragment } from 'react';
import HeaderFilter from '../components/people/HeaderFilter';
import PeopleGridView from '../components/people/PeopleGridView';

const People = () => {
    return (
        <Fragment>
            <HeaderFilter />
            <PeopleGridView />
        </Fragment>
    );
};

export default People;
