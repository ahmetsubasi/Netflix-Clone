import { View,
   Text, 
   StyleSheet, 
   ScrollView, 
   Image, 
   TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const List = () => {
  return (
    <ScrollView style={styles.scroll}>
    <View style={styles.direction}>
    <View style={styles.text}>
      <Text style={{color:'white'}}>TV Shows</Text>
    </View>
    <View style={styles.text}>
      <Text style={{color:'white'}}>Movies</Text>
    </View>
    <View style={styles.text}>
      <Text style={{color:'white'}}>Started</Text>
    </View>
    <View style={styles.text}>
      <Text style={{color:'white'}}>Add</Text>
    </View>
    </View>
    <Text style={{color:'white', fontWeight:'bold', marginTop:10, marginHorizontal:5}}>Date Added to List</Text>
    <TouchableOpacity style={styles.area}>
    <Image style={styles.img} source={require('./images/fullswing.png')} />
    <Text style={{color:'gray', fontWeight:'bold', paddingTop:50, paddingLeft:10}}>Full Swing</Text>
    <AntDesign name="play" size={24} color="white" style={{marginTop:45,marginHorizontal:170}} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.area}>
    <Image style={styles.img} source={require('./images/blacklist.png')} />
    <Text style={{color:'gray', fontWeight:'bold', paddingTop:50, paddingLeft:10}}>Black List</Text>
    <AntDesign name="play" size={24} color="white" style={{marginTop:45,marginHorizontal:172}} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.area}>
    <Image style={styles.img} source={require('./images/wednesday.png')} />
    <Text style={{color:'gray', fontWeight:'bold', paddingTop:50, paddingLeft:10}}>Wednesday</Text>
    <AntDesign name="play" size={24} color="white" style={{marginTop:45,marginHorizontal:157}} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.area}>
    <Image style={styles.img} source={require('./images/Squid.png')} />
    <Text style={{color:'gray', fontWeight:'bold', paddingTop:50, paddingLeft:10}}>Squid Game</Text>
    <AntDesign name="play" size={24} color="white" style={{marginTop:45,marginHorizontal:155}} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.area}>
    <Image style={styles.img} source={require('./images/stranger.png')} />
    <Text style={{color:'gray', fontWeight:'bold', paddingTop:50, paddingLeft:10}}>Stranger Things</Text>
    <AntDesign name="play" size={24} color="white" style={{marginTop:45,marginHorizontal:125}} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.area}>
    <Image style={styles.img} source={require('./images/our.png')} />
    <Text style={{color:'gray', fontWeight:'bold', paddingTop:50, paddingLeft:10}}>Our Planet</Text>
    <AntDesign name="play" size={24} color="white" style={{marginTop:45,marginHorizontal:160}} />
    </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll:{
    backgroundColor:'black'
  },
  direction:{
    flexDirection:'row'
  },
  text:{
    width:80,
    height:30,
    padding:6,
    marginTop:5,
    borderWidth:1,
    borderRadius:'50%',
    borderColor:'white',
    marginHorizontal:7,
    alignItems:'center',
    backgroundColor:'black'
  },
  area:{
    flexDirection:'row',
    marginTop:10,
    marginLeft:5
  },
  img:{
    width:75,
    height:100,
    borderRadius:10
    
  }
})

export default List