import { Circles } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.Loader}>
      <Circles
        height="180"
        width="180"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      ;
    </div>
  );
}
