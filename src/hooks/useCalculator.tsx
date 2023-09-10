import { useRef, useState } from "react";


enum Operators {

    sum, substract, multiply, divide

}


export const useCalculator = () => {
  
    const [ number, setNumber ] = useState('0');
    const [ previousNumber, setPreviousNumber ] = useState('0');
    const lastOperation = useRef<Operators>();

    const clean = () => {

        setNumber('0');
        setPreviousNumber('0');

    }

    const del = () => {

        if( number.length === 1 || ( number.length === 2 && number.startsWith('-')) ) { 
            setNumber('0')
        } else {
            setNumber( number.slice(0, -1) );
        }
    }

    const buildNumber = ( numberText: string ) => {

        if(number.includes('.') && numberText === '.' ) return;

        if( number === '0'  && numberText !== '.')  { 
            setNumber( numberText ) 
        } else if( number === '-0' && numberText !== '.') {
            setNumber( '-' +  numberText );
        } else {
            setNumber( number + numberText  );
        }

    }

    const positionNegative = () => {

        if( number.includes('-') ){
            setNumber( number.replace('-', ''));
        } else {
            setNumber( '-' + number );

        }

    }

    const changePreviosNumber = () => {

        if(number.endsWith('.')){
            setPreviousNumber( number.slice(0,-1) );
        } else {    
            setPreviousNumber( number );
        }
        
        setNumber('0');

    }


    const divide = () => {
        changePreviosNumber();
        lastOperation.current = Operators.divide;
    }

    const multiply = () => {
        changePreviosNumber();
        lastOperation.current = Operators.multiply;
    }

    const sum = () => {
        changePreviosNumber();
        lastOperation.current = Operators.sum;
    }

    const substract = () => {
        changePreviosNumber();
        lastOperation.current = Operators.substract;
    }

    const calculate = () => {

        switch (lastOperation.current) {
            case Operators.multiply:
                setNumber( `${Number(number) * Number(previousNumber)}` );
                break;
            case Operators.sum:
                setNumber( `${Number(previousNumber) + Number(number)}` );
                break;
            case Operators.substract:
                setNumber( `${Number(previousNumber) - Number(number)}` );
                break;
            case Operators.divide:

                if(number === '0') {

                    setNumber('No se puede dividir por cero');

                } else {

                    setNumber( `${Number(previousNumber) / Number(number)}`  );

                    
                }

                break;
            
            default:
                break;
        }

        setPreviousNumber('0');

    }

    return {

        buildNumber,
        calculate,
        changePreviosNumber,
        clean,
        del,
        divide,
        multiply,
        number,
        positionNegative,
        previousNumber,
        setNumber,
        setPreviousNumber,
        substract,
        sum,

    }


}
