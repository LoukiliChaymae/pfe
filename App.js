

import { SafeAreaView } from 'react-native-safe-area-context';
import GroupScreen from './components/GroupScreen';
export default function App() { 
  return (
    <SafeAreaView style={{ flex: 1 }} >
        <GroupScreen/>
      </SafeAreaView>
  );
}

