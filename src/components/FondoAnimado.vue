<template>
    <div class="container">
        <div class="paticles">
            <span style="--i:11;"></span>
            <span style="--i:12;"></span>
            <span style="--i:24;"></span>
            <span style="--i:10;"></span>
            <span style="--i:10;"></span>
            <span style="--i:14;"></span>
            <span style="--i:23;"></span>
            <span style="--i:18;"></span>
            <span style="--i:16;"></span>
            <span style="--i:19;"></span>
            <span style="--i:20;"></span>
            <span style="--i:22;"></span>
            <span style="--i:25;"></span>
            <span style="--i:18;"></span>
            <span style="--i:21;"></span>
            <span style="--i:13;"></span>
            <span style="--i:15;"></span>
            <span style="--i:26;"></span>
            <span style="--i:17;"></span>
            <span style="--i:13;"></span>
            <span style="--i:28;"></span>
            <span style="--i:11;"></span>
            <span style="--i:12;"></span>
            <span style="--i:24;"></span>
            <span style="--i:10;"></span>
            <span style="--i:10;"></span>
            <span style="--i:14;"></span>
            <span style="--i:23;"></span>
            <span style="--i:18;"></span>
            <span style="--i:16;"></span>
            <span style="--i:19;"></span>
            <span style="--i:20;"></span>
            <span style="--i:22;"></span>
            <span style="--i:25;"></span>
            <span style="--i:18;"></span>
            <span style="--i:21;"></span>
            <span style="--i:13;"></span>
            <span style="--i:15;"></span>
            <span style="--i:26;"></span>
            <span style="--i:17;"></span>
            <span style="--i:13;"></span>
            <span style="--i:28;"></span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'fondoAnimado',
}
</script>

<style scoped="true">
.particles {
    position: relative;
    display: flex;
    z-index: 1;
    padding: 0 20px;
}

.particles span {
    position: relative;
    bottom: 30px;
    width: 30px;
    height: 30px;
    background: #4fc3dc;
    opacity: .4;
    box-shadow: 0 0 0 10px #4fc3dc44, 0 0 50px #4fc3dc, -100px 0 #4fc3dc99, 100px 0 #ff2d7599;
    margin: 0 4px;
    border-radius: 50%;
    animation: animate 15s ease-in-out infinite;
    animation-duration: calc(125s/var(--i));
}

.particles span:nth-child(even) {
    background: #ff2d75;
    box-sizing: 0 0 0 10px #ff2d7544, 0 0 50px #ff2d75, -100px 0 #4fc3dc99, 100px 0 #4fc3dc99;
}

@keyframes animate {
    0% {
        transform: translateY(120vh) scale(0) rotate(90deg);
    }

    20% {
        transform: translateY(100vh) scale(1) rotate(0deg);
    }

    100% {
        transform: translateY(-50vh) scale(0.5) rotate(360deg);
    }

}</style>