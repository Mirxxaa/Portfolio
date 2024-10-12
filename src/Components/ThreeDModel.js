// src/Components/ThreeDModel.js
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeDModel = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2); // Adjust size as needed
    mountRef.current.appendChild(renderer.domElement);

    // Orbit controls to enable mouse rotation
    const controls = new OrbitControls(camera, renderer.domElement);

    // Load your 3D model (ensure it's a GLTF/GLB file)
    const loader = new GLTFLoader();
    loader.load("/path/to/your/model.glb", (gltf) => {
      scene.add(gltf.scene);
      camera.position.z = 5; // Adjust camera position based on your model's size
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Required for orbit controls
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

export default ThreeDModel;
