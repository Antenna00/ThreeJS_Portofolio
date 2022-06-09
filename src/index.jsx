import React from "react";
import {useLoader} from "@react-three/fiber"
import {OrbitControls, Stars} from "@react-three/drei"
import * as THREE from "three";

import EarthDayMap from "./textures/8k_earth_daymap.jpg"
import EarthClouds from "./textures/8k_earth_clouds.jpg"
import EarthNightMap from "./textures/8k_earth_nightmap.jpg"
import EarthNormalMap from "./textures/8k_earth_normal_map.jpg"
import EarthSpecularMap from "./textures/8k_earth_specular_map.jpg"
import {TextureLoader} from "three"

export function Earth(props) {
    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
        TextureLoader, 
        [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthClouds])

    return (
    <>
        {/*<ambientLight intensity={1} />*/}
        <pointLight color="#FFFFFF" position={[2, 0, 2]} intensity={1.2} />
        <Stars 
        radius={300} //星のサイズ
        depth={60} //たぶん距離？
        count={20000} //星の数
        factor={7} //わからん
        saturation={0} //密度
        fade speed={1} //光る速さ
        />
        <mesh>
            <sphereGeometry args={[1.005,200,200]} />
            <meshPhongMaterial 
            map={cloudsMap} 
            opacity={0.4} 
            depthWrite={true} 
            transparent={true} 
            side = {THREE.DoubleSide} 
            /> 
        </mesh>
        <mesh>
            <sphereGeometry args={[1, 200, 200]} />
            <meshPhongMaterial specularMap={specularMap}/> //フォン・シェーディング：光沢感のある質感を表現できるマテリアル
            <meshStandardMaterial 
            map={colorMap} 
            normalMap={normalMap} 
            />
            <OrbitControls 
            enableZoom={true} 
            enablePan={true} 
            enableRotate={true}
            zoomSpeed={0.6} 
            panSpeed={0.5} 
            rotateSpeed={0.7}
            />
        </mesh>
    </>
    );
}