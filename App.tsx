import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function getRandomInt(min: number, max: number) {
  return min + Math.floor(Math.random() * (max - min));
}
const rows = Array.from({length: 100}).map((): [number, number, number] => [
  getRandomInt(1, 100),
  getRandomInt(50, 200),
  getRandomInt(1, 20),
]);

function renderItem(info: ListRenderItemInfo<[number, number, number]>) {
  return <ListItem row={info.item} />;
}

function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        contentContainerStyle={styles.flatlistContent}
        renderItem={renderItem}
        data={rows}
      />
    </SafeAreaView>
  );
}

interface ListItemProps {
  row: [number, number, number];
}
function ListItem({row}: ListItemProps) {
  return (
    <View style={styles.itemContainer}>
      {row.map((value, index) => (
        <View key={index} style={styles.item}>
          <Text
            style={styles.numberText}
            numberOfLines={1}
            adjustsFontSizeToFit>
            {value}
          </Text>
          <Text style={styles.textText}>some text</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  flatlistContent: {
    gap: 8,
    margin: 8,
  },
  itemContainer: {
    backgroundColor: 'lightblue',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 4,
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  item: {
    flexShrink: 1,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'baseline',
  },
  numberText: {
    flexShrink: 1,
    fontSize: 32,
    fontWeight: 'bold',
  },
  textText: {
    fontSize: 18,
  },
});

export default App;
