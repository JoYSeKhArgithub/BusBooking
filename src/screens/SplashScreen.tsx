import { Alert, Image, StyleSheet,  View } from 'react-native'
import React, { useEffect } from 'react'
import {jwtDecode} from 'jwt-decode'
import { getAccessToken, getRefreshToken } from '../services/storage';
import { resetAndNavigate } from '../utils/NavigationUtils';
import { refresh_tokens } from '../services/requests/auth';


interface DecodedToken {
    exp: number;
}

const SplashScreen = () => {

    const tokenCheck = async ()=>{
        const accessToken = getAccessToken()
        const refreshToken = getRefreshToken() as string;

        if(accessToken){
            const decodedAccessToken = jwtDecode<DecodedToken>(accessToken);
            const decodedRefreshToken = jwtDecode<DecodedToken>(refreshToken);

            const currentTime = Date.now() / 1000;

            if(decodedRefreshToken?.exp<currentTime){
                resetAndNavigate('LoginScreen');
                Alert.alert('Session Expired, Please login again');
                return ;
            }

            if(decodedAccessToken?.exp< currentTime){
                const refreshed = await refresh_tokens();
                if(!refreshed){
                    Alert.alert("This was an Error")
                    return
                }
            }

            resetAndNavigate('HomeScreen')
            return
        }
        resetAndNavigate('LoginScreen')

    }

    useEffect(()=>{
        const timeoutId = setTimeout(()=>{
            tokenCheck()
        },1500)

        return ()=> clearTimeout(timeoutId)
    },[])

  return (
    <View className='flex-1  justify-center bg-white items-center'>
      <Image
        source={require('../assets/images/logo_t.png')}
        className='h-[30%] w-[60%]'
        resizeMode='contain'
      />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})