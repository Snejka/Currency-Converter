import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ListItem, Separator } from '../components/List';
import { connectAlert } from '../components/Alert';

const ICON_COLOR = '#868686'; 
const ICON_SIZE = 23;
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

class Options extends Component {

    static propTypes = {
        navigation: PropTypes.object,
        alertWithType: PropTypes.func
    }

    handleThemePress = () => {
        this.props.navigation.navigate('Themes', {title: 'Themes'});
    }

    handleSitePress = () => {
        Linking.openURL('http://fixer.io')
               .catch(() => this.props.alertWithType('error', 
                                                     'Sorry!', 
                                                     "Fixer.io can't be oppened right now."));
    }

    render() {
        return (
            <ScrollView>
                <StatusBar barStyle='default' translucent={false}/> 
                <ListItem 
                    text='Themes' 
                    onPress={this.handleThemePress} 
                    customIcon={ <Icon name={`${ICON_PREFIX}-arrow-forward`} size={ICON_SIZE} color={ICON_COLOR} /> }
                />
                <Separator />
                <ListItem 
                    text='Fixer.io' 
                    onPress={this.handleSitePress} 
                    customIcon={ <Icon name={`${ICON_PREFIX}-link`} size={ICON_SIZE} color={ICON_COLOR} /> }
                />
                <Separator />
            </ScrollView>
        );
    }
}

export default connectAlert(Options);