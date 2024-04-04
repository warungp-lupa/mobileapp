import React from 'react';
import { View, Text, FlatList } from 'react-native';

const MenuList = ({ items }) => {
  return (
    <FlatList
      data={items}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>{item.name} - ${item.price}</Text>
        </View>
      )}
    />
  );
};

export default MenuList;