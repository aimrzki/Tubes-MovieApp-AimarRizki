import { View, Text,Image,TouchableOpacity, TextInput} from 'react-native'
import React from 'react'

const daftar = ({navigation}) => {
  return (
    <View style={{backgroundColor:'white'}}>
      <Image source={require('./login.png')}
         style={{width: 400, height: 270,justifyContent:'center',alignItems:'center',marginLeft:1,marginTop:0}} />
         <TextInput placeholder='Email' style={{
            backgroundColor:'#f8f8ff',
            width:'90%',
            borderColor:'e8e8e8',
            borderWidth:1,
            borderRadius:10,
            paddingHorizontal:10,
            marginVertical:30,
            marginLeft:20,
         }}>
         </TextInput>
         <TextInput placeholder='Password' style={{
            backgroundColor:'#f8f8ff',
            width:'90%',
            borderColor:'e8e8e8',
            borderWidth:1,
            borderRadius:10,
            paddingHorizontal:10,
            marginVertical:-15,
            marginLeft:20,
         }}>
         </TextInput>
         <TouchableOpacity 
        onPress={()=>navigation.navigate("Home")}
        style={{
            backgroundColor:'red',
            paddingVertical:10,
            width:300,
            justifyContent:'center',
            alignItems:'center',
            marginTop:60,
            marginLeft:45,
            borderRadius:20,
            borderWidth: 1,
            borderColor: '#fff'
            }}>
            
            <Text style={{color:'white',fontWeight:'bold'}}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={{marginTop:40,marginLeft:30,fontWeight:'bold',color:'grey'}}>
        _________________ or continue with _________________
        </Text>
        <View style={{marginTop:5}}>
        <TouchableOpacity
         onPress={()=>navigation.navigate("Edit Profil")}
        >
        <Image source={require('./facebook.png')}
         style={{width: 50, height: 50,marginLeft:75,marginTop:20}} />
         </TouchableOpacity>
         <TouchableOpacity
          onPress={()=>navigation.navigate("Forgot Password")}
         >
         <Image source={require('./google.png')}
         style={{width: 50, height: 50,marginLeft:175,marginTop:-50,position:'absolute'}} />
         </TouchableOpacity>
         <TouchableOpacity
          onPress={()=>navigation.navigate("OTP")}
         >
         <Image source={require('./apple.png')}
         style={{width: 50, height: 50,marginLeft:275,marginTop:-50,position:'absolute'}} />
         </TouchableOpacity>
        </View>
        <View style={{marginTop:10}}>
            <Text style={{marginLeft:85}}>
                Dont't have an account?
            </Text>
            <TouchableOpacity 
             onPress={()=>navigation.navigate("Edit Profil")}
            >
            <Text style={{marginLeft:245,position:'absolute',color:'red',marginTop:-19}}>
                Sign up
            </Text>
            </TouchableOpacity>
        </View>
        <View style={{marginTop:50}}>

        </View>
    </View>
  )
}

export default daftar