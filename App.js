import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ActivityIndicator, View, Image, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {

  const [visible, setVisible] = useState(false);

  const ActivityIndicatorElement = () => {
    return (
      <View style={styles.activityIndicatorStyle}>
        <Image 
        source={require('./assets/Splash-Afrika-Miniature.jpg')}
        // source={{
        //   uri: 'https://afrikaminiature.com/wp-content/uploads/2021/04/Final-Logo-55.png',
        // }}
        style={{ width: 161, height: 55, marginLeft:'auto', marginRight:'auto',marginBottom:'10%' }}
        />
        <ActivityIndicator color='gray' size='large' />
        <Text style={{textAlign:'center',marginTop:'5%'}}>Loading...</Text>
      </View>
    )
  }
  return (

    <SafeAreaView style={styles.container}>
      <WebView
        style={{ flex: 1 }}
        source={{ uri: 'https://afrikaminiature.com/' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onLoadStart={() => setVisible(true)}
        onLoad={() => setVisible(false)}
      />
      {visible ? <ActivityIndicatorElement /> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityIndicatorStyle: {
    flex: 1,
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    backgroundColor:'white'
  }
});
