import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'
import News from '../Components/News'

const SearchStackNavigator = createStackNavigator({
    Search: {
      screen: Search,
      navigationOptions: {
        title: 'Reachercher'
      }
    },
    FilmDetail: {
      screen: FilmDetail
    }
  })

  const FavoritesStackNavigator = createStackNavigator({
      Favorites: {
        screen: Favorites,
        navigationOptions: {
          title: 'Favorites'
        }
      },
      FilmDetail: {
        screen: FilmDetail
      }
    })

const NewsStackNavigator = createStackNavigator({
  News: {
    screen: News,
    navigationOptions: {
      title: 'Les Derniers Films',
    },
  },
  FilmDetail: {
    screen: FilmDetail,
  }
})

const MoviesTabNavigator = createBottomTabNavigator({
  Search: {
    screen: SearchStackNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
          style={styles.icon}
          source={require('../Images/ic_search.png')}
        />
      }
    }
  },
  Favorites: {
    screen: FavoritesStackNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
          style={styles.icon}
          source={require('../Images/ic_favorite.png')}
        />
      }
    }
  },
  News: {
      screen: NewsStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_fiber_new.png')}
            style={styles.icon}/>
        }
      }
    }
},
  {
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD',
      inactiveBackgroundColor: '#FFFFFF',
      showLabel: false,
      showIcon: true
    }
})

const syles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20
  }
})

export default createAppContainer(MoviesTabNavigator)
