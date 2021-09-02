import Vue from 'vue';
import VueI18n from 'vue-i18n';
import pt from '@/lang/pt'; 
import en from '@/lang/en';

Vue.use(VueI18n);

const messages = {
    en,
    pt,
}

const i18n = new VueI18n({
locale: 'pt', // set locale
fallbackLocale: 'pt', // set fallback locale
messages, // set locale messages
})

export default i18n;

