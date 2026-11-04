import React, { useEffect, useState } from 'react'

export default function ExUseEffect() {
  const [secs, setSecs] = useState(0);

  useEffect(() => {
    console.log('running useEffect');
    const intervalID = setInterval(() => {
      setSecs(s=> s + 1);
    }, 1000);

    return () => clearInterval(intervalID);
  }, [])


  return <div>
    Timer: {secs}s
  </div>
}