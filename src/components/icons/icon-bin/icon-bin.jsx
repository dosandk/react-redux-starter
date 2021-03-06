import * as React from 'react';
import PropTypes from 'prop-types';

import styles from '../../../styles/utils/colors.scss';

export const IconBin = ({size = 24, color = 'black1'}) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <g fill={styles[color]}>
      <path
        d={`M19.1,3.2h-3.3V1.7c0-1.2-0.4-1.5-1.5-1.5H9.7c-1,0-1.5,0.5-1.5,
        1.5v1.5H4.9c-0.7,0-1.2,0.5-1.2,1.1s0.5,1.1,1.2,1.1h14.2
        c0.7,0,1.2-0.5,1.2-1.1C20.3,3.7,19.8,3.2,19.1,3.2z
        M14.3,3.2H9.7V1.7h4.5v1.5H14.3z M3.6,7.2l1.6,14.5c0,0.1,0.1,0.2,0.1,0.4
        c0.1,0.2,0.2,0.5,0.4,0.7c0.5,0.6,1.3,1,2.3,1h7.9c1,0,1.7-0.4,
        2.3-1c0.2-0.2,0.3-0.5,0.4-0.7s0.1-0.3,0.1-0.4l1.6-14.5L3.6,7.2
        L3.6,7.2z M17.3,21.4C17.3,21.4,17.3,21.5,17.3,21.4c-0.1,
        0.2-0.2,0.3-0.2,0.5c-0.2,0.3-0.6,0.5-1.1,0.5H8.1
        c-0.5,0-0.9-0.2-1.1-0.5c-0.1-0.1-0.2-0.2-0.2-0.4v-0.1L5.3,8.6h13.5L17.3,21.4z`}
      />
    </g>
  </svg>
);

IconBin.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};
