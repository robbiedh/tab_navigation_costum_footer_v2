import React ,{Component } from  'react'
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';

const FooterApps =({navigation})=>{
    return(
        <Footer>
        <FooterTab>
          <Button
          onPress={()=>navigation.navigate('HomeScreen')}
          >
            <Text>Home</Text>
          </Button>
          <Button
          onPress={()=>navigation.navigate('ProfileScreen')}
          >
            <Text>Profile</Text>
          </Button>
          <Button 
          onPress={()=>navigation.navigate('SettingScreen')}
          >
            <Text>Setting</Text>
          </Button>
          
        </FooterTab>
      </Footer>
    )
}

export default FooterApps;