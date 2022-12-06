import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity ,TextInput, FlatList } from 'react-native';
import React,{useState} from 'react';
import Unorderedlist from 'react-native-unordered-list';
// import "./Component/style.css";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    console.log("working", inputText)
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <View style={styles.container}>
      {/* first container */}
      <View style={styles.containerInside}>
      <View>
      <Text style={styles.textHeading}>Add Items</Text>
      </View>
      <StatusBar style="auto" />
      <View style={styles.spanning}> 
      <TextInput style={styles.input} onChangeText={newText => setInputText(newText)} type="text" defaultValue={inputText}/>
      <TouchableOpacity
        style={styles.button}
        onPress={addItem}
      >
        <Text style={{fontSize: 20}}>Add</Text>
        {/* second container */}
      </TouchableOpacity>
      </View>
      </View>
      <View style={styles.containerNext}>
      <Text style={styles.textHeadingNext}>To-Do List</Text>
      <View>
      <FlatList data={items}
       renderItem={({todoItem, index})=>(
        // <Text style={styles.item} key={index} >{todoItem}</Text>
        console.log(todoItem,index)
       )}
      />
      
      {/* {items.map((todoItem, index) => (
            <Unorderedlist key={index} id={index} style={styles.ulist}
            bulletUnicode={0x25AA}
            onChecked={deleteItem}
            >
            <Text key={index} style={styles.item} >{todoItem}</Text></Unorderedlist>
          ))
          } */}
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 15,
    marginTop: 5,
    fontSize: 25,
  },
  ulist: {
    marginTop: 5,
    fontSize: 35
  },
  containerNext: {
    paddingTop: 30,
  },
  spanning: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textHeading: {
    backgroundColor: "#fdcb6e",
    height: 40,
    width: 300,
    textAlign: 'center',
    fontSize: 30,
    borderRadius: 10,
  },
  textHeadingNext: {
    backgroundColor: "#fdcb6e",
    height: 80,
    width: 300,
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 40,
    borderRadius: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#F49D1A",
    margin: 12,
    padding: 10,
    width: 75,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
  },
  input: {
    height: 50,
    width: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    fontSize:20,
  },
  containerInside: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15,
    paddingTop: 15,
  },
});
