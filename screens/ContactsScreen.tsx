import * as React from 'react';
import {useEffect,useState} from 'react'
import { StyleSheet,FlatList } from 'react-native';
import { View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem';
//import users from '../data/Users'; //not used after API integration,users now used come from state
import ContactListItem from '../components/ContactListItem';
import { API, graphqlOperation } from 'aws-amplify'
import { listUsers } from '../src/graphql/queries';
 

export default function ContactsScreen() {
 
  const [users,setUsers] = useState([]) //we have to save the data coming from api to make chages in screen
 
  useEffect(()=>{
    const fetchUsers = async() =>{
      try{
        const usersData = await API.graphql(
          graphqlOperation(
            listUsers
        )
        )
            setUsers(usersData.data.listUsers.items);
      }catch(e){
        console.log(e)
      }
    }
    fetchUsers();

  },[])




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
