import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const styles = EStyleSheet.create({
    $underlayColor: '$border',

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 48,
        paddingHorizontal: 20,
        backgroundColor: '$white',
    },
    text: {
        fontSize: 16,
        color: '$darkText',
    },
    separator: {
        marginHorizontal: 20,
        backgroundColor: '$border',
        flex: 1,
        height: StyleSheet.hairlineWidth,
    },
    icon: {
        backgroundColor: 'transparent',
        width: 25,
        height: 25,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconVisible: {
        backgroundColor: '$primaryBlue',
    },
    checkmark: {
        width: 15,
    }
});

export default styles;