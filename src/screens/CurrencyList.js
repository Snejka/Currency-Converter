import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList, View, StatusBar } from 'react-native';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

import { ListItem, Separator } from '../components/List';

import currencies from '../data/currencies';

class CurrencyList extends Component {

    static propTypes = {
        navigation: PropTypes.object,
        changeBaseCurrency: PropTypes.func,
        changeQuoteCurrency: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        color: PropTypes.string,
    }

    handlePress = (currency) => {

        const { type } = this.props.navigation.state.params;

        if (type === 'base') {
            this.props.changeBaseCurrency(currency);
        } else if (type === 'quote') {
            this.props.changeQuoteCurrency(currency);
        }

        this.props.navigation.goBack(null);
    }

    render() {
        let selectedCurrency = this.props.baseCurrency;
        if (this.props.navigation.state.params.type === 'quote') {
            selectedCurrency = this.props.quoteCurrency;
        }
        
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle='default' translucent={false}/> 
                <FlatList 
                    data={currencies}
                    renderItem={({ item }) => 
                        <ListItem  
                            text={item}
                            selected={item === selectedCurrency}
                            onPress={() => this.handlePress(item)}
                            iconBackground={this.props.color}
                        />}
                    keyExtractor={(item) => item}
                    ItemSeparatorComponent={Separator} 
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const baseCurrency = state.currencies.baseCurrency;
    const quoteCurrency = state.currencies.quoteCurrency;
    const color = state.theme.color;

    return {
        baseCurrency,
        quoteCurrency,
        color,
    }
}

export default connect(mapStateToProps, {
    changeBaseCurrency, 
    changeQuoteCurrency,
})(CurrencyList);