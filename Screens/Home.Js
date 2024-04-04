import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Selamat Datang di Warung Palupi</Text>
      <Button
        title="Lihat Menu"
        onPress={() => navigation.navigate('Order')}
      />
    </View>
  );
}
