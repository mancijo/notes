'use client'

import { stringify } from "querystring";
import { useEffect, useState } from "react";

const STORAGE_KEY = 'countNumber';

const Page = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(count));
  })
   
  return (
    <div className="container mx-auto">
      <h1>Olá mundo! {count}</h1>
      <button onClick={() => setCount(count + 1)}>[ Aumentar ]</button>
    </div>
  )
}

export default Page;