import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { ButtonCalculator } from '../components/ButtonCalculator'
import { useRef, useState } from 'react';
import { useCalculator } from '../hooks/useCalculator';





export const CalculatorScreen = () => {

    const {
        
        buildNumber,
        clean,
        del,
        number,
        positionNegative,
        previousNumber,
        divide,
        multiply,
        substract,
        sum,
        calculate

    } = useCalculator();


    return (


        <View style={styles.calculatorContainer}>
            
            { ( previousNumber !== '0') && <Text style={styles.smallResult}> { previousNumber } </Text> }
            
            <Text 
                adjustsFontSizeToFit
                numberOfLines={ 1 }
                style={styles.result}
            > 
                { number } 
            </Text>

            <View style={ styles.row }>

                <ButtonCalculator textBtn="C" color="#9B9B9B" action={ clean }/>
                <ButtonCalculator textBtn="+/-" color="#9B9B9B" action={ positionNegative }/>
                <ButtonCalculator textBtn="D" color="#9B9B9B" action={ del }/>
                <ButtonCalculator textBtn="/" color="#ff810a" action={ divide }/>
                
            </View>

            <View style={ styles.row }>

                <ButtonCalculator textBtn="1" color="#2f4f4f" action={ buildNumber }/>
                <ButtonCalculator textBtn="2" color="#2f4f4f" action={ buildNumber }/>
                <ButtonCalculator textBtn="3" color="#2f4f4f" action={ buildNumber }/>
                <ButtonCalculator textBtn="*" color="#ff810a" action={ multiply }/>
                
            </View>

            <View style={ styles.row }>

                <ButtonCalculator textBtn="4" color="#2f4f4f" action={ buildNumber } />
                <ButtonCalculator textBtn="5" color="#2f4f4f" action={ buildNumber } />
                <ButtonCalculator textBtn="6" color="#2f4f4f" action={ buildNumber } />
                <ButtonCalculator textBtn="+" color="#ff810a" action={ sum }/>
                
            </View>

            <View style={ styles.row }>

                <ButtonCalculator textBtn="7" color="#2f4f4f" action={ buildNumber }/>
                <ButtonCalculator textBtn="8" color="#2f4f4f" action={ buildNumber }/>
                <ButtonCalculator textBtn="9" color="#2f4f4f" action={ buildNumber }/>
                <ButtonCalculator textBtn="-" color="#ff810a" action={ substract }/>
                
            </View>

            <View style={ styles.row }>

                <ButtonCalculator textBtn="0" color="#2f4f4f" wide action={ buildNumber }/>
                <ButtonCalculator textBtn="." color="#2f4f4f" action={ buildNumber }/>
                <ButtonCalculator textBtn="=" color="#ff810a" action={ calculate }/>
                
            </View>


        </View>

    )

}
