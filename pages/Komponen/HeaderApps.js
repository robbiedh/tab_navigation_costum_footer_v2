import React ,{Component } from  'react'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
const  HeaderApps =({judul})=>{
    return(
        <Header>
        
        <Body>
          <Title>{judul}</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Right>
      </Header>
    )
}
export default HeaderApps;