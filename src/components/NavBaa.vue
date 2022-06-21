<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@800&display=swap');

* {
    font-family: 'Orbitron', sans-serif;
}
</style>
<template>


    <v-card>
        <v-layout>


            <v-navigation-drawer class="absolute">
                <v-list-item
                    prepend-avatar="https://video.fbkk22-8.fna.fbcdn.net/v/t39.30808-6/271284985_3137400796542567_8030713846516550372_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=H3TIMfKA-NgAX9Ku6H8&_nc_ht=video.fbkk22-8.fna&oh=00_AT9eHO_nWFt6NR978N_JgplbMdGDsXsSEDOE43U6yTMLhQ&oe=62B3840A"
                    title="Wiwat liangkobkit" href="https://www.facebook.com/profile.php?id=100008180315272" target="_blank">
                </v-list-item>

                <v-divider>


                </v-divider>

                <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-home-city" value="home">
                        <router-link class="text-decoration-none text-black" :to="{ name: 'Na1' }">Home</router-link>
                    </v-list-item>

                    <v-list-item prepend-icon="mdi-account" value="account">
                        <router-link class="text-decoration-none text-black" :to="{ name: 'Na2' }">Education
                        </router-link>
                    </v-list-item>

                    <v-list-item prepend-icon="mdi-account-group-outline" value="users">
                        <router-link class="text-decoration-none text-black" :to="{ name: 'Na3' }">Artist</router-link>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>

            <div>


            </div>

            <v-main style="height: 1250px"></v-main>
        </v-layout>
    </v-card>
</template>

<script>
export default {
    name: "HelloWorld",

    data() {
        return {
            drawer: true,
            items: [
                { icon: 'mdi-home-city' },
                { icon: 'mdi-account' },
                { icon: 'mdi-account-group-outline' },
            ],
        }
    },

};
</script>