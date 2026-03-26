'use client'
 
 
export default function Error({ error, reset }) {
  return <button onClick={() => reset()}>Try again</button>
}