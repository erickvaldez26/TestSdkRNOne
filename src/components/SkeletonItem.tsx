// src/components/SkeletonItem.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';

export const SkeletonItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar} />
      <View style={styles.textContainer}>
        <View style={styles.lineShort} />
        <View style={styles.lineLong} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  lineShort: {
    width: '40%',
    height: 10,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginBottom: 8,
  },
  lineLong: {
    width: '80%',
    height: 10,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
  },
});
