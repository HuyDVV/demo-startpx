<template>
  <div ref="rain" class="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as THREE from 'three'

const rain = ref<HTMLDivElement | null>(null)

const initRainEffect = () => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer()
  scene.background = new THREE.Color(0x070f2b)
  renderer.setSize(window.innerWidth, window.innerHeight)

  if (rain.value) {
    rain.value.appendChild(renderer.domElement)
  }

  // Create raindrops
  const raindropGeometry = new THREE.BufferGeometry()
  const raindropMaterial = new THREE.PointsMaterial({
    color: 0x87ceeb,
    size: 1,
    map: new THREE.TextureLoader().load('https://i.imgur.com/FUTqPR8.png'), // Raindrop texture
    blending: THREE.AdditiveBlending,
    transparent: true
  })

  const positions: number[] = []

  for (let i = 0; i < 10000; i++) {
    const x = THREE.MathUtils.randFloatSpread(2000)
    const y = THREE.MathUtils.randFloat(0, window.innerHeight)
    const z = THREE.MathUtils.randFloatSpread(2000)

    positions.push(x, y, z)
  }

  raindropGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))

  const raindrops = new THREE.Points(raindropGeometry, raindropMaterial)
  scene.add(raindrops)

  camera.position.z = 1

  const animate = () => {
    requestAnimationFrame(animate)

    // Move raindrops downwards
    const positionAttribute = raindropGeometry.getAttribute('position') as THREE.BufferAttribute
    const array = positionAttribute.array as Float32Array

    for (let i = 1; i < array.length; i += 3) {
      array[i] -= 2 // Adjust speed of raindrops falling

      // Reset position when raindrop goes below the screen
      if (array[i] < -window.innerHeight / 2) {
        array[i] = window.innerHeight / 2
      }
    }

    positionAttribute.needsUpdate = true // Update raindrop positions

    renderer.render(scene, camera)
  }

  animate()

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })
}

onMounted(() => {
  initRainEffect()
})
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
