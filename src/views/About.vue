<template>
  <div class="about">
    <header class="header-hero">
      <HeaderNav />
    </header>

    <section class="section-default section-about">About</section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderNav from "@/components/HeaderNav.vue";
import i18n from "@/i18n";

@Component({
  components: {
    HeaderNav
  },
  name: "About",
  metaInfo() {
    return {
      title: i18n.locale === "pt" ? "Sobre" : "About us",
      meta: [
        {
          property: "og:description",
          content:
            "A Espresso Labs é uma casa de código focada na análise de processos para oferecer soluções digitais assertivas com a melhor qualidade. Somos programadores, designers e engenheiros voltados para o desenvolvimento de aplicativos, sistemas, APIs e servidores sob medida."
        }
      ]
    };
  }
})
export default class About extends Vue {}
</script>

<style></style>

<style lang="scss" scoped></style>
