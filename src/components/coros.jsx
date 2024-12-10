




import { useEffect, useRef } from "react";
import "./vid.css"
function Video() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => console.log("Autoplay error:", err));
    }
  }, []);

  return (
    <div>
     
      <video autoPlay muted loop playsInline style={{ pointerEvents: "none" }}>

        <source src="/vedio1.mp4" type="video/mp4" />
  
      </video>
    </div>
  );
}

export default Video;
