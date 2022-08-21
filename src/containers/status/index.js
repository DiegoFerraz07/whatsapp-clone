import React, { Component } from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

class Status extends Component{
 componentDidMount(){
  console.log(this.props.theme);
 }
 render(){
  return (
    <View>
      <Text>Status</Text>
      <Text>{this.props.theme}</Text>
    </View>
  )
}
}

const mapStateToProps = state => {
  const settings = state.settings;
  return settings;
}

export default connect(mapStateToProps)(Status);
