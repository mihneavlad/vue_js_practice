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
          controls="true"
          img-width="520"
          img-height="250"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            v-for="i in 5" :key="i"
            caption="First slide"
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
      // if (index > 2) {
      //   return false;
      // }
      if (index > 4) {
        return;
      }

      let imageLink = `${el.querySelector("enclosure")['attributes'].getNamedItem('url').value}`;
      let title = `${el.querySelector("title").innerHTML}`;


      // console.log(imageLink);
      // console.log('[aria-posinset="' + `${index}` + '"]');
      // console.log('[data-glide-index="' + `${index}` + '"]');
      // let parentSlide = document.querySelectorAll('[data-glide-index="' + `${index}` + '"]')[0];

      // console.log('miorlau');
      // console.log('[data-slide-index="0"]');
      // console.log('[data-slide-index="' + `${index}` + '"]');
      //
      // let parentSlide = document.querySelector('[data-slide-index="0"]');
      // let parentSlide0 = document.querySelector('[data-slide-index="5"]');
      let parentSlide = document.querySelector('[data-slide-index="' + `${index}` + '"]');
      console.log(parentSlide);
      // console.log(parentSlide.firstElementChild.innerHTML);
      let img = parentSlide.firstElementChild;
      img.src = imageLink
      console.log(img);
      // let parentSlide = document.querySelector('.carousel-inner');
      // console.log('bar');

      // let tiles = document.querySelectorAll('.carousel-item');
      // tiles.forEach(tile => {
      //   console.log(imageLink);
      //   console.log(imgLink);
      // })

      // var tileContainer = parentSlide.firstElementChild;
      // console.log(tileContainer);
      // console.log('foo');
      // console.log(imgLink);
      // console.log('miau');
      // imgLink.src = imageLink;
      // var caption = document.querySelector('.carousel-caption').firstElementChild;
      // caption.innerHTML = title;
      // console.log('miau');
      // let nextSlide = tileContainer.firstElementSibling;
      // console.log(nextSlide);
      // let nextSlide = tileContainer.nextElementSibling;



      // html =
      //   `

      //     <img src="${imageLink}">
      //     <h3>
      //       <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener" class="glidelink">
      //         ${title}
      //       </a>
      //     <p>foo</p>
      //     </h3>
      // `;
      // parentSlide.insertAdjacentHTML("beforeend", html);
    });
  });


// }
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      // imageLink: `${el.querySelector("enclosure")['attributes'].getNamedItem('url').value}`
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
  // SIMPLE GRID - SASS/SCSS

  // @import url(https://fonts.googleapis.com/css?family=Lato:400,300,300italic,400italic,700,700italic);
  // @import "node_modules/@glidejs/glide/src/assets/sass/glide.core";
  // @import "node_modules/@glidejs/glide/src/assets/sass/glide.theme";
  @import 'node_modules/bootstrap/scss/bootstrap';
  @import 'node_modules/bootstrap-vue/src/index.scss';

</style>
