import React from 'react';
import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsItem,
  Results,
  Persentage,
} from './Statistics.styles';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <StatisticsList>
      <StatisticsItem>Good: {good}</StatisticsItem>
      <StatisticsItem>Neutral: {neutral}</StatisticsItem>
      <StatisticsItem>Bad: {bad}</StatisticsItem>
      <Results>Total: {total}</Results>
      <Persentage>Positive percentage: {positivePercentage}%</Persentage>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;