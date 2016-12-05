[![Language](https://img.shields.io/badge/language-ES%206-orange.svg)](https://github.com/lukehoban/es6features#readme)
[![Platforms](https://img.shields.io/badge/platform-iOS%20%7C%20Android-lightgrey.svg)](http://facebook.github.io/react-native/docs/getting-started.html)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/RayChooi)

# React Native Analog Clock


##### React native analog clock using setInterval and Javascript styling.

<img src="https://github.com/raymondchooi/react-native-analog-clock/blob/master/img/analogClockPreview.gif" alt="Analog Clock preview" width="320px"></img>

## Install

This component is built with `React Native 0.39+` and works for Android and iOS.

**Import AnalogClock.js**
```javascript
import AnalogClock from './AnalogClock';
```

## Usage

**Basic Usage**

```javascript
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
```

**Add a background image**

Uncomment the following in the AnalogClock.js render function and change image
source to path to your image.

```javascript
<Image
  style={{width: this.props.clockSize - this.props.clockBorderWidth*2,
    height: this.props.clockSize - this.props.clockBorderWidth*2}}
  resizeMode='stretch'
  source={require('./img/clockBack.png')}
/>
```
## Properties

| Property name        | Type      | Default | Description                        |
| ---                  | ---       | ---     | ---                                |
| **clockSize**        | *number*  | 270     | The size of the clock frame        |
| **clockBorderColor** | *string*  | 'black' | The color of the frame border      |
| **clockBorderWidth** | *number*  | 7       | The width of the frame border      |
| **clockCentreColor** | *string*  | 'black' | The color of the clock centre      |
| **clockCentreSize**  | *number*  | 15      | The size of the clock centre       |
| **hourHandColor**    | *string*  | 'black' | The color of the hour hand         |
| **hourHandCurved**   | *boolean* | true    | Curved hour hand tip               |
| **hourHandLength**   | *number*  | 70      | The length of the hour hand        |
| **hourHandWidth**    | *number*  | 5.5     | The width of the hour hand         |
| **hourHandOffset**   | *number*  | 0       | Hour hand offset from the centre   |
| **minuteHandColor**  | *string*  | 'black' | The color of the minute hand       |
| **minuteHandCurved** | *boolean* | true    | Curved minute hand tip             |
| **minuteHandLength** | *number*  | 100     | The length of the minute hand      |
| **minuteHandWidth**  | *number*  | 5       | The width of the minute hand       |
| **minuteHandOffset** | *number*  | 0       | Minute hand offset from the centre |
| **secondHandColor**  | *string*  | 'black' | The color of the second hand       |
| **secondHandCurved** | *boolean* | false   | Curved hour second tip             |
| **secondHandLength** | *number*  | 120     | The length of the second hand      |
| **secondHandWidth**  | *number*  | 2       | The width of the second hand       |
| **secondHandOffset** | *number*  | 0       | Second hand offset from the centre |



## License

GNU General Public License v3.0
