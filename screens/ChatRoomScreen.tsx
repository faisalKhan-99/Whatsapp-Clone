import React from 'react';// this will have backend,pull data dynamically, get messages realtime
import {Text,FlatList,ImageBackground} from 'react-native'
import {useRoute} from '@react-navigation/native'
import chatRoomData from '../data/Chats'
import ChatMessage from '../components/ChatMessage';
import BG from '../assets/images/BG.png';
import InputBox from '../components/InputBox';

const ChatRoomScreen= () =>{ //added to naviation
    const route = useRoute(); // these give param which give the id of the now open chatroom
    return(
     
     <ImageBackground style={{width:'100%', height:'100%'}} source={BG}>

  <FlatList 
  data={chatRoomData.messages}
  renderItem={ ( {item} ) => <ChatMessage message= {item}/>}
  inverted
  />

  <InputBox/>
  </ImageBackground>
 
)
}

export default ChatRoomScreen;