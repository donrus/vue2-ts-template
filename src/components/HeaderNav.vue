<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
      <div class="container">
        <router-link class="navbar-brand logo-header hide-mobile" to="/">
          <span class="logo-holder">
            <img src="img/logo-espressolabs.png" alt="Espresso Labs" />
          </span>
        </router-link>

        <router-link class="navbar-brand logo show-middle" to="/">
          <img
            src="img/logo-xic.png"
            alt="Espresso Labs"
            style="height: 40px"
          />
        </router-link>

        <router-link class="navbar-brand logo logo--mobile show-mobile" to="/">
          <img
            src="img/logo-xic.png"
            alt="Espresso Labs"
            style="height: 50px"
          />
        </router-link>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarCollapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/sobre">{{
                $t("header_about")
              }}</router-link>
            </li>

            <li class="nav-item">
              <router-link class="btn" active-class="active" to="/contato">{{
                $t("header_contato")
              }}</router-link>
            </li>
            <span class="nav-item--inline-mobile">
              <li class="nav-item">
                <router-link class active-class to="/#">
                  <button class="btn-icon" @click="changeLocale('pt')">
                    <img
                      src="icons/bandeira-br.png"
                      height="65%"
                      alt="Português"
                    />
                  </button>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class active-class to="/#">
                  <button class="btn-icon" @click="changeLocale('en')">
                    <img
                      src="icons/bandeira-uk.png"
                      height="65%"
                      alt="English"
                    />
                  </button>
                </router-link>
              </li>
            </span>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import i18n from "@/i18n";

@Component({
  components: {
    HeaderNav
  },
  data() {
    return {
      hoverContent: false,
      languages: [
        { flag: "us", language: "en", title: "EN" },
        { flag: "br", language: "pt", title: "PT" }
      ]
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    },
    isPT() {
      return i18n.locale === "pt";
    }
  }
})
export default class HeaderNav extends Vue {}
</script>

<style scoped lang="scss">
.fixed-top {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1020;
  background: rgba($color: #000000, $alpha: 0.8);
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.9) 70%,
    rgba(0, 0, 0, 0.5)
  );
}
</style>

<style lang="scss">
.logo--mobile {
  & img {
    padding: 0px;
  }

  width: auto;
}
.logo-header {
  width: 200px;
  position: absolute;
}

.logo-holder {
  height: 100%;
  position: relative;
  overflow: hidden;
}

.show-mobile {
  display: none !important;
}

.show-middle {
  display: none !important;
}

.nav-item {
  flex-shrink: 0;

  &--inline-mobile {
    display: flex;
  }
}

@media (max-width: 1000px) {
  .hide-mobile {
    display: none !important;
  }

  .show-mobile {
    display: none !important;
  }

  .show-middle {
    display: flex !important;
  }
}

@media (max-width: 780px) {
  .hide-mobile {
    display: none !important;
  }

  .show-middle {
    display: none !important;
  }

  .show-mobile {
    display: flex !important;
  }

  .nav-item--inline-mobile {
    margin: 15px 0;
  }
}

.links-content {
  position: absolute;
  border: 1px solid #3894ba;
  padding: 15px 30px;
  border-radius: 15px;
  color: white;
  font-size: 17px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  background-color: #000000;
  z-index: 99;

  & .nav-link {
    padding: 0 !important;
    color: white !important;
  }

  & a {
    text-decoration: none;
    color: white;
  }
}
</style>
