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
    const northShopData = ref([]);
    const midShopData = ref([]);
    const southShopData = ref([]);
    const northShopHighlight = ref([10, 19, 17, 36, 14, 26, 16, 42, 21, 25]);
    const northPage = ref(1);
    const midShopHighlight = ref([50, 51, 47, 52, 58, 62, 55, 68, 61, 46]);
    const midPage = ref(1);
    const southShopHighlight = ref([91, 94, 88, 89, 92, 95, 96, 86, 97, 85]);
    const southPage = ref(1);
    const route = useRoute();

    const loadShopData = async () => {
      try {
        const response = await fetch("/data/bar.json"); // 載入 JSON 檔案
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let data = await response.json(); // 將 JSON 資料轉換為陣列

        northShopHighlight.value.forEach((shopGroup) => {
          northShopData.value.push(data.find((item) => item.id == shopGroup));
        });

        midShopHighlight.value.forEach((shopGroup) => {
          midShopData.value.push(data.find((item) => item.id == shopGroup));
        });

        southShopHighlight.value.forEach((shopGroup) => {
          southShopData.value.push(data.find((item) => item.id == shopGroup));
        });
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    const scrollToNextSlide = (carouselId) => {
      //scroll 290px
      const carousel = document.getElementById(carouselId);
      const scrollAmount = 275;
      const scrollDuration = 300; // Adjust the duration as needed

      switch (carouselId) {
        case `northShop`:
          northPage.value++;
          break;

        case `midShop`:
          midPage.value++;
          break;

        case `southShop`:
          southPage.value++;
          break;

        default:
          break;
      }

      const scrollStep = (timestamp) => {
        if (!startTime) {
          startTime = timestamp;
        }

        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / scrollDuration, 1);
        const scrollDistance = scrollAmount * progress;

        carousel.scrollTo({
          left: carousel.scrollLeft + scrollDistance,
          behavior: "smooth",
        });

        if (progress < 1) {
          requestAnimationFrame(scrollStep);
        } else {
          startTime = null;
        }
      };

      let startTime = null;
      requestAnimationFrame(scrollStep);
    };

    const goBannerBar = () => {
      router.push({ path: "/detail/19" });
    };

    const scrollToPrevSlide = (carouselId) => {
      //scroll 290px
      const carousel = document.getElementById(carouselId);
      const scrollAmount = 275;
      const scrollDuration = 300; // Adjust the duration as needed
      switch (carouselId) {
        case `northShop`:
          northPage.value--;
          break;

        case `midShop`:
          midPage.value--;
          break;

        case `southShop`:
          southPage.value--;
          break;

        default:
          break;
      }

      const scrollStep = (timestamp) => {
        if (!startTime) {
          startTime = timestamp;
        }

        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / scrollDuration, 1);
        const scrollDistance = scrollAmount * progress;

        carousel.scrollTo({
          left: carousel.scrollLeft - scrollDistance,
          behavior: "smooth",
        });

        if (progress < 1) {
          requestAnimationFrame(scrollStep);
        } else {
          startTime = null;
        }
      };

      let startTime = null;
      requestAnimationFrame(scrollStep);
    };

    onMounted(() => {
      loadShopData();
    });

    return {
      t,
      locale,
      northShopData,
      midShopData,
      southShopData,
      northShopHighlight,
      midShopHighlight,
      southShopHighlight,
      scrollToNextSlide,
      scrollToPrevSlide,
      northPage,
      midPage,
      southPage,
      goBannerBar,
    };
  },
};
</script>

<template>
  <Header />
  <main id="index">
    <div class="container monthStar" id="banner" @click="goBannerBar()"></div>
    <div class="container" id="bars">
      <div class="row">
        <div class="col-12 px-5 topBarTitle">
          <h4>本月主打星店家</h4>
        </div>
        <div class="col-12 px-5 areaHeading">
          <h5>北部店家</h5>
        </div>
        <div id="carouselNorth" class="carousel slide">
          <div class="barContainer">
            <div class="barRow" id="northShop">
              <div
                class="barCol"
                v-for="(shop, shopIndex) in northShopData"
                :key="shopIndex"
              >
                <router-link :to="'/detail/' + shop.id">
                  <div class="octagonBar">
                    <div class="title">{{ shop.subtitle }}</div>
                    <div
                      class="bar_img"
                      :style="`background-image: url('/assets/img/shop/${shop.id}-1.jpg?time=202403291325')`"
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
          <button class="carousel-control-prev">
            <img
              src="/assets/img/carousel_prev.png"
              @click="scrollToPrevSlide(`northShop`)"
              v-if="northPage > 1"
            />
          </button>
          <button
            class="carousel-control-next"
            @click="scrollToNextSlide(`northShop`)"
          >
            <img src="/assets/img/carousel_next.png" v-if="northPage < 5" />
          </button>
        </div>

        <div class="col-12 px-5 areaHeading">
          <h5>中部店家</h5>
        </div>
        <div id="carouselMid" class="carousel slide">
          <div class="barContainer">
            <div class="barRow" id="midShop">
              <div
                class="barCol"
                v-for="(shop, shopIndex) in midShopData"
                :key="shopIndex"
              >
                <router-link :to="'/detail/' + shop.id">
                  <div class="octagonBar">
                    <div class="title">{{ shop.subtitle }}</div>
                    <div
                      class="bar_img"
                      :style="`background-image: url('/assets/img/shop/${shop.id}-1.jpg?time=202403291325')`"
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
          <button class="carousel-control-prev">
            <img
              src="/assets/img/carousel_prev.png"
              @click="scrollToPrevSlide(`midShop`)"
              v-if="midPage > 1"
            />
          </button>
          <button
            class="carousel-control-next"
            @click="scrollToNextSlide(`midShop`)"
          >
            <img src="/assets/img/carousel_next.png" v-if="midPage < 5" />
          </button>
        </div>

        <div class="col-12 px-5 areaHeading">
          <h5>南部店家</h5>
        </div>
        <div id="carouselSouth" class="carousel slide">
          <div class="barContainer">
            <div class="barRow" id="southShop">
              <div
                class="barCol"
                v-for="(shop, shopIndex) in southShopData"
                :key="shopIndex"
              >
                <router-link :to="'/detail/' + shop.id">
                  <div class="octagonBar">
                    <div class="title">{{ shop.subtitle }}</div>
                    <div
                      class="bar_img"
                      :style="`background-image: url('/assets/img/shop/${shop.id}-1.jpg?time=202403291325')`"
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
          <button class="carousel-control-prev">
            <img
              src="/assets/img/carousel_prev.png"
              @click="scrollToPrevSlide(`southShop`)"
              v-if="southPage > 1"
            />
          </button>
          <button
            class="carousel-control-next"
            @click="scrollToNextSlide(`southShop`)"
          >
            <img src="/assets/img/carousel_next.png" v-if="southPage < 5" />
          </button>
        </div>
      </div>

      <div id="page_bottom">
        <img src="/assets/img/previous.png" />
      </div>
    </div>
  </main>
</template>
