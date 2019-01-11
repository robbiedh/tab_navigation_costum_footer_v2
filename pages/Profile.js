import React ,{Component } from  'react'
import {Container, Content,Text, Button}  from 'native-base'
import FooterApps from './Komponen/FooterApps'
import HeaderApps from  './Komponen/HeaderApps'

export default class  Profile extends React.Component{
    render(){
      
        return(
            <Container>
                <HeaderApps judul={"Profile"}  />
                <Content>
                    <Text>
                        Profile
                    </Text>
                    
                </Content>
                <FooterApps 
                
                onClickHome={() => this.props.navigation.navigate('HomeScreen')}
                onClickSetting ={()=>this.props.navigation.navigate('SettingScreen')}
                onClickProfile ={()=>this.props.navigation.navigate('ProfileScreen')}
                />
            </Container>
        )
    }
}