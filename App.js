import React from 'react';
import { Text, View } from 'react-native';

export default () => (<View style={{
  width: '100%',
  height: '100%',
  backgroundColor: 'pink',
  display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
}}>
  <Text style={{color: 'red'}}>Hello funny world!</Text>
</View>)
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello world!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
