import React, { useContext, useState, useEffect } from "react";
import { DB } from '../utils/firebase';
import styled, { ThemeContext } from "styled-components/native";
import { FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
`;

const ItemContainer = styled.Pressable`
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-color: ${({ theme }) => theme.listBorder};
    padding: 15px 20px;
`;

const ItemTextContainer = styled.View`
    flex: 1;
    flex-direction: column;
`;

const ItemTitle = styled.Text`
    font-size: 20px;
    font-weight: 600;
`;

const ItemDescription = styled.Text`
    font-size: 16px;
    margin-top: 5px;
    color: ${({ theme }) => theme.listTime};
`;

const ItemTime = styled.Text`
    font-size: 12px;
    color: ${({ theme }) => theme.listTime};
`;

const Item = React.memo(({ item: { id, title, description, createdAt }, onPress }) => {
    const theme = useContext(ThemeContext);

    return (
        <ItemContainer onPress={() => onPress({ id, title })}>
            <ItemTextContainer>
                <ItemTitle>{title}</ItemTitle>
                <ItemDescription>{description}</ItemDescription>
            </ItemTextContainer>
            <ItemTime>{createdAt}</ItemTime>
            <MaterialIcons 
                name="keyboard-arrow-right"
                size={24}
                color={theme.listIcon}
            />
        </ItemContainer>
    );
});

const ChannelList = ({ navigation }) => {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        const unsubscribe = DB.collection('channels')
        .orderBy('createdAt', 'desc')
        .onSnapshot(snapshot => {
            const list = [];

            snapshot.forEach(doc => {
                list.push(doc.data());
            });
            setChannels(list);
        });
    
        return () => unsubscribe();
      }, []);

    const _handleItemPress = params => {
        navigation.navigate('Channel', params);
    };

    return (
        <Container>
            <FlatList
                keyExtractor={item => item['id']}
                data={channels}
                renderItem={({ item }) => {
                    return (
                        <Item item={item} onPress={_handleItemPress} />
                    )
                }}
                windowSize={3}
            />
        </Container>
    );
};

export default ChannelList;