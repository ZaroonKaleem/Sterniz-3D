// import { useState, useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial, Preload } from "@react-three/drei";
// import * as random from "maath/random/dist/maath-random.esm";

// const Stars = (props) => {
//   const ref = useRef();
//   const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 10;
//     ref.current.rotation.y -= delta / 15;
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//           transparent
//           color='#f272c8'
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// const StarsCanvas = () => {
//   return (
//     <div className='w-full h-auto absolute inset-0 z-[-1]'>
//       <Canvas camera={{ position: [0, 0, 1] }}>
//         <Suspense fallback={null}>
//           <Stars />
//         </Suspense>

//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default StarsCanvas;

import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, Preload, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { BufferAttribute } from "three";

// Define shades of blue only
const COLORS = [
  [50 / 255, 84 / 255, 156 / 255], // #32549C (Dark Blue)
  [98 / 255, 120 / 255, 200 / 255], // Lighter blue
  [100 / 255, 160 / 255, 255 / 255], // Sky Blue
  [70 / 255, 130 / 255, 180 / 255], // Steel Blue
  [0 / 255, 102 / 255, 204 / 255], // Deep Blue
];

// Function to generate random colors from the predefined set
const generateColors = (count) => {
  const colors = new Float32Array(count * 3); // RGB for each star
  for (let i = 0; i < count; i++) {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    colors.set(color, i * 3);
  }
  return colors;
};

const StarField = ({ count = 1500, radius = 2.5 }) => { // Reduced count & increased radius
  const pointsRef = useRef();
  const [positions] = useState(() => random.inSphere(new Float32Array(count * 3), { radius }));
  const [colors] = useState(() => generateColors(count));

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x -= delta * 0.05;
      pointsRef.current.rotation.y -= delta * 0.03;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled>
        <bufferGeometry attach="geometry">
          <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
          <bufferAttribute attach="attributes-color" array={colors} count={count} itemSize={3} />
        </bufferGeometry>
        <PointMaterial 
          vertexColors={true}  // Ensure colors are applied per point
          size={0.007} // Adjusted size for better visibility 
          sizeAttenuation={true} // Optional: allows the size to decrease with distance
          transparent={true} 
          depthWrite={false} 
          alphaTest={0.5} // Optional: Ensures that transparent stars look good
          map={null}  // Make sure no texture is applied
          round={true} // Ensures all stars are circular
        />
      </Points>
    </group>
  );
};

const StarBackground = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarField />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarBackground;
