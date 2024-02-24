import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';
import PropTypes from 'prop-types';

const icons = [
  <FaRegThumbsUp key="0" />,
  <MdPeople key="1" />,
  <MdOutlineProductionQuantityLimits key="2" />,
  <GiTreeDoor key="3" />,
];

export const Statistics = ({ stats, title }) => {
  return (
    <>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.list}>
        {stats.map(({ id, total, title }, index) => (
          <StatisticsItem
            key={id}
            total={total}
            title={title}
            icon={icons[index]}
          />
        ))}
      </ul>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};
