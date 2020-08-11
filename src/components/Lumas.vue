<template>
<div class="hello">
  <!-- <h1>{{ msg }}</h1> -->
  <div id="lumas">
    <template>
      <div class="container">
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="10000"
          controls
          indicators
          img-width="520"
          img-height="250"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            v-for="i in 5" :key="i"
            img-src="https://picsum.photos/520/250/?image=52"
          ></b-carousel-slide>
        </b-carousel>
      </div>
    </template>
  </div>

  <!-- <VueRssParser :feedUrl="feedUrl" :name="name" :limit="limit"/> -->
</div>
</template>





<!-- <script src="node_modules/@glidejs/glide/dist/glide.min.js"></script> -->
<script>
import { Glide, GlideSlide } from 'vue-glide-js'

let feeds = [
  // 'https://www.spiegel.de/schlagzeilen/index.rss',
  // 'https://www.spiegel.de/politik/index.rss',
  // 'https://www.spiegel.de/wirtschaft/index.rss',
  // 'https://www.spiegel.de/panorama/index.rss',
  // 'https://www.spiegel.de/kultur/index.rss',
  // 'https://www.spiegel.de/netzwelt/index.rss',
  // 'https://www.spiegel.de/wissenschaft/index.rss',
  // 'https://www.spiegel.de/gesundheit/index.rss',
];

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const url1 = 'https://www.spiegel.de/gesundheit/index.rss';

// for (let i = 0; i < 8; i++) {
  // let url1 = feeds[`${i}`];
console.log(proxyUrl + url1);

fetch(proxyUrl + url1)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
    const items = data.querySelectorAll("item");
    let html = ``;

    let tiles = document.querySelectorAll('.carousel-item');
    tiles.forEach((tile, i) => {
      tile.setAttribute('data-slide-index', `${i}`);
    });

    items.forEach((el, index) => {
      if (index > 4) {
        return;
      }

      let imageLink = `${el.querySelector("enclosure")['attributes'].getNamedItem('url').value}`;
      let title = `${el.querySelector("title").innerHTML}`;
      let parentSlide = document.querySelector('[data-slide-index="' + `${index}` + '"]');
      console.log(parentSlide);
      // console.log(parentSlide.firstElementChild.innerHTML);
      let img = parentSlide.firstElementChild;
      console.log(img);
      img.src = imageLink;

      let html =
      `
        <h3 class="article-title">
        <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
                 ${title}
        </a>
        </h3>
       `;
       parentSlide.insertAdjacentHTML("beforeend", html);
    });
  });


// }
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>

  <!-- Add "scoped" attribute to limit
  CSS to this component only -->
<style lang="scss" scoped>
  @import 'node_modules/bootstrap/scss/bootstrap';
  @import 'node_modules/bootstrap-vue/src/index.scss';

</style>
