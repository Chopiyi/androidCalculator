import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'



interface ButtonCalculatorProps {

    textBtn: string;
    color?: string;
    wide?: boolean;
    action: ( numberTxt: string ) => void;

}

export const ButtonCalculator = ({ textBtn = "", color = "#2f4f4f", wide = false, action }: ButtonCalculatorProps ) => {

    
    
    return (
    
        <TouchableOpacity 
            onPress={ () => action(textBtn) }
            style={{ ...styles.button, backgroundColor: color, width: (wide) ? 180 : 80 }}
        >

            <Text style={ styles.buttonText }> { textBtn } </Text>
            
            
        </TouchableOpacity>
    )

}
