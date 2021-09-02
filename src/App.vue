<template>
  <div id="app">
    <router-view />
    <Footer />
  </div>
</template>

<style lang="scss">
#app {
  background-image: linear-gradient(to bottom, #000000 30%, #171c26 100%);
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Footer,
  },
  name: "App",
  metaInfo: {
    title: "",
    titleTemplate:
      "%s | Espresso Labs | Desenvolvimento de Aplicativo, Software e Soluções Digitais Personalizadas.",
    meta: [
      {
        property: "og:description",
        content:
          "A Espresso Labs trabalha com desenvolvimento de aplicativos e softwares sob medida para impulsionar seu negócio.",
      },
    ],
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  overflow: hidden;
}
</style>
