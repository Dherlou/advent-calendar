<template>
    <div :id="`door-${door.id}`" class="calendar-door" ref="door" :key="showContent"
        :data-content="door.content"
        v-bind:style="{ backgroundImage: 'url(' + door.background + ')' }"
        @click="toFullScreen()">
        <span class="calendar-label">{{ door.id }}</span>
    </div>
</template>

<style scoped>
.calendar-door {
    aspect-ratio: 1;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px 1px rgba(71, 71, 71, .5);
    overflow: hidden;
    position: relative;
}

.calendar-label {
    color: #eee;
    font-size: clamp(2rem, 1.5rem + 1.5vw, 3rem);
    font-weight: 700;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
}

.calendar-content {
    z-index: 100;
    position: fixed;
    top: 0px;
    left: 0px;
    background: #fff;
    color: #000;
    height: 100%;
    width: 100%;
}
</style>

<script>
export default {
    props: [
        'door'
    ],
    data() {
        return {
            showContent: false
        }
    },
    methods: {
        // based on https://stackoverflow.com/a/72877897
        toFullScreen(e) {
            const { top, left } = this.$refs['door'].getBoundingClientRect();
            const [keyframes, options] = this.calculateAnimation(true);

            let fullScreen = this.$refs['door'].cloneNode(true);

            fullScreen.style.setProperty('--inset', `${top}px auto auto ${left}px`);
            fullScreen.style.setProperty('position', 'fixed');
            fullScreen.addEventListener('click', this.toDoor);
            let animation = fullScreen.animate(keyframes, options);
            fullScreen.innerHTML = fullScreen.getAttribute('data-content');

            this.$refs['door'].parentNode.appendChild(fullScreen);
        },
        toDoor(e) {
            const [keyframes, options] = this.calculateAnimation(false);

            let animation = e.target.animate(keyframes, options);
            animation.onfinish = () => { e.target.remove(); };
        },
        calculateAnimation(zoomIn) {
            const doorDim = this.$refs['door'].offsetHeight; // = offsetWidth
            const keyframes = [
                {
                    height: doorDim + 'px',
                    width: doorDim + 'px',
                    inset: 'var(--inset)',
                    background: 'transparent',
                    color: 'transparent'
                },
                {
                    height: '100%',
                    width: '100%',
                    inset: 0,
                    background: '#fff',
                    color: '#000'
                }
            ];
            const options = {
                duration: 2000,
                easing: 'ease-in-out',
                fill: 'forwards'
            };

            return [zoomIn ? keyframes : keyframes.reverse(), options];
        }
    }
}
</script>