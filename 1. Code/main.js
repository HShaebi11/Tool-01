<!-- Add these CDN links in your head section -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/GLTFLoader.js"></script>

function countdown(targetElementId, duration, startDelay, showMilliseconds) {
    const timerElement = document.getElementById(targetElementId);
    
    setTimeout(() => {
        const startTime = Date.now();
        const endTime = startTime + (duration * 1000);

        function updateTimer() {
            const currentTime = Date.now();
            const timeLeft = endTime - currentTime;

            if (timeLeft <= 0) {
                timerElement.textContent = '00:00' + (showMilliseconds ? ':000' : '');
                return;
            }

            // Calculate minutes, seconds, and milliseconds
            const minutes = Math.floor(timeLeft / 60000);
            const seconds = Math.floor((timeLeft % 60000) / 1000);
            const ms = timeLeft % 1000;

            // Format the time string
            const timeString = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}${showMilliseconds ? ':' + String(ms).padStart(3, '0') : ''}`;
            
            timerElement.textContent = timeString;
            requestAnimationFrame(updateTimer);
        }

        updateTimer();
    }, startDelay * 1000);
}

// Start a 5-second timer after 2 seconds delay, without milliseconds
countdown('timerText', 5, 2, true);

let scene, camera, renderer, model;
const modelColor = '#ff0000';

function init() {
    // Get the container element and its dimensions
    const container = document.querySelector('.3d-scene');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // Camera setup
    camera = new THREE.PerspectiveCamera(75, containerWidth / containerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerWidth, containerHeight);
    container.appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    // Load model
    const loader = new THREE.GLTFLoader();
    loader.load(
        'https://uploads-ssl.webflow.com/assets/smile.gltf', // Replace with your Webflow asset URL
        function (gltf) {
            model = gltf.scene;
            
            // Apply color to model
            model.traverse((node) => {
                if (node.isMesh) {
                    node.material.color = new THREE.Color(modelColor);
                }
            });

            scene.add(model);
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
            console.error('An error happened:', error);
        }
    );

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    
    if (model) {
        model.rotation.y += 0.01;
    }
    
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    const container = document.querySelector('.3d-scene');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    camera.aspect = containerWidth / containerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(containerWidth, containerHeight);
}

// Start everything
init();