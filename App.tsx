/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import './global.css'
import {  StyleSheet} from 'react-native';
import Navigation from './src/navigation/Navigation';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './src/services/queryClient';

function App() {
  

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation/>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});

export default App;
