<script>
import { useRouter, useRoute } from "vue-router";
// mounted
import { onMounted, ref } from "vue";
import Header from "@/components/Header.vue";
import { useI18n } from "vue-i18n";
import Bootstrap from "bootstrap/dist/js/bootstrap.bundle";

export default {
  components: {
    Header,
  },
  setup() {
    const router = useRouter();
    const { t, locale } = useI18n();
    const shopData = ref([]);
    const route = useRoute();
    const shopID = route.params.id;
    const locationSelected = ref("北部");
    const styleSelected = ref("");
    const barPerPage = 6;
    const currentPage = ref(1);

    const loadShopData = async () => {
      try {
        const response = await fetch("/data/bar.json"); // 載入 JSON 檔案
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let data = await response.json(); // 將 JSON 資料轉換為陣列
        shopData.value = data.filter(
          (item) => item.location == locationSelected.value
        );
        if (styleSelected.value != "") {
          shopData.value = shopData.value.filter(
            (item) => item.class == styleSelected.value
          );
        }

        shopData.value = shopData.value.slice(
          0,
          currentPage.value * barPerPage
        );

      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    const changeLocation = (location) => {
      currentPage.value = 1;
      locationSelected.value = location;
      loadShopData();
    };

    const changeStyle = (style) => {
      currentPage.value = 1;

      if(styleSelected.value == style){
        styleSelected.value = '';
        loadShopData();
        return;
      }

      styleSelected.value = style;
      loadShopData();
    };

    onMounted(() => {
      loadShopData();

      const carouselList = document.querySelectorAll(".carousel");
      carouselList.forEach((carousel) => {
        const carouselId = carousel.id;
        const carouselInstance = new Bootstrap.Carousel(
          document.getElementById(carouselId),
          {
            interval: 2000,
          }
        );
      });

      //scroll to bottom, load more
      window.onscroll = function () {
        if (
          window.innerHeight + window.scrollY >= document.body.offsetHeight - 200
        ) {
          currentPage.value++;          
          loadShopData();

        }
      };
    });

    return {
      t,
      locale,
      shopData,
      changeLocation,
      changeStyle,
      locationSelected,
      styleSelected,
    };
  },
};
</script>

<template>
  <Header title="合作店家" />
  <main>
    <div
      id="banner_carousel"
      class="carousel slide"
      data-bs-ride="true"
      data-bs-touch="true"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#banner_carousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#banner_carousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#banner_carousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#banner_carousel"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#banner_carousel"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#banner_carousel"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
        <button
          type="button"
          data-bs-target="#banner_carousel"
          data-bs-slide-to="6"
          aria-label="Slide 7"
        ></button>
        <button
          type="button"
          data-bs-target="#banner_carousel"
          data-bs-slide-to="7"
          aria-label="Slide 8"
        ></button>
        <button
          type="button"
          data-bs-target="#banner_carousel"
          data-bs-slide-to="8"
          aria-label="Slide 9"
        ></button>
        <button
          type="button"
          data-bs-target="#banner_carousel"
          data-bs-slide-to="9"
          aria-label="Slide 10"
        ></button>
        <button
          type="button"
          data-bs-target="#banner_carousel"
          data-bs-slide-to="10"
          aria-label="Slide 10"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <router-link :to="{ name: 'discovery-detail', params: { id: 10 } }">
            <img src="/assets/img/discovery/10.png" class="d-block w-100" alt="..." />
          </router-link>
        </div>
        <div class="carousel-item">
          <router-link :to="{ name: 'discovery-detail', params: { id: 16 } }">
            <img src="/assets/img/discovery/16.png" class="d-block w-100" alt="..." />
          </router-link>
        </div>
        <div class="carousel-item">
          <router-link :to="{ name: 'discovery-detail', params: { id: 19 } }">
            <img src="/assets/img/discovery/19.png" class="d-block w-100" alt="..." />
          </router-link>
        </div>
        <div class="carousel-item">
          <router-link :to="{ name: 'discovery-detail', params: { id: 40 } }">
            <img src="/assets/img/discovery/40.png" class="d-block w-100" alt="..." />
          </router-link>
        </div>
        <div class="carousel-item">
          <router-link :to="{ name: 'discovery-detail', params: { id: 45 } }">
            <img src="/assets/img/discovery/45.png" class="d-block w-100" alt="..." />
          </router-link>
        </div>
        <div class="carousel-item">
          <router-link :to="{ name: 'discovery-detail', params: { id: 50 } }">
            <img src="/assets/img/discovery/50.png" class="d-block w-100" alt="..." />
          </router-link>
        </div>
        <div class="carousel-item">
          <router-link :to="{ name: 'discovery-detail', params: { id: 51 } }">
            <img src="/assets/img/discovery/51.png" class="d-block w-100" alt="..." />
          </router-link>
        </div>
        <div class="carousel-item">
          <router-link :to="{ name: 'discovery-detail', params: { id: 76 } }">
            <img src="/assets/img/discovery/76.png" class="d-block w-100" alt="..." />
          </router-link>
        </div>
        <div class="carousel-item">
          <router-link :to="{ name: 'discovery-detail', params: { id: 79 } }">
            <img src="/assets/img/discovery/79.png" class="d-block w-100" alt="..." />
          </router-link>
        </div>
        <div class="carousel-item">
          <router-link :to="{ name: 'discovery-detail', params: { id: 80 } }">
            <img src="/assets/img/discovery/80.png" class="d-block w-100" alt="..." />
          </router-link>
        </div>
      </div>
    </div>
    <div class="container" id="bars">
      <div class="row">
        <div class="col-12 px-5 discoveryBarTitle">
          <h4>探索酒吧</h4>
        </div>
      </div>

      <div class="row selectAreaStyle px-5">
        <div class="col-3">
          <h6>地點</h6>
        </div>
        <div class="col-9">
          <div
            class="pill"
            role="botton"
            :class="locationSelected == `北部` ? `active` : ``"
            @click="changeLocation(`北部`)"
          >
            北部
          </div>
          <div
            class="pill"
            role="botton"
            :class="locationSelected == `中部` ? `active` : ``"
            @click="changeLocation(`中部`)"
          >
            中部
          </div>
          <div
            class="pill"
            role="botton"
            :class="locationSelected == `南部` ? `active` : ``"
            @click="changeLocation(`南部`)"
          >
            南部
          </div>
        </div>
      </div>

      <div class="row selectAreaStyle px-5">
        <div class="col-3">
          <h6>風格</h6>
        </div>
        <div class="col-9">
          <div
            class="pill"
            role="botton"
            :class="styleSelected == `派對聚餐` ? `active` : ``"
            @click="changeStyle(`派對聚餐`)"
          >
            派對聚餐
          </div>
          <div
            class="pill"
            role="botton"
            :class="styleSelected == `深夜酒吧` ? `active` : ``"
            @click="changeStyle(`深夜酒吧`)"
          >
            深夜酒吧
          </div>
          <div
            class="pill"
            role="botton"
            :class="styleSelected == `晚餐小酌` ? `active` : ``"
            @click="changeStyle(`晚餐小酌`)"
          >
            晚餐小酌
          </div>
          <div
            class="pill"
            role="botton"
            :class="styleSelected == `日式居酒屋` ? `active` : ``"
            @click="changeStyle(`日式居酒屋`)"
          >
            日式居酒屋
          </div>
          <div
            class="pill"
            role="botton"
            :class="styleSelected == `特色店家` ? `active` : ``"
            @click="changeStyle(`特色店家`)"
          >
            特色店家
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="row">
          <div
            class="col-6 barColDiscovery"
            v-for="(shop, shopIndex) in shopData"
            :key="shopIndex"
          >
            <router-link :to="'/discovery/detail/' + shop.id">
              <div class="octagonBar">
                <div class="title">{{ shop.subtitle }}</div>
                <div
                  class="bar_img"
                  :style="`background-image: url('/assets/img/octagon/${shop.id}.png?time=202403291325')`"
                ></div>
                <div class="bar_title">
                  <h5>{{ shop.store_name }}</h5>
                </div>
                <div class="bar_address">
                  <p>📍{{ shop.store_address }}</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div id="page_bottom">
        <img src="/assets/img/previous.png" />
      </div>
    </div>
  </main>
</template>
