import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';

import { Icon } from './';

import styles from './styles';

const ListItem = ({text, onPress, selected = false, checkmark = true, visible = true, customIcon = null, iconBackground }) => (

    <TouchableHighlight underlayColor={styles.$underlayColor} onPress={onPress} >
        <View style={styles.row}>
            <Text>{text}</Text>
            { selected ? <Icon checkmark={checkmark} visible={visible} iconBackground={iconBackground}/> : <Icon /> }
            { customIcon }
        </View>
    </TouchableHighlight>
);

ListItem.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    selected: PropTypes.bool,
    checkmark: PropTypes.bool,
    visible: PropTypes.bool,
    customIcon: PropTypes.element,
    iconBackground: PropTypes.string,
};

export default ListItem;