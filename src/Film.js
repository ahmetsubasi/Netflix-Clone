import { View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  Image} from 'react-native'
import React from 'react'

const Film = () => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
      <Image style={styles.poster} source={require('./images/underground.png')} /> 
      <View style={styles.movieInfo}>
        <Text style={styles.title}>6 Underground</Text>
        <Text style={styles.description}>"But I must explain to you how all this mistaken idea of 
        denouncing pleasure and praising pain was born and I will give you a complete account of 
        the system, and expound the actual teachings of the great explorer of the truth, the master-builder 
        of human happiness.</Text>
      </View>
      </View>
      <View style={styles.container}>
      <Image style={styles.poster} source={require('./images/spenser.png')} /> 
      <View style={styles.movieInfo}>
        <Text style={styles.title}>Spencer Kanunları</Text>
        <Text style={styles.description}> Nor again is there anyone who loves or pursues or desires to obtain pain 
        of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure 
        him some great pleasure.</Text>
      </View>
      </View>
      <View style={styles.container}>
      <Image style={styles.poster} source={require('./images/grayman.png')} /> 
      <View style={styles.movieInfo}>
        <Text style={styles.title}>The Gray Man</Text>
        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
      </View>
      </View>
      <View style={styles.container}>
      <Image style={styles.poster} source={require('./images/dontlookup.png')} /> 
      <View style={styles.movieInfo}>
        <Text style={styles.title}>Don't Look Up</Text>
        <Text style={styles.description}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Text>
      </View>
      </View>
      <View style={styles.container}>
      <Image style={styles.poster} source={require('./images/rednotice.png')} /> 
      <View style={styles.movieInfo}>
        <Text style={styles.title}>Red Notice</Text>
        <Text style={styles.description}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
     mollit anim id est laborum.</Text>
      </View>
      </View>
      <View style={styles.container}>
      <Image style={styles.poster} source={require('./images/theadam.png')} /> 
      <View style={styles.movieInfo}>
        <Text style={styles.title}>The Adam Project</Text>
        <Text style={styles.description}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Text>
      </View>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    scroll:{
      backgroundColor:'black'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 8,
        padding: 4,
        marginBottom: 16,
      },
      poster: {
        width: 100,
        height: 200,
        borderRadius: 4,
        marginRight: 16,
      },
      movieInfo: {
        flex: 1,
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color:'white'
      },
      description: {
        fontSize: 12,
        lineHeight: 24,
        color:'gray'
      },
})  

export default Film