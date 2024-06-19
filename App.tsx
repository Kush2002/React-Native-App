import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import FlateCards from './components/FlateCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import ActionCards from './components/ActionCards'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <ScrollView>
    <View>
      <FlateCards />
      <ElevatedCards />
      <FancyCards />
      <ContactList />
      <ActionCards />
    </View>
    </ScrollView>
  )
}

export default App