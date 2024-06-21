import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { StringCalculator } from '@/StringCalculator';
import { useState } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | string>('');

  const calculate = () => {
    const calculator = new StringCalculator();
    try {
      const sum = calculator.add(input);
      setResult(sum);
    } catch (error) {
      setResult(error.message);
    }
  };
  return (
    <div>
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={calculate}>Calculate</button>
      <div>Result: {result}</div>
    </div>
  );
}
