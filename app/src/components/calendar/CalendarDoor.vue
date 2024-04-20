<template>
    <div :id="`door-${door.id}`" class="calendar-door" ref="door" :key="showContent"
        v-bind:style="{ backgroundImage: 'url(' + door.background + ')' }"
        @click="toFullScreen()">
        <span class="calendar-label">{{ door.id }}</span>
    </div>
    <!--Transition name="calendar-modal" @enter="overlapModal"-->
    <!--div :id="`content-${door.id}`" class="calendar-content" ref="content"
        v-if="showContent" @click="toggle(false)" v-html="`${door.content}`"></div-->
    <!--/Transition-->
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

.full-screen {
    position: fixed;
    animation: go-full-screen forwards 2s ease-in-out;
    inset: var(--inset);
}

.shrink-down {
    animation: go-full-screen reverse backwards 2s ease-in-out !important;
}

@keyframes go-full-screen {
    from {
        height: 134px;
        width: 134px;
        inset: var(--inset);
    }
    to {
        height: 100%;
        width: 100%;
        inset: 0;
    }
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
        // see https://stackoverflow.com/a/72877897
        toFullScreen(e) {
            const { top, left } = this.$refs['door'].getBoundingClientRect();
            const height = this.$refs['door'].offsetHeight;
            const width = this.$refs['door'].offsetWidth;

            console.log(`top: ${top}, left: ${left}, height: ${height}, width: ${width}`);

            let fullScreen = this.$refs['door'].cloneNode(true);

            fullScreen.style.setProperty('--inset', `${top}px auto auto ${left}px`);
            fullScreen.style.setProperty('height', this.$refs['door'].offsetHeight);
            fullScreen.style.setProperty('width', this.$refs['door'].offsetWidth);
            fullScreen.classList.add('full-screen');
            fullScreen.addEventListener('click', this.shrink);

            this.$refs['door'].parentNode.appendChild(fullScreen);
        },
        shrink(e) {
            const el = e.target;

            el.addEventListener('animationend', (e) => e.target.remove());

            el.style.animation = 'none';
            el.offsetHeight;
            el.style.animation = '';
            el.classList.add('shrink-down');
        }
    }
}
</script>