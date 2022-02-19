import React from 'react';
import PropTypes from 'prop-types';
import { SectionWrapper } from './Section.styles';

function Section({ title, children }) {
  return (
    <SectionWrapper>
      <h1>{title}</h1>
      {children}
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;