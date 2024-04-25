<template>
    <div :id="`door-${door.date}`" class="calendar-door" ref="door"
        :data-content="`<div class='calendar-content'>${door.content}</div>`"
        :data-padding="door.padding || '0px'"
        v-bind:style="{ backgroundImage: 'url(' + door.background + ') !important' }"
        @click="toFullScreen()">
        <span v-if="door.date > 0" class="calendar-label">{{ door.date }}</span>
    </div>
</template>

<style>
.calendar-door {
    aspect-ratio: 1;
    background-position: center !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px 1px rgba(71, 71, 71, .5);
    overflow: hidden;
    position: relative;
    z-index: 1;
}

.calendar-door-open:after {
  content: "";
  position: fixed;
  top: 0; bottom: 0; left: 0; right: 0; 
  background: rgba(255,255,255,0.8);
  pointer-events: none;
  z-index: 2;
}

.calendar-content {
    position: absolute;
    z-index: 3;
}

.calendar-label {
    color: #eee;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    font-size: clamp(2rem, 1.5rem + 1.5vw, 3rem);
    font-weight: 700;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
}

.button-close {
    background: #fff;
    color: #000;
    border: 1px solid #000;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    height: 2em;
    width: 2em;
    top: 0.8em;
    right: 0.8em;
    padding: 0.5em;
    z-index: 999;
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
            if (this.$refs['door'].getAttribute('id').startsWith('door--')) {
                return;
            }

            const [fullScreen, animation] = this.createFullScreen();
            const closeButton = this.createCloseButton();
            
            animation.onfinish = (e) => {
                fullScreen.appendChild(closeButton);
            };
            closeButton.addEventListener('click', (e) => {
                fullScreen.click();
            });

            this.$refs['door'].parentNode.appendChild(fullScreen);
        },
        createFullScreen() {
            const { top, left } = this.$refs['door'].getBoundingClientRect();
            const [keyframes, options] = this.calculateAnimation(true);
            const fullScreen = this.$refs['door'].cloneNode(true);

            fullScreen.id += '-fullscreen';
            fullScreen.style.setProperty('--inset', `${top}px auto auto ${left}px`);
            fullScreen.style.setProperty('position', 'fixed');
            fullScreen.style.setProperty('padding', fullScreen.getAttribute('data-padding'));
            fullScreen.classList.add('calendar-door-open');
            fullScreen.addEventListener('click', this.toDoor);
            fullScreen.innerHTML = fullScreen.getAttribute('data-content');

            return [fullScreen, fullScreen.animate(keyframes, options)];
        },
        createCloseButton() {
            const closeButton = document.createElement('div');

            closeButton.classList.add('button-close');
            closeButton.innerHTML = 'X';

            return closeButton;
        },
        toDoor(e) {
            const [keyframes, options] = this.calculateAnimation(false);

            e.target.getElementsByClassName('button-close')[0]?.remove();

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
                    color: 'transparent',
                    opacity: 0.2
                },
                {
                    height: '100%',
                    width: '100%',
                    inset: 0,
                    background: '#fff',
                    color: '#000',
                    opacity: 1
                }
            ];
            const options = {
                duration: 1000,
                easing: 'ease-in-out',
                fill: 'forwards'
            };

            return [zoomIn ? keyframes : keyframes.reverse(), options];
        }
    }
}
</script>