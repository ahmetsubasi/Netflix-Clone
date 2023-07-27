import { TouchableOpacity, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  View } from 'react-native'
import React from 'react'


const Series = () => {
  return (
    <ScrollView style={styles.scroll}>
   <TouchableOpacity style={styles.series}>
    <Image style={styles.banner} source={require('./images/witcher.png')} /> 
    <View style={styles.text}>
    <Text style={styles.title}>The Witcher</Text>
    <Text style={{color:'gray', textAlign:'center'}}>
    It has survived not only five centuries, 
    but also the leap into electronic 
    typesetting, remaining essentially unchanged.</Text>
    </View>
    </TouchableOpacity>
   <TouchableOpacity style={styles.series}>
    <Image style={styles.banner} source={require('./images/narcos.png')} />
    <Text style={styles.title}>Narcos</Text> 
    <View style={styles.text}>
    <Text style={{color:'gray',  textAlign:'center'}}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book</Text>
    </View>
    </TouchableOpacity>
   <TouchableOpacity style={styles.series}>
    <Image style={styles.banner} source={require('./images/blackaf.png')} /> 
    <Text style={styles.title}>#blackAF</Text>
    <View style={styles.text}>
    <Text style={{color:'gray', textAlign:'center'}}>
    Contrary to popular belief, Lorem Ipsum is not simply random text. 
    It has roots in a piece of classical Latin literature from 45 BC, 
    making it over 2000 years old.
    </Text>
    </View>
    </TouchableOpacity>
   <TouchableOpacity style={styles.series}>
    <Image style={styles.banner} source={require('./images/peaky.png')} /> 
    <Text style={styles.title}>Peaky Blinders</Text>
    <View style={styles.text}>
    <Text style={{color:'gray',  textAlign:'center'}}>
    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
    Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced 
    in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
    </Text>
    </View>
    </TouchableOpacity>
   <TouchableOpacity style={styles.series}>
    <Image style={styles.banner} source={require('./images/Squid.png')} /> 
    <Text style={styles.title}>Squid Game</Text>
    <View style={styles.text}>
    <Text style={{color:'gray',  textAlign:'center'}}>
    There are many variations of passages of Lorem Ipsum available, but the majority 
    have suffered alteration in some form, by injected humour, or randomised words 
    which don't look even slightly believable. If you are going to use a passage of 
    Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
    </Text>
    </View>
    </TouchableOpacity>
   <TouchableOpacity style={styles.series}>
    <Image style={styles.banner} source={require('./images/wednesday.png')} /> 
    <Text style={styles.title}>Wednesday</Text>
    <View style={styles.text}>
    <Text style={{color:'gray',  textAlign:'center'}}>
    Many desktop publishing packages and web page editors now use Lorem Ipsum as their 
    default model text, and a search for 'lorem ipsum' will uncover many web sites still 
    in their infancy. 
    </Text>
    </View>
    </TouchableOpacity>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  scroll:{
    backgroundColor:'black'
  },
  series:{
    flex: 1,
    padding: 16,
    alignItems: 'center'
  },
  title: {
    alignSelf:'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'white'
  },
  text:{
    fontSize: 12,
    lineHeight: 24,
    textAlign: 'justify'
  },
  banner:{
    marginTop:15,
    width:100,
    height:200,
    borderRadius:20,
    marginBottom: 16,
  }
})  

export default Series;