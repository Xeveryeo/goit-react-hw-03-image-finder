import { ColorRing } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
    return (<div className={css.loader}>
        <ColorRing
            visible={true}
            height="300"
            width="300"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#36454F', '#36454F', '#36454F', '#36454F', '#36454F']}
        /></div>)
};
export default Loader;
