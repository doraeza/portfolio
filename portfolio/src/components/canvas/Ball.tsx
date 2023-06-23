import { Float} from "@react-three/drei";

const Ball = () => {
    // const [decal] = useTexture([props.imgUrl]);
  
    return (
      <Float speed={3} rotationIntensity={1} floatIntensity={2}>
        <directionalLight position={[0, 0, 0.1]} />
        <ambientLight intensity={0.25} />
        <mesh castShadow receiveShadow scale={1.2}>
          <dodecahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#9bd65c"
            polygonOffset
            polygonOffsetFactor={-10}
            flatShading
          />
          {/* <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            flatShading
            map={decal}
          /> */}
        </mesh>
      </Float>
    );
  };
  export default Ball