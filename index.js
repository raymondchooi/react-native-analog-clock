'use strict';

import React, { Component } from 'react';
import { View } from 'react-native';
import AnalogClock from './AnalogClock';

export default class ClockContainer extends Component {

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <AnalogClock
          minuteHandLength={110}
        />
      </View>
    )
  }
}
