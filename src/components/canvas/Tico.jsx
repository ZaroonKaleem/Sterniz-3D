import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ticofab = ({ isMobile }) => {
  // const tico = useGLTF("./astro/scene.gltf");
  // const tico = useGLTF("./office/scene.gltf");
  // const tico = useGLTF("./facilityManagement/scene.gltf");
  const tico = useGLTF("./airport/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-30, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={tico.scene}
        // scale={isMobile ? 0.001 : 0.0010}
        scale={isMobile ? 0.5 : 0.35}
        // position={isMobile ? [0, -2.9, -0.2] : [0, -3.25, -1.5]}
        position={isMobile ? [0, -2.9, -0.2] : [0, -2.1, -1.5]}
        // rotation={[-0.01, -0.5, -0.1]}
        rotation={[0, -0.2, 0]}
      />
    </mesh>
  );
};

const TicofabCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [18, 5, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Ticofab isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default TicofabCanvas;
