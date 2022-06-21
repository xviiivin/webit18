
<style>
</style>

<template>
  <div>
    <NavBar style="position:fixed" />
    <v-container>
      <v-row justify="space-around">
        <v-card width="400" class="mt-16 ">

          <v-img height="200" src="https://mapio.net/images-p/3611590.jpg" cover>
            <v-layout full-height>

              <v-app-bar density="comfortable" color="rgba(0, 0, 0, 0)" flat theme="dark">

                <v-app-bar-title class="text-h6 text-black">
                  Education
                </v-app-bar-title>
              </v-app-bar>
            </v-layout>
          </v-img>



          <v-card-text>
            <div class="font-weight-bold ml-1 mb-2">
              Graduated
            </div>

            <v-timeline density="compact" truncate-line="none">
              <v-timeline-item v-for="message in messages" :key="message.time" :dot-color="message.color"
                size="x-small">
                <div class="mb-4">
                  <div class="font-weight-normal">
                    <strong>{{ message.where }}</strong>
                  </div>
                  <div>{{ message.message }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-row>

    </v-container>
  </div>
</template>



<script>
import NavBar from '../components/NavBaa.vue';
export default {
  components: {
    NavBar,
  },
  data: () => ({

    messages: [
      {
        where: '-Bangkok Christian College',
        message: `Primary school.`,
        color: 'deep-purple lighten-1',
      },
      {
        where: '-Bangkok Christian College',
        message: 'High school.',
        color: 'yellow darken-1',
      },
      {
        where: "-Kmitl",
        message: 'University.',
        color: 'orange accent-4',
      },
    ],

  }),
}
</script>

