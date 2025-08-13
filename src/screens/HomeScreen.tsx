import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import { UserCircleIcon } from 'react-native-heroicons/solid'
import { logout } from '../services/requests/auth'
import Bookings from '../components/home/Bookings'

const HomeScreen = () => {
  return (
    <View className='flex-1 bg-white pt-10'>
      <SafeAreaView/>

        <View className='flex-row justify-between items-center px-4 py-2'>
          <Text className='font-okra font-semibold text-3xl'>
            Bus Tickets
          </Text>

          <UserCircleIcon color='red' size={38} onPress={logout} />
        </View>
        <Bookings/>
    </View>
  )
}

export default HomeScreen;
