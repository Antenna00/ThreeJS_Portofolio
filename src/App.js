import './App.css';
import styled from "styled-components";
import {Canvas} from "@react-three/fiber"
import {Suspense} from "react";
import {Earth} from "./earth/index.jsx"
import {TopSection} from "./topSection/index.jsx"


function App() {
  return (
    <CanvasContainer>
      <TopSection />
      <Canvas>//Three.js記述用タグ
        <Suspense fallback={null}> //Blenderのコンポーネント読み込み用タグ
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`