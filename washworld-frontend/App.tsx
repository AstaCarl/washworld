import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { TabsNavigation } from './navigation/TabsNavigation';
import { Provider } from 'react-redux';
import { store } from './store/store';
import NavigationWrapper from './navigation/NavigationWrapper';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationWrapper />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
