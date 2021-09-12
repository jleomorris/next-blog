import cn from 'classnames';
import styles from '../styles/Alert.module.css';

interface IProps {
  type: string;
}

const Alert: React.FC<IProps> = ({ type }) => {
  return (
    <button
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {type === 'success' ? 'success' : 'error'}
    </button>
  );
};

export default Alert;
