import styled from 'styled-components/native';

import {FlatList} from 'react-native';

export const ScrollContainer = styled.ScrollView.attrs(props => ({
  contentContainerStyle: {
    flex: 1,
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
}))``;

export const ListMessage = styled(FlatList).attrs(props => ({
  contentContainerStyle: {
    display: 'flex',
    flexGrow: 1,
  },
}))`
  width: 100%;
  background-color: #fff;
`;
