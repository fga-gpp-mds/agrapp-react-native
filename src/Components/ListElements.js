import React from 'react';
import {Container, Content, List, ListItem, Text} from 'native-base';
import {View} from 'react-native';
import ScreenHeader from '../Components/ScreenHeader';

class ListElements extends React.Component {

  render() {
    return (
      <Container>
      <View>
      <ScreenHeader
        title={this.props.title}
      />
      </View>
        <Content>
          <List dataArray={this.props.list}
            renderRow={(item) => (
              <ListItem onPress={() => this.props.onPress()} testID={this.props.testID}>
                <Text>{item}</Text>
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}

export default ListElements;
