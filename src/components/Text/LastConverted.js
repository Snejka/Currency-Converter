import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import moment from 'moment';

import styles from './styles';

const LastConverted = ({ date, conversionRate, base, quote }) => (
    <Text style={styles.smallText}>
        1 {base} = {conversionRate} {quote} as of {moment(date).format('MMM D YYYY')}
    </Text>
);

LastConverted.propTypes = {
    date: PropTypes.object,
    base: PropTypes.string,
    quote: PropTypes.string,
    conversionRate: PropTypes.number
}

export default LastConverted;