<template>
  <div>
    <div v-for="winzz in testfirebase" :key="winzz.Name">
      <li>name {{ winzz.Name }}</li>

    </div>
    <div>
      <v-btn @click="what">asdasdadad </v-btn>
    </div>
    <div style="position:absolute;">
      <NavBar />
    </div>
    <br>
    <div style="margin-top:20%">
      <center>Not thing to do</center>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import db from '../config/firebase.js'
import NavBar from '../components/NavBaa.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    NavBar,
  },
  data() {
    return {
      testfirebase: []
    }
  },
  methods: {
    what() {
      console.log(this.testfirebase)
    }
  },
  firestore: {
    testfirebase: db.collection("Users")
  },

});
</script>
