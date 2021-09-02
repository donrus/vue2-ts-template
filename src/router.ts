import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';

Vue.use(Router);
Vue.use(Meta, {
  keyName: 'metaInfo', // the component option name that vue-meta looks for meta info on.
  attribute: 'data-vue-meta', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'data-vue-meta-server-rendered', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'vmid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
});

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/sobre',
      name: 'about',
      component: About,
    },
    {
      path: '/contato',
      name: 'contact',
      component: Contact,
    },
  ],
});
