import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const CardSection = props => {
  return (
    <View style={style.containerStyle}>
      {props.children}
    </View>
  );
};

const style = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

CardSection.propTypes = {
  
};

export default CardSection;
