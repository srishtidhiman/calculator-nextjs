import { Inter } from "next/font/google";
import { StringCalculator } from '@/StringCalculator';
import { useState } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | string>('');

  const calculate = () => {
    const calculator = new StringCalculator();
    try {
      const normalizedStr = unescapeString(input)
      console.log('normalizedStr', normalizedStr);
      
      const sum = calculator.add(normalizedStr);
      setResult(sum);
    } catch (error) {
      setResult(error.message);
    }
  };

  const unescapeString = (str: string): string => {
    return str.replace(/\\n/g, '\n')
              .replace(/\\t/g, '\t')
              .replace(/\\r/g, '\r')
              .replace(/\\f/g, '\f')
              .replace(/\\b/g, '\b')
              .replace(/\\\\/g, '\\');
  };
  return (
    <div className="container">
      <h1 className="heading">String Calculator</h1>
      <input
        className="input-field"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="submit-button" onClick={calculate}>Calculate</button>
      <div className="result">Result: {result}</div>
    </div>
  );
}
