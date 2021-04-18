import * as React from 'react';
import { StyleSheet,FlatList } from 'react-native';
import { View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem';
import users from '../data/Users';
import ContactListItem from '../components/ContactListItem';

 

export default function ContactsScreen() {
  return (
    <View style={styles.container}>
      {/*<ChatListItem chatRoom={chatRooms[0]}/> after the sinle component move on to flatlist*/ }
      <FlatList // displays all user messages now adding tap and see chat using CHATROOM
      style={{width:'100%'}}
      data={users}
     renderItem={( { item } )=><ContactListItem user={item}/>} 
     keyExtractor={(item)=>item.id}/>

     {/*floating bullet for new message*/}

    
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
