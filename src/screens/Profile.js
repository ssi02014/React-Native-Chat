import React from "react";
import styled from "styled-components/native";
import { Text } from 'react-native';

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
`;

const Profile = () => {
    return (
        <Container>
            <Text style={{ fontSize: 24 }}>Profile</Text>
        </Container>
    )
};

export default Profile;