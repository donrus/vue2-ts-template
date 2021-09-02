<template>
  <footer class="text-center text-lg-left">
    <section>
      <div class="container container--void">Footer</div>
    </section>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import appInfo from "@/app-info";

@Component
export default class Footer extends Vue {
  private appInfo = appInfo;
}
</script>

<style>
footer .link a {
  transition: all 0.3s;
}

footer .link a:hover {
  color: #3d8fb1 !important;
}

footer section .container--void {
  padding: 100px 0 0 0;
}
</style>
