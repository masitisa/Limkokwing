import React, { useRef } from "react";
import {  Animated, Image} from "react-native";
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View ,ImageBackground,ScrollView,TouchableOpacity} from 'react-native';

const image = {  image:require('./assets/logo.png') };

let SampleNameArray = [ 
  {
    name:"Faculty of Fashion & Lifestyle Creativity",
    image:require('./assets/life.png'),
    co:[1,4,5,6]
  },
  {
    name:"Faculty of Architecture & The Build Envirinment",
    image:require('./assets/architec.png')},
    
  {
    name: "Faculty of Communication, Media & Broadcasting",
    image:require('./assets/broadcast.png')
  },
  {
    name: "Faculty of Multimedia Creativity",
    image:require('./assets/creative.png')
  
  },
  {
    name: "Faculty of Information & Communication Technology",
    image:require('./assets/multimedia.png')
  
  },
  {
    name: "Limkokwing Sound & Music Design Academy",
    image:require('./assets/music.png')
  }
 ];







const H_MAX_HEIGHT = 150;
const H_MIN_HEIGHT = 100;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

const MAX_size = 55;
const MIN_size = 32;
const SIZE = MAX_size - MIN_size;

export default function App() {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: "clamp"
  });
  const head_size = scrollOffsetY.interpolate({
    inputRange:[0 , SIZE],
    outputRange:[MAX_size, MIN_size],
    extrapolate: "clam"
  });
  const appear = scrollOffsetY.interpolate({
    inputRange:[0 , SIZE],
    outputRange:[ MIN_size, MAX_size],
    extrapolate: "clam"
  });


  

  return (
    <View style={{ flex: 1 }}>
      
      <ScrollView 
        onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: scrollOffsetY } } }
          ])}
        scrollEventThrottle={16}
      >
        <View style={{ paddingTop: H_MAX_HEIGHT }}>
          {/** Page contant goes here **/}

          

          <View style={styles.coarses}>
          { SampleNameArray.map((item, name)=>(
          <View key={name} style={styles.coarse}>
            <ImageBackground source={item.image} resizeMode="cover" style={styles.image}>
              <Text style={styles.coarseName}>{item.name}</Text>
              <View style={{marginLeft:100,flexDirection:'row',alignSelf:'flex-end'}}>

                <TouchableOpacity>
                  <View style={styles.coarseButton}>
                    <Text style={{fontWeight:'bold' ,padding:5}}>Courses</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.coarseButton}>
                    <Text style={{fontWeight:'bold' ,padding:5}}>About</Text>
                  </View>
                </TouchableOpacity>
              </View>
              
            </ImageBackground>

          </View>)
          )}
        </View>
        </View>
      </ScrollView>
      
      {

      }
      <Animated.View style={{
          position: "absolute",
          height: headerScrollHeight,
          width: "100%",
          overflow: "hidden",
          borderBottomColor: "#EFEFF4",
          borderBottomWidth: 2,
          padding: 10,
          backgroundColor: "#000",
        
        }}>

          <Image
            source={require('./assets/logo.png')}
            style={{ flex: 1 }}
            resizeMode={"contain"}
          />
          <Animated.Text style={{
            color:'white',
            fontWeight:'bold',
            fontSize:head_size,
            alignSelf:'center',
            
          }} resizeMode={"container"}>Limkokwing </Animated.Text>
          <Animated.Text style={{
            
            fontWeight:'bold',
            fontSize:head_size,
            alignSelf:'center',
            color:'white'
            
          }} resizeMode={"container"}>UNIVERSITY </Animated.Text>
          
       
      </Animated.View>
      
      <View >

      </View>

      <StatusBar style='auto'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  coarse:{
    backgroundColor: image,
    width:'100%',
    marginVertical:5,
    borderRadius:10,
    
    
  },
  coarseName:{
    fontSize:27,
    fontWeight:'bold',
    alignSelf:'center',
    color:'#76FF03',
    marginTop:40,
    shadowColor:'white',
   
    
    
  },
  image:{
    width:'100%',
    
    borderRadius:30
  },
  text:{
    color:'white'
  },
  coarses:{
    width:'100%',
    marginHorizontal:3
  },
  coarseButton:{
    width:80,
    borderRadius:20,
    borderWidth:3,
    alignSelf:'flex-end',
    margin:10,
    backgroundColor:'#EEEEEE'
  },
  headerText:{
    
  }
});

