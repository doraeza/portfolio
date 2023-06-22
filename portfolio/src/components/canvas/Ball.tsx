import { Float} from "@react-three/drei";

const Ball = () => {
    // const [decal] = useTexture([props.imgUrl]);
  
    return (
      <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 2]} />
          <meshStandardMaterial
            color="#3d3d3d"
            polygonOffset
            polygonOffsetFactor={-5}
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