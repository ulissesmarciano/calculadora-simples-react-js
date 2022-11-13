
import Input from './components/Input'
import Button from './components/Button'

import { Container, Content, Row } from './styles';
import React, { useState } from 'react';


const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFistNumber] = useState('0');
  const [operation, setOperation] = useState('');



  const handleOnClear = () => {
    setCurrentNumber('0')
    setFistNumber('0')
    setOperation('')
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFistNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleSubtractNumbers = () => {
    if(firstNumber === '0'){
      setFistNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-')
    }else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub))
      setOperation('')
    }
  }

  const handleMultiplicNumbers = () => {
    if(firstNumber === '0'){
      setFistNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*')
    }else {
      const sub = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sub))
      setOperation('')
    }
  }

  const handleDivideNumbers = () => {
    if(firstNumber === '0'){
      setFistNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/')
    }else {
      const divide = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divide))
      setOperation('')
    }
  }


  const handleEquals= () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
         
        case'-':
          handleSubtractNumbers();
          break;

        case'*':
          handleMultiplicNumbers();
          break;

        case '/':
          handleDivideNumbers();
          break;
          default:
            break;
      }
    }
  }

  return (
    <Container>
      <Content>
      
        <Input value={currentNumber}/>
          <Row>
            <Button label="C" onClick={handleOnClear}/>
            <Button label="." onClick={()=> handleAddNumber('.')}/>
            <Button label="÷" onClick={handleDivideNumbers}/>
            <Button label="x" onClick={handleMultiplicNumbers}/>
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="+" onClick={handleSumNumbers}/>
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="-" onClick={handleSubtractNumbers}/>
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="=" onClick={handleEquals}/>
          </Row>
      </Content>
    </Container>
  );
}

export default App;
