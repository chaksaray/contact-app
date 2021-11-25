import PeopleGridView from './PeopleGridView';
// import PeopleListView from './PeopleListView';
import styles from './PeopleWrapper.module.css';

const PeopleWrapper = (props) => {
    return (
        <div className={styles.peoplewrapper}>
            <PeopleGridView />
            {/* <PeopleListView /> */}
        </div>
    );
};

export default PeopleWrapper;
