import style from './Statistics.module.css';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';

export const StatisticsItem = ({ total, title, icon }) => {
  return (
    <li className={style.item}>
      <IconContext.Provider value={{ color: '#29a14f', size: '30' }}>
        {icon}
      </IconContext.Provider>
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </li>
  );
};

StatisticsItem.propTypes = {
  total: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
