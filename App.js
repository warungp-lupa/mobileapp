import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  // Fungsi yang dipanggil ketika tombol diklik
  const handlePress = () => {
    alert('Selamat Datang di Aplikasi!');
  };

  return (
    <View style={styles.container}>
      <Text>Welcome Palupi</Text>
      {/* Menambahkan tombol dengan event handler pada saat diklik */}
      <Button
        title="Klik Untuk Masuk"
        onPress={handlePress}
        color="#ffffff" // Mengubah warna teks tombol (iOS) atau background tombol (Android)
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007bff', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    color: 'white',
  },
});

