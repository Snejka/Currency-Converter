import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List'; 
import { changeTheme } from '../actions/theme';

const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $green: '$primaryGreen',
    $orange: '$primaryOrange',
    $purple: '$primaryPurple'
    
});

class Themes extends Component {

    static propTypes = {
        navigation: PropTypes.object,
    }
    
    handleThemePress = (color) => {
        this.props.changeTheme(color);
        this.props.navigation.goBack(null);
    }

    render() {
        return (
            <ScrollView>
                <StatusBar barStyle='default' translucent={false}/> 
                    <ListItem 
                        text='Blue' 
                        onPress={() => this.handleThemePress(styles.$blue)} 
                        selected
                        checkmark={this.props.color === styles.$blue}
                        iconBackground={styles.$blue}
                    />
                    <Separator />
                    <ListItem 
                        text='Orange' 
                        onPress={() => this.handleThemePress(styles.$orange)} 
                        selected
                        checkmark={this.props.color === styles.$orange}
                        iconBackground={styles.$orange}
                    />
                    <Separator />
                    <ListItem 
                        text='Green' 
                        onPress={() => this.handleThemePress(styles.$green)} 
                        selected
                        checkmark={this.props.color === styles.$green}
                        iconBackground={styles.$green}
                    />
                    <Separator />
                    <ListItem 
                        text='Purple' 
                        onPress={() => this.handleThemePress(styles.$purple)} 
                        selected
                        checkmark={this.props.color === styles.$purple}
                        iconBackground={styles.$purple}
                    />
                    <Separator />
            </ScrollView>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        color: state.theme.color,
    }
}

export default connect( mapStateToProps, {
    changeTheme,
})(Themes);