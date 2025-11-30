import React from 'react';
import {
  SafeAreaViewBase,
  StatusBar,
  View,
  Text,
  StyleSheet,
} from 'react-native';

type LeadTile = {
  id: string;
  title: string;
  subtitle: string;
};

const LEAD_TILES: LeadTile[] = [
  { id: '1', title: 'Lead nuevo', subtitle: 'Pendiente de contacto' },
  { id: '2', title: 'Lead caliente', subtitle: 'Alta probabilidad' },
  { id: '3', title: 'Lead tibio', subtitle: 'En seguimiento' },
  { id: '4', title: 'Lead frío', subtitle: 'Baja respuesta' },
  { id: '5', title: 'Lead ganado', subtitle: 'Convertido a cliente' },
  { id: '6', title: 'Lead perdido', subtitle: 'Descartado' },
];

const LeadsScreen: React.FC = () => {
  return (
    <SafeAreaViewBase style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        {LEAD_TILES.map(tile => (
          <View key={tile.id} style={styles.card}>
            <Text style={styles.cardTitle}>{tile.title}</Text>
            <Text style={styles.cardSubtitle}>{tile.subtitle}</Text>
          </View>
        ))}
      </View>
    </SafeAreaViewBase>
  );
};

export default LeadsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#050509',
  },
  container: {
    flex: 1,
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    height: '30%',
    backgroundColor: '#181820',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    justifyContent: 'center',
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  cardSubtitle: {
    color: '#9FA3B2',
    fontSize: 13,
  },
});
