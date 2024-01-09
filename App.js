import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const profil = () => {
  const url = 'https://instagram.com/this_parhan?igshid=OGQ5ZDc2ODk2ZA==';
  Linking.openURL(url)
};

const PortfolioScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
      style={styles.logo}
      source={require('./assets/hanz.png')}></Image>

      <Text style={styles.title}> Farhan Adnan</Text>
      <Text style={styles.title2}>Nabil</Text>

      <Text style={{marginTop:20}}> Lahir di Banyumas, 11 November 2005</Text>
      <Text>Tinggal di Desa Gandatapa JL.Batturaden Timur</Text>
      <Text>"Hubungi Saya, Tekan tombol di bawah"</Text>

    <View style={styles.tombol}>
     <TouchableOpacity style={styles.button} onPress={profil} >
          <Text style={styles.textbutton}>Contact Me</Text>
      </TouchableOpacity>
    </View>

    <View>
    <Text style={{marginRight:210, fontWeight:'bold', color:'#2F4F4F'}}>My Project</Text>
    <Image style={{borderRadius:10, width: 300, height: 200, marginTop:15}}
    source={require('./assets/Gambar1.png')}></Image>
    </View>

    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#D3D3D3',
    alignItems: 'center',
    padding:10
  },

  title:{
    fontSize: 24,
    marginTop: 30,
    fontWeight:'bold',
    color:'#2F4F4F',
  },
  title2:{
    fontSize: 24,
    fontWeight:'bold',
    color:'#2F4F4F',
  },

  tombol:{
    flex:1,
    alignItems:'center',  
    paddingHorizontal:10,
    paddingTop:20,
    paddingBottom:30,
  },

  button:{
    elevation:8,
    backgroundColor:'#2F4F4F',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height:43,
    width:150
  },

  textbutton:{
    fontSize:15,
    color:'white',
    fontWeight:'bold',
    alignSelf:'center',
    textTransform:"uppercase"
  },

  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    margin:0,
  },
});

export default PortfolioScreen;
