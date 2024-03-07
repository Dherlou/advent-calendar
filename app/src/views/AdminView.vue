<template>
  <div id="calendar">
    <div :id="`door-${index}`" class="calendar-door" v-for="(door, idx) in doors">
      <span class="calendar-label">{{ door }}</span>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
#calendar {
  border: 1px solid #fff;
  border-radius: 0.6rem;
  gap: 1rem;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-template-rows: auto;
  height: auto;
  padding: 0.6rem;
  margin: 0 auto;
  width: 100%;
}
.calendar-door {
  aspect-ratio: 1;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 1px rgba(71, 71, 71, .5);
  overflow: hidden;
  position: relative;
}
.calendar-label {
  color: #eee;
  font-weight: 700;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>

<script>
export default {
  data() {
    return {
      doors: [
        "Tag 1",
        "Tag 2",
        "Tag 3",
        "Tag 4",
        "Tag 5",
        "Tag 6",
        "Tag 7",
        "Tag 8",
        "Tag 9",
        "Tag 10",
        "Tag 11",
        "Tag 12",
        "Mitte",
        "Tag 13",
        "Tag 14",
        "Tag 15",
        "Tag 16",
        "Tag 17",
        "Tag 18",
        "Tag 19",
        "Tag 20",
        "Tag 21",
        "Tag 22",
        "Tag 23",
        "Tag 24",
      ]
    }
  }
}
</script>
