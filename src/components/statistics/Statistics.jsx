import PropTypes from 'prop-types';
import {
  StaticticsContainer,
  DataTitle,
  StatList,
  Item,
  ItemLabel,
  ItemPercentage,
} from './Statistics.styles';

const getRandomHexColor = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

export const Statistics = ({ title, stats }) => {
  return (
    <StaticticsContainer className="statictics">
      {title && <DataTitle className="title">{title}</DataTitle>}
      <StatList className="stat-list">
        {stats.map(stat => (
          <Item color={getRandomHexColor()} key={stat.id} className="item">
            <ItemLabel className="label">{stat.label}</ItemLabel>
            <ItemPercentage className="percentage">
              {stat.percentage}%
            </ItemPercentage>
          </Item>
        ))}
      </StatList>
    </StaticticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
