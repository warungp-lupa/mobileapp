import React, { useState, useEffect } from 'react';
import { View, Button, FlatList, Text } from 'react-native';
import MenuList from '../components/MenuList';
import RestaurantAPI from '../api/RestaurantAPI';

export default function OrderScreen({ navigation }) {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    RestaurantAPI.getMenuItems().then(setMenuItems);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MenuList items={menuItems} />
      <Button
        title="Lanjutkan ke Pembayaran"
        onPress={() => navigation.navigate('Payment')}
      />
    </View>
  );
}
