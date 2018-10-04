import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Text, TouchableHighlight} from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = ({buttonText, onPress, editable = true, defaultValue, keyboardType, onChangeText, textColor }) => {

    const underlay = color(styles.$buttonBackgroundColorBase)
                    .darken(styles.$buttonBackgroundColorModifier);

    const containerStyles = [styles.container]
    !editable && containerStyles.push(styles.disabled);

    const textStyles = [styles.buttonText];
    textColor && textStyles.push({color: textColor});

    return (
        <View style={containerStyles}>

            <TouchableHighlight 
                underlayColor={underlay}
                style={styles.buttonContainer} 
                onPress={onPress}>

                <Text style={textStyles}>
                    {buttonText}
                </Text>
            </TouchableHighlight>

            <View style={styles.border}/>

            <TextInput 
                style={styles.input} 
                underlineColorAndroid='transparent' 
                editable={editable}
                defaultValue={defaultValue}
                keyboardType={keyboardType}
                onChangeText={onChangeText} />
        </View>
    )
};

InputWithButton.propTypes = {
    buttonText: PropTypes.string,
    onPress: PropTypes.func,
    editable: PropTypes.bool,
    textColor: PropTypes.string,
};

export default InputWithButton;