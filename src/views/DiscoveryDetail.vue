<script>
import { useRouter, useRoute } from "vue-router";
// mounted
import { onMounted, ref } from "vue";
import Header from "@/components/Header.vue";
import { useI18n } from "vue-i18n";
import apiService from "@/service/api-service.js";
import Bootstrap from "bootstrap/dist/js/bootstrap.bundle";

export default {
  components: {
    Header,
  },
  setup() {
    const router = useRouter();
    const { t, locale } = useI18n();
    const shopData = ref({
      store_name: "",
      subtitle: "",
      store_address: "",
      store_phone: "",
      class: "",
      description: "",
      store_fb: "",
      store_ig: "",
    
    });
    const route = useRoute();
    const shopID = route.params.id;

    const loadShopData = async () => {
      try {
        const response = await fetch('/data/bar.json'); // 載入 JSON 檔案
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          let data = await response.json(); // 將 JSON 資料轉換為陣列
          shopData.value = data.find((item) => item.id == shopID);
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
    }
    
    const toPrevious = () => {
      router.go(-1);
    }

    const goBannerBar = () => {
      window.location.href = `/detail/19`;
    };
 
    onMounted(() => {
      loadShopData();
    });

    return {
      t,
      locale,
      shopData,
      toPrevious,
      goBannerBar
    };
  },
};
</script>

<template>
  <Header title="合作店家" />
  <main id="index">
    <div class="container monthStar" id="banner" @click="goBannerBar()"></div>
    <div class="container" id="bars">
      <div class="row">
        <div class="col-12 px-5 BarDetailTitle">
          <h4>{{ shopData.store_name }}</h4>
        </div>
        <div class="col-12 px-5 BarDetailName">
          <div>
            <h4>{{ shopData.subtitle }}</h4>
            <div class="img" :style="`background-image: url('/assets/img/shop/${shopData.id}-1.jpg?time=202403291325')`"></div>
          </div>
        </div>

        <div class="col-12 px-5 BarDetailAddress">
          <div class="address_bg">
            <div class="annotation">
              <img src="/assets/img/annotation.png" />
              {{ shopData.store_address }}
            </div>
            <div class="address"></div>
          </div>
        </div>

        <div class="col-12 px-5 BarDetailTag">
          <div class="pill">{{ shopData.location }}</div>
          <div class="pill">{{ shopData.class }}</div>
          <hr />
        </div>

        <div class="col-12 px-5 BarDetailContent">
          <p>
            {{ shopData.description }}
          </p>
          <hr />
        </div>

        <div class="col-12 px-5 BarDetailSocial">
          <a v-if="shopData.store_fb.length > 0" :href="shopData.store_fb" target="_blank"><img src="/assets/img/share_fb.png" /></a>
          <a v-if="shopData.store_ig.length > 0" :href="shopData.store_ig" target="_blank"><img src="/assets/img/share_ig.png" /></a>
          <a :href="`https://www.google.com.tw/maps/place/${shopData.store_address}`" target="_blank"><img src="/assets/img/share_googlemap.png" /></a>
        </div>

        <div class="col-12 px-5 BarDetailAction">
          <a v-if="shopData.store_phone.length > 0" :href="`tel:${shopData.store_phone}`" target="_blank"><img src="/assets/img/call_shop.png" /></a>
          <a class="previous" @click="toPrevious()"><img src="/assets/img/previous_member.png" /></a>
        </div>
      </div>

      <div id="page_bottom"></div>
    </div>
  </main>
</template>
