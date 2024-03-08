<template>
    <div :id="`door-${door.id}`" class="calendar-door"
        v-bind:style="{ backgroundImage: 'url(' + door.background + ')' }">
        <span class="calendar-label">{{ door.id }}</span>
    </div>
</template>

<style>
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
</style>

<script>
export default {
    props: [
        'door'
    ]
}
</script>