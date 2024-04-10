<template>
  <header>
    <div class="container">
      <router-link :to="{name: 'home' }"><img src="/assets/img/logo.png" class="logo" alt="logo" /></router-link>
      <span>{{ title }}</span>
    </div>
  </header>
</template>

<script>
import { useI18n } from "vue-i18n";
import { onMounted, ref, defineProps } from "vue";

export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "本月活動",
    }
  },
  setup(props) {
    const { t, locale } = useI18n();
    const categories = ref([]);
    const cartCount = ref(0);
    const localeOptions = ref([
      {
        lang: "eng",
        name: "English",
      },
      {
        lang: "zh_TW",
        name: "繁體中文",
      },
      {
        lang: "jp",
        name: "日本語",
      },
    ]);

    const setLocale = (lang) => {
      locale.value = lang;
      localStorage.setItem("locale", lang);
    };

    const goHome = () => {
      console.log(123)
    };

    return {
      t,
      locale,
      setLocale,
      localeOptions,
      goHome
    };
  },
};
</script>