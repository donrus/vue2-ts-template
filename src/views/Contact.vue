<template>
  <div class="contact">
    <header class="header-hero header-contact">
      <HeaderNav />
    </header>

    <section class="section-default section-contact-form" id="main">
      Contact
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import i18n from "@/i18n";
import appInfo from "@/app-info";
import HeaderNav from "@/components/HeaderNav.vue";

import NewslettertModel from "@/models/newsletter.model.vue";
import ContactModel from "@/models/contact.model.vue";

@Component({
  components: {
    HeaderNav
  },
  methods: {
    isPT() {
      return i18n.locale === "pt";
    }
  },
  name: "Contact",
  metaInfo() {
    return {
      title: i18n.locale === "pt" ? "Contato" : "Contact",
      meta: [
        {
          property: "og:description",
          content: "Contato"
        }
      ]
    };
  }
})
export default class Contact extends Vue {}
</script>

<style>
.form-error {
  color: #ff5031;
  font-size: 0.8rem;
  margin-top: 1rem;
}
.margin-desktop {
  margin-top: 30px;
}
@media only screen and (min-width: 768px) {
  .margin-desktop {
    margin-top: 150px;
  }
}
</style>
