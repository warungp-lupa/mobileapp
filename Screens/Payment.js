import React from 'react';
import { View, Text, Button } from 'react-native';

export default function PaymentScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Proses Pembayaran</Text>
      {/* Implementasi pembayaran akan sangat bergantung pada penyedia layanan pembayaran yang Anda pilih. */}
      <Button
        title="Bayar"
        onPress={() => alert('Pembayaran Berhasil!')}
      />
    </View>
  );
}
