import React ,{Component } from  'react'
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';

const FooterApps =({onClickHome,onClickProfile,onClickSetting})=>{
    return(
        <Footer>
        <FooterTab>
          <Button
          onPress={onClickHome}
          >
            <Text>Home</Text>
          </Button>
          <Button
          onPress={onClickProfile}
          >
            <Text>Profile</Text>
          </Button>
          <Button 
          onPress={onClickSetting}
          >
            <Text>Setting</Text>
          </Button>
          
        </FooterTab>
      </Footer>
    )
}

export default FooterApps;