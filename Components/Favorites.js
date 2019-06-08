import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import FilmsList from './FilmsList'
import Avatar from './Avatar'
import { connect } from 'react-redux'

class Favorites extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.avatar_container}>
          <Avatar />
        </View>
        <FilmsList
            films={this.props.favoriteFilms}
            navigation={this.props.navigation}
            favoritesList={true}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  avatar_container: {
    alignItems: 'center'
  }
})

const mapStateToProps = state => {
  return {
    favoriteFilms: state.toggleFavorite.favoriteFilms
  }
}
export default connect(mapStateToProps)(Favorites)
