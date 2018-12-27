// @flow

import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import LikedBookButton from 'components/LikedBookButton'
import Button from 'components/Button'
import CircleAvatar from 'components/CircleAvatar'
import { withCamera } from 'containers/CameraContext'
import styles from './styles'

const mock = [
  {
    title: "L'arracheuse de dents",
    clap: 2,
  },
  {
    title: 'Un clafoutis aux tomates cerises',
    clap: 30,
  },
  {
    title: 'Peur',
    clap: 35,
  },
  {
    title: 'Le cas singulier de Benjamin T.',
    clap: 23,
  },
]

type Props = {
  picture: string,
  toggleCamera: boolean => void,
  navigation: Object,
}

// eslint-disable-next-line react/prefer-stateless-function
class Profile extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <CircleAvatar
            onPress={() => {
              this.props.toggleCamera(true)
              this.props.navigation.navigate('Camera')
            }}
            source={this.props.picture}
          />
          <Text style={styles.title}>Théotime</Text>
          <Button style={{ marginTop: 20 }} variant="alert" onPress={() => {}}>
            Se déconnecter
          </Button>
        </View>
        <View style={styles.list}>
          <Text style={styles.apreciateBooks}>
            Les livres que vous appréciez le plus
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {mock.map(
              (book, index) =>
                book.clap > 10 && (
                  <LikedBookButton key={book.title} book={book} index={index} />
                ),
            )}
          </ScrollView>
        </View>
      </View>
    )
  }
}

export default withCamera(Profile)
