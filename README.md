# @rnhooks/device-orientation [![Build Status](https://travis-ci.com/react-native-hooks/device-orientation.svg?branch=master)](https://travis-ci.com/react-native-hooks/device-orientation) [![Maintainability](https://api.codeclimate.com/v1/badges/66997889d9122a22f79b/maintainability)](https://codeclimate.com/github/react-native-hooks/device-orientation/maintainability)

> React Native hook for [device orientation](https://facebook.github.io/react-native/docs/dimensions#docsNav)

[Demo](./demo-orientation.gif)

### Installation

```bash
yarn add @rnhooks/device-orientation
```

### Usage

```js
import useDeviceOrientation from '@rnhooks/device-orientation';

function App() {
  const deviceOrientation = useDeviceOrientation();

  return (
    <View style={styles.container}>
      <Text style={styles.type}>Device orientation is:</Text>
      <Text style={styles.effectiveType}>{deviceOrientation}</Text>
    </View>
  );
}
```

### Output

| Name              | Values                  | Description                                    |
| ----------------- | ----------------------- | ---------------------------------------------- |
| deviceOrientation | `portrait`, `landscape` | possible values are `portrait` and `landscape` |
