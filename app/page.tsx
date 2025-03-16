'use client'
import { useState } from "react";
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(
  () => import("./components/HeavyComponent"), 
  { 
    ssr: false,
    loading: () => <span className="loading loading-spinner loading-lg"></span>
  })

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <>
      <button className="btn btn-primary" onClick={() => setIsVisible(!isVisible)}>Show</button>
      {isVisible && <HeavyComponent />}
    </>
  );
}
