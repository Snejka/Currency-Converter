import { createStackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

//Home Stack
const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null,
        }
    },
    Options: {
        screen: Options,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        })
    },
    Themes: {
        screen: Themes,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        })
    }
}, {
    
    cardStyle: { paddingTop: StatusBar.currentHeight },
}, {
    headerMode: 'screen',
});

//Currency Stack
const CurrencyListStack = createStackNavigator({
    CurrencyList: {
        screen: CurrencyList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        })
    }
})

//Default Stack
export default createStackNavigator({
    Home: {
        screen: HomeStack,
    },
    CurrencyList: {
        screen: CurrencyListStack,
    }
}, {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: 'none'
});