import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        width:"100%",
        justifyContent:'space-between',
        padding:10,
    },
    leftContainer:{
        flexDirection: 'row',

    },
avatar:{
    width:60,
    height:60,
    marginRight:15,
    borderRadius:5,
    
},
midContainer:{
    justifyContent:'space-around',

},
username:{
    fontWeight:'bold',
    fontSize:16,
},
status:{
    fontSize:16,
    color:'grey'
},

}); 

export default styles;