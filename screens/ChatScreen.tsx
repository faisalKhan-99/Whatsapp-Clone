import * as React from 'react';
import { StyleSheet,FlatList } from 'react-native';
import { View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem';
import chatRooms from '../data/ChatRooms';
import { TabBarItem } from 'react-native-tab-view';
import NewMessageButton from '../components/NewMessageButton';

 

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      {/*<ChatListItem chatRoom={chatRooms[0]}/> after the sinle component move on to flatlist*/ }
      <FlatList // displays all user messages now adding tap and see chat using CHATROOM
      style={{width:'100%'}}
      data={chatRooms}
     renderItem={( { item } )=><ChatListItem chatRoom={item}/>} 
     keyExtractor={(item)=>item.id}/>

     {/*floating bullet for new message*/}

    <NewMessageButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
