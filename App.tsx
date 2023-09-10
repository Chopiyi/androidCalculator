import { SafeAreaView, StatusBar } from 'react-native';
import { CalculatorScreen } from './src/screens/CalculatorScreen';
import { styles } from './src/theme/appTheme';

const App = () => {

  return (

    <SafeAreaView style={ styles.background }>

        <StatusBar 
          backgroundColor="black" //Setea el color de la barra de estado superior de android
          barStyle="light-content"
        />

      <CalculatorScreen />

    </SafeAreaView>


  )

}


export default App;