/* @flow */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';

import Styles from './Styles';

const Checkbox = (props) => {
  let backgroundColor = {
      backgroundColor: props.disabled ? props.disabledColor :
      props.selected ? props.selectedColor : props.defaultColor
  };

    return (
        <TouchableOpacity disabled={props.disabled} style={[props.checkboxStyle, backgroundColor, styles.center]} onPress={props.onSelect}>
            { props.children }
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

Checkbox.propTypes = {
    children: PropTypes.element,
    defaultColor: PropTypes.string,
    selectedColor: PropTypes.string,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    onSelect: PropTypes.func.isRequired,
    checkboxStyle: PropTypes.oneOfType([ PropTypes.number, PropTypes.object, PropTypes.array ])
};

Checkbox.defaultProps = {
    checkboxStyle: Styles.checkboxStyle,
    defaultColor: Styles.defaultColor,
    selectedColor: Styles.selectedColor
};

export default Checkbox;
