<template>
  <div class="home">
    <header class="header-hero">
      <HeaderNav />
    </header>

    <section class="section-default section-projects" id="section-projects">
      Home
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import i18n from "@/i18n";
import HeaderNav from "@/components/HeaderNav.vue";

import NewslettertModel from "@/models/newsletter.model.vue";

@Component({
  components: {
    HeaderNav
  },
  methods: {
    isPT() {
      return i18n.locale === "pt";
    }
  },
  name: "Home",
  metaInfo() {
    return {
      title: i18n.locale === "pt" ? "Início" : "Home",

      meta: [
        {
          property: "og:description",
          content:
            "Soluções digitais, resultados concretos. Desenvolvimento de aplicativos, sistemas, APIs e servidores sob medida, com o que há de melhor na tecnologia."
        }
      ]
    };
  }
})
export default class Home extends Vue {}
</script>

<style></style>
