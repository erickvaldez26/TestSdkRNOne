// src/screens/ItemsScreen.tsx
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import { fetchItems, Item } from '../api/fakeApi';
import { SkeletonItem } from '../components/SkeletonItem';
import { ListItem } from '../components/ListItem';

export const ItemsScreen: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadData = async (isRefresh = false) => {
    if (!isRefresh) {
      setLoading(true);
      setError(null);
    } else {
      setRefreshing(true);
    }

    try {
      const response = await fetchItems();
      setItems(response);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      setError('Ocurrió un error al obtener los datos.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const renderSkeleton = () => (
    <FlatList
      data={Array.from({ length: 8 })}
      keyExtractor={(_, index) => `skeleton-${index}`}
      renderItem={() => <SkeletonItem />}
      contentContainerStyle={styles.listContent}
    />
  );

  const renderList = () => (
    <FlatList
      data={items}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <ListItem title={item.title} description={item.description} />
      )}
      contentContainerStyle={styles.listContent}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => loadData(true)}
        />
      }
      ListEmptyComponent={
        !loading && !error ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No hay elementos para mostrar.</Text>
          </View>
        ) : null
      }
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Lista Embebible</Text>
        <Text style={styles.headerSubtitle}>
          Lista con skeleton y servicio simulado
        </Text>
      </View>

      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      {loading ? renderSkeleton() : renderList()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#777777',
    marginTop: 4,
  },
  listContent: {
    paddingVertical: 8,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#EEEEEE',
    marginLeft: 68, // dejar avatar alineado
  },
  errorContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#FFEBEE',
  },
  errorText: {
    color: '#C62828',
  },
  emptyContainer: {
    padding: 16,
    alignItems: 'center',
  },
  emptyText: {
    color: '#777777',
  },
});
