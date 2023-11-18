<script setup>
const props = defineProps({
  events: {
    type: Array,
    default: [
      {
        name: "No upcoming events...",
        icon: "close",
        description: "Keep an eye out for upcoming events!",
        date: new Date().toDateString(),
      }
    ]
  }
});

let days = {
  "Mon": "Monday",
  "Tue": "Tuesday",
  "Wed": "Wednesday",
  "Thu": "Thursday",
  "Fri": "Friday",
  "Sat": "Saturday",
  "Sun": "Sunday",
};

function formatDate(date) {
  let sections = date.split(" ");
  sections[1] = sections[1] + ',';
  for(let key of Object.keys(days)) {
    if(sections[0] === key) {
      sections[0] = days[key];
      break;
    }
  }
  return sections.join(' ');
}
</script>

<template>
  <h2 class="q-pa-none q-mb-md q-mt-md text-center" style="font-variant-caps: small-caps;">Events</h2>
  <div class="row flex justify-center">
    <div class="col-auto">
      <q-timeline color="black">
        <template v-for="e in events">
          <q-timeline-entry
            :title="e.name"
            :subtitle="(e.date)?formatDate(e.date):''"
            color="black"
            :icon="(e.icon)?e.icon:'event'"
          >
            <div>
              {{e.description}}
            </div>
          </q-timeline-entry>
        </template>
      </q-timeline>
    </div>
  </div>
</template>

<style scoped>

</style>
