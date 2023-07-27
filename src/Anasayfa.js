import { View,
   Text, 
   StyleSheet, 
   Image, 
   TouchableOpacity, 
   ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';


const Anasayfa = ({navigation}) => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.header}>
      <Image style={styles.img} source={require('./images/netflix.png')} /> 
      <TouchableOpacity
       onPress={() => navigation.navigate('Series')}>
        <Text style={{color:'white'}}>Diziler</Text>
      </TouchableOpacity>
      <TouchableOpacity  
      onPress={() => navigation.navigate('Film')}>
        <Text style={{color:'white'}}>Filmler</Text>
      </TouchableOpacity>
      <TouchableOpacity
       onPress={() => navigation.navigate('List')}>
        <Text style={{color:'white'}}>Listem</Text>
      </TouchableOpacity>
    </View>
    <Text style={styles.text}>Netflix'te Popüler</Text>
    <View style={styles.popular}>
    <TouchableOpacity>
    <Image style={styles.banner} source={require('./images/witcher.png')} /> 
    </TouchableOpacity>
    <TouchableOpacity>
    <Image style={styles.banner} source={require('./images/narcos.png')} />
    </TouchableOpacity>
    <TouchableOpacity>
    <Image style={styles.banner} source={require('./images/blackaf.png')} /> 
    </TouchableOpacity>
    </View>
    <Text style={styles.text}>Gündemdekiler</Text>
    <View style={styles.popular}>
    <TouchableOpacity>
    <Image style={styles.banner} source={require('./images/kaplankral.png')} /> 
    </TouchableOpacity>
    <TouchableOpacity>
    <Image style={styles.banner} source={require('./images/education.png')} /> 
    </TouchableOpacity>
    <TouchableOpacity>
    <Image style={styles.banner} source={require('./images/underground.png')} /> 
    </TouchableOpacity>
    </View>
    <Text style={styles.text}>Yeniden İzleyin</Text>
    <View style={styles.popular}>
    <TouchableOpacity>
    <Image style={styles.banner} source={require('./images/ozark.png')} /> 
    </TouchableOpacity>
    <TouchableOpacity>
    <Image style={styles.banner} source={require('./images/coffee.png')} /> 
    </TouchableOpacity>
    <TouchableOpacity>
    <Image style={styles.banner} source={require('./images/peaky.png')} /> 
    </TouchableOpacity>
    </View>
    <View style={styles.footer}>
    <TouchableOpacity>
    <Ionicons name="md-home-outline" size={24} color="white" />
    </TouchableOpacity>
    <TouchableOpacity>
    <Ionicons name="search" size={24} color="white" />
    </TouchableOpacity>
    <TouchableOpacity>
    <Ionicons name="planet-outline" size={24} color="white" />
    </TouchableOpacity>
    <TouchableOpacity>
    <AntDesign name="download" size={24} color="white" />
    </TouchableOpacity>
    <TouchableOpacity>
    <Foundation name="indent-more" size={24} color="white" />
    </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    scroll:{
        backgroundColor:'black'
    },  
    header:{
        width: '100%',
        height:50,
        backgroundColor:'black',
        alignItems:'center',
        flexDirection:'row',
        gap:50
    },
    img:{
        width:50,
        height:50,
        margin:5
    },
    text:{
        paddingHorizontal:10,
        fontWeight:'bold',
        color:'white',
        backgroundColor:'black',
        marginTop:5
    },
    popular:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        paddingHorizontal:30,
        backgroundColor:'black',
        marginTop:5
    },
    banner:{
        width:100,
        height:200,
        borderRadius:20
    },
    footer:{
        width:'100%',
        height:50,
        backgroundColor:'black',
        alignItems:'center',
        flexDirection:'row',
        gap:50,
        paddingHorizontal:30,
    }
})




export default Anasayfa