import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

import PropTypes from 'prop-types';

class IntakeFormList extends Component {
    constructor(){
        super()
        this.state = {  }
    }

    renderListItemTitle(intakeItems) {
        if(intakeItems.length) {
            return intakeItems.map((intakeItem, i) =>
                <Text key={i} >{intakeItem.title}</Text>
                // Map through array of descriptions in here to get bulletpoints
            )
        }
    }

    render() {
        return (
            <View>
                <Text>waaah</Text>
                {this.renderListItemTitle(this.props.list)}
            </View>
        );
    }
}

export default IntakeFormList;

IntakeFormList.propTypes = {
  list: PropTypes.array
}
