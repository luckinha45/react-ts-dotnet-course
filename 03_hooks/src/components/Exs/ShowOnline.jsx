import { useEffect } from "react";
import useOnlineStatus from "./useOnlineStatus";

export default function ShowOnline() {
  const isOnline = useOnlineStatus();
  
  return <p style={{margin: "10px", backgroundColor: isOnline ? "green" : "red"}}>
    X
  </p>
}