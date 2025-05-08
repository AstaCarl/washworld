import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { TabsNavigation } from './navigation/TabsNavigation';


export default function App() {
  return (
    <NavigationContainer>
      <TabsNavigation />
    </NavigationContainer>
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
