<template>
    <div>
        <NavBar style="position: fixed; " />
        <br />
        <div style="display:flex;justify-content:center">
            <div class="mt-6">
                <v-card class="mx-auto" max-width="344">
                    <v-img src="https://s.isanook.com/jo/0/ud/484/2422629/keshi(2).jpg" height="200px" cover></v-img>

                    <v-card-title>
                        Keshi
                    </v-card-title>

                    <v-card-subtitle>
                        November 4, 1994.
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn color="orange-lighten-2" variant="text">
                            Personal information
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn :icon="keshi ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="keshi = !keshi"></v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="keshi">
                            <v-divider></v-divider>

                            <v-card-text>
                                Casey Luong , known mononymously by his stage name Keshi (stylized
                                in all lowercase), is an American singer, songwriter, record producer, and
                                multi-instrumentalist. Known for his distant falsetto vocals and textural instrumentals,
                                he
                                has accumulated over one billion streams with songs such as "Like I Need U", "2 Soon"
                                and
                                "Right Here".
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </div>

            <div class="mt-6">
                <v-card class="mx-auto" max-width="344">
                    <v-img
                        src="https://www.fungjaizine.com/wp-content/uploads/2020/01/yonlapa-fungjaizine-fungjai-cover-1.jpg"
                        height="200px" cover></v-img>

                    <v-card-title>
                        Yonlapa
                    </v-card-title>

                    <v-card-subtitle>
                        February 26, 2019.
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn color="orange-lighten-2" variant="text">
                            Personal information
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn :icon="Yonlapa ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="Yonlapa = !Yonlapa">
                        </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="Yonlapa">
                            <v-divider></v-divider>

                            <v-card-text>
                                At first, P'Meth invited Pee Na to come in to push him to become a solo artist and find
                                a backup for him. There is a producer of beer, Solitude is Bliss, but when I have a
                                complete backup And actually making music, everyone made music together. So it looks
                                more like a band. is no longer considered a solo artist.
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </div>

            <div class="mt-6">
                <v-card class="mx-auto" max-width="344">
                    <v-img src="https://luckytapes.com/wp-content/themes/luckytapes_2020_vr1/img/201102/lt_201102.jpg"
                        height="200px" cover></v-img>

                    <v-card-title>
                        LUCKY TAPES
                    </v-card-title>

                    <v-card-subtitle>
                        July 19, 2014
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn color="orange-lighten-2" variant="text">
                            Personal information
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn :icon="LUCKYTAPES ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                            @click="LUCKYTAPES = !LUCKYTAPES"></v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="LUCKYTAPES">
                            <v-divider></v-divider>

                            <v-card-text>
                                Lucky Tapes (ラッキーテープス) are a Japanese male trio band formed by keyboardist and vocalist
                                Kai Takahashi, bassist Keito Taguchi, and drummer Tsubasa Hamada in 2014. The current
                                lineup includes guitarist Kensuke Takahashi after Hamada left in 2016
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </div>
        </div>


        <div style="display:flex;justify-content:center">
            <div class="mt-6">
                <v-card class="mx-auto" max-width="344">
                    <v-img src="https://guardian.ng/wp-content/uploads/2021/11/Travis-Scott.-Photo-Getty.jpg"
                        height="200px" cover></v-img>

                    <v-card-title>
                        Travis scott
                    </v-card-title>

                    <v-card-subtitle>
                        April 30, 1991
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn color="orange-lighten-2" variant="text">
                            Personal information
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn :icon="travisscott ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                            @click="travisscott = !travisscott"></v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="travisscott">
                            <v-divider></v-divider>

                            <v-card-text>
                                Jacques Bermon Webster II , better known by his stage name Travis
                                Scott (formerly stylized as Travis $cott), is an American rapper, singer, songwriter,
                                and record producer. His stage name is the namesake of a favorite uncle combined with
                                the first name of one of his inspirations, Kid Cudi (whose real name is Scott Mescudi).
                                He has been nominated for eight Grammy Awards and won a Billboard Music Award and a
                                Latin Grammy Award.
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </div>

            <div class="mt-6">
                <v-card class="mx-auto" max-width="344">
                    <v-img src="https://www.naewna.com/uploads/news/source/454257.jpg" height="200px" cover></v-img>

                    <v-card-title>
                        Plastic Plastic
                    </v-card-title>

                    <v-card-subtitle>
                        IDK, 2559
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn color="orange-lighten-2" variant="text">
                            Personal information
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn :icon="Plasticplastic ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                            @click="Plasticplastic = !Plasticplastic">
                        </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="Plasticplastic">
                            <v-divider></v-divider>

                            <v-card-text>
                                Plastic Plastic is a Thai nationality band, pop and indie genre consisting of 2
                                members, who are brothers and sisters, Pokpong Jitdee (Pong) and Tongta Jitdee (song).
                                They were previously under Believe Records and released became an independent artist in
                                2016
                                plastic present Plastic has been under What The Duck since 2018.
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </div>

            <div class="mt-6">
                <v-card class="mx-auto" max-width="344">
                    <v-img src="https://martinharleyband.com/wp-content/uploads/2019/06/one-direction.jpg"
                        height="200px" cover></v-img>

                    <v-card-title>
                        One direction
                    </v-card-title>

                    <v-card-subtitle>
                        IDK, 2010
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn color="orange-lighten-2" variant="text">
                            Personal information
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn :icon="direction ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                            @click="direction = !direction"></v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="direction">
                            <v-divider></v-divider>

                            <v-card-text>
                                One Direction, often shortened to 1D, are an English-Irish pop boy band formed in
                                London, England in 2010. The group are composed of Niall Horan, Liam Payne, Harry Styles
                                and Louis Tomlinson; Zayn Malik left the group in March 2015. The group signed with
                                Simon Cowell's record label Syco Records after forming and finishing third in the
                                seventh series of the British televised singing competition The X Factor in 2010.
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </div>
        </div>

    </div>

</template>

<script>
import NavBar from '../components/NavBaa.vue';
export default {
    components: {
        NavBar,
    },
    data: () => ({
        keshi: false,
        Yonlapa: false,
        LUCKYTAPES: false,
        travisscott: false,
        Plasticplastic: false,
        direction: false,

    }),
}
</script>

<style>
</style>
