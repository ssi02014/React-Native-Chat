import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const TRANSPARENT = 'transparent';

//TouchableOpacity는 터치 이벤트(onPress)를 사용할 수 있는 View
const Container = styled.TouchableOpacity`
  background-color: ${({ theme, isFilled}) => isFilled ? theme.buttonBackground : TRANSPARENT};
  align-self: center;
  border-radius: 4px;
  width: 100%;
  padding: 10px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const Title = styled.Text`
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    text-align: center;
    color: ${({ theme, isFilled }) => isFilled ? theme.buttonTitle : theme.buttonUnfilledTitle};
`;

const Button = ({ containerStyle, title, onPress, isFilled, disabled }) => {
    return (
        <Container 
            style={containerStyle} 
            onPress={onPress} 
            isFilled={isFilled}
            disabled={disabled}
        >
            <Title isFilled={isFilled}>{title}</Title>
        </Container>   
    )
}

Button.defaultProps = {
    isFilled: true,
};

Button.propTypes = {
    containerStyle: PropTypes.object,
    title: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    isFilled: PropTypes.bool,
    disabled: PropTypes.bool,
};

export default Button;