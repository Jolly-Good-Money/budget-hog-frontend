import React from 'react';
import {Button,Text} from 'native-base';
import ScreenContainer from './ScreenContainer';

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);

        this.goToSettings = this.goToSettings.bind(this);
    }

    async goToSettings() {
        this.props.navigation.navigate('Settings');
    }

    render() {
        return (
            <ScreenContainer>
                <Text>HomeScreen!</Text>
                <Button title="Go to Settings" onPress={this.goToSettings}>
                </Button>
            </ScreenContainer>
            );
    }
}

module.exports = HomeScreen;