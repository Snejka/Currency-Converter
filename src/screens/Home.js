import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import { Header } from '../components/Header';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { connectAlert } from '../components/Alert';

import { swapCurrencies, changeCurrencyAmount, getInitialConversion } from '../actions/currencies';

class Home extends Component {

    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        amount: PropTypes.number,
        conversionRate: PropTypes.number,
        isFetching: PropTypes.bool,
        color: PropTypes.string,
        alertWithType: PropTypes.func,
        currencyError: PropTypes.string,
    }

    componentWillMount() {
        this.props.getInitialConversion();
    }

    handlePressBaseCurrency = () => {
        this.props.navigation.navigate('CurrencyList', {title: 'Base Currency', type: 'base'});
    }

    handlePressQuoteCurrency = () => {
        this.props.navigation.navigate('CurrencyList', {title: 'Quote Currency', type: 'quote'});
    }

    handleChangeText = (amount) => {
        //TODO: make this acctually works with this.props.dispatch
        this.props.changeCurrencyAmount(amount);
    }

    handleSwap = () => {
        //TODO: make this acctually works with this.props.dispatch
        this.props.swapCurrencies();
    }

    handleOptionsPress = () => {
         this.props.navigation.navigate('Options', {title: 'Options'});
    }

    render() {

        let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);

        if(this.props.isFetching) {
            quotePrice = '...';
        }

        return (
            <Container backgroundColor={this.props.color}>
                <StatusBar translucent={false} barStyle='light-content'/>
                <Header onPress={this.handleOptionsPress} />

                <KeyboardAvoidingView behavior='padding'>
                    <Logo tintColor={this.props.color}/>
                    <InputWithButton 
                        buttonText={this.props.baseCurrency} 
                        onPress={this.handlePressBaseCurrency} 
                        defaultValue={this.props.amount.toString()}
                        keyboardType='numeric'
                        onChangeText={this.handleChangeText}
                        textColor={this.props.color} />
                    <InputWithButton 
                        buttonText={this.props.quoteCurrency} 
                        onPress={this.handlePressQuoteCurrency} 
                        editable={false}
                        defaultValue={quotePrice}
                        textColor={this.props.color} />
                    <LastConverted 
                        base={this.props.baseCurrency}
                        quote={this.props.quoteCurrency}
                        date={this.props.lastConvertedDate}
                        conversionRate={this.props.conversionRate} />
                    <ClearButton text='Reverse Currencies' onPress={this.handleSwap} />
                </KeyboardAvoidingView>
            </Container>
        )
    };

    componentDidUpdate() {
        this.props.currencyError && this.props.alertWithType('error', 
                                 'Error!', 
                                 this.props.currencyError);
    }
}

const mapStateToProps = (state) => {
    
    const baseCurrency = state.currencies.baseCurrency;
    const quoteCurrency = state.currencies.quoteCurrency;
    const amount = state.currencies.amount;
    //Selectors
    const conversionSelector = state.currencies.conversions[baseCurrency] || {};
    const rates = conversionSelector.rates || {};
    
    const conversionRate = rates[quoteCurrency] || 0;
    const isFetching = conversionSelector.isFetching;
    const lastConvertedDate = conversionSelector.date ? new Date(conversionSelector.date) : new Date();
    const color = state.theme.color;
    const currencyError = state.currencies.error;

    return {
        baseCurrency,
        quoteCurrency,
        amount,
        conversionRate,
        isFetching,
        lastConvertedDate,
        color,
        currencyError,
    }
}

export default connect( mapStateToProps, {
    changeCurrencyAmount, 
    swapCurrencies,
    getInitialConversion,
})( connectAlert(Home) );