import * as React from 'react';
import PropTypes from 'prop-types';

import styles from '../../../styles/utils/colors.scss';

export const IconClose = ({size = 24, color = 'black1'}) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <g fill={styles[color]}>
      <path
        d={`M23.9,2.5L14.4,12l9.5,9.5l-2.4,2.4L12,14.4l-9.5,9.5l-2.4-2.4L9.6,
        12L0.1,2.5l2.4-2.4L12,9.6l9.5-9.5L23.9,2.5z`}
      />
    </g>
  </svg>
);

IconClose.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};
