<!-- <link rel="stylesheet" href="node_modules/@glidejs/glide/dist/css/glide.core.min.css"> -->

<template>
<div class="hello">
  <h1>{{ msg }}</h1>
    <div id="glide">
      <vue-glide>
        <vue-glide-slide v-for="i in 10" :key="i">
        </vue-glide-slide>
      </vue-glide>
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
    items.forEach((el, index) => {
      if (index > 9) {
        return false;
      }



      let imageLink = `${el.querySelector("enclosure")['attributes'].getNamedItem('url').value}`;
      let title = `${el.querySelector("title").innerHTML}`;

      let parentSlide = document.querySelectorAll('[data-glide-index="' + `${index}` + '"]')[0];
      html =
        `
          <img src="${imageLink}">
          <h3>
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
  name: 'Lumas',
  components: {
        [Glide.name]: Glide,
        [GlideSlide.name]: GlideSlide
      },
  data() {
    return {
      msg: 'Stories that might catch your interest'
    }
  }
}
</script>

  <!-- Add "scoped" attribute to limit
  CSS to this component only -->
  <style lang="scss" scoped>
  // SIMPLE GRID - SASS/SCSS

  @import url(https://fonts.googleapis.com/css?family=Lato:400,300,300italic,400italic,700,700italic);
  @import "node_modules/@glidejs/glide/src/assets/sass/glide.core";
  @import "node_modules/@glidejs/glide/src/assets/sass/glide.theme";


  // fonts
  $font-family: 'Lato', Helvetica, sans-serif;
  $font-weight-light: 300;
  $font-weight-regular: 400;
  $font-weight-heavy: 700;
  $font-height: 1.5;

  // colors
  $dark-grey: #FF00FF;

  // universal

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
    font-size: 100%;
  }

  * {
    font-family: $font-family;
    color: $dark-grey;
    line-height: $font-height;
  }

  // typography

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.375rem;
  }

  h4 {
    font-size: 1.125rem;
  }

  h5 {
    font-size: 1rem;
  }

  h6 {
    font-size: 0.875rem;
  }

  p {
    font-size: 1.125rem;
    font-weight: 200;
    line-height: 1.8;
  }

  .font-light {
    font-weight: $font-weight-light;
  }

  .font-regular {
    font-weight: $font-weight-regular;
  }

  .font-heavy {
    font-weight: $font-weight-heavy;
  }

  // utility

  .left {
    text-align: left;
  }

  .right {
    text-align: right;
  }

  .center {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .justify {
    text-align: justify;
  }

  .hidden-sm {
    display: none;
  }

  // grid

  $width: 96%;
  $gutter: 4%;
  $breakpoint-small: 33.75em; // 540px
  $breakpoint-med: 45em; // 720px
  $breakpoint-large: 60em; // 960px

  .container {
    width: 90%;
    margin-left: auto;
    margin-right: auto;

    // @media only screen and (min-width: $breakpoint-small) {
    //   width: 80%;
    // }

    // @media only screen and (min-width: $breakpoint-large) {
    //   width: 75%;
    //   max-width: 60rem;
    // }
  }

  .row {
    position: relative;
    width: 100%;
    display: flex;
  }

  .row [class^="col"] {
    float: left;
    margin: 0.5rem 2%;
    min-height: 0.125rem;
  }

  .row::after {
    content: "";
    display: table;
    clear: both;
  }

  .col-1,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8,
  .col-9,
  .col-10,
  .col-11,
  .col-12 {
    width: $width;
  }

  .col-1-sm { width:($width / 12) - ($gutter * 11 / 12); }
  .col-2-sm { width: ($width / 6) - ($gutter * 10 / 12); }
  .col-3-sm { width: ($width / 4) - ($gutter * 9 / 12); }
  .col-4-sm { width: ($width / 3) - ($gutter * 8 / 12); }
  .col-5-sm { width: ($width / (12 / 5)) - ($gutter * 7 / 12); }
  .col-6-sm { width: ($width / 2) - ($gutter * 6 / 12); }
  .col-7-sm { width: ($width / (12 / 7)) - ($gutter * 5 / 12); }
  .col-8-sm { width: ($width / (12 / 8)) - ($gutter * 4 / 12); }
  .col-9-sm { width: ($width / (12 / 9)) - ($gutter * 3 / 12); }
  .col-10-sm { width: ($width / (12 / 10)) - ($gutter * 2 / 12); }
  .col-11-sm { width: ($width / (12 / 11)) - ($gutter * 1 / 12); }
  .col-12-sm { width: $width; }

  @media only screen and (min-width: $breakpoint-med) {
    .col-1 { width:($width / 12) - ($gutter * 11 / 12); }
    .col-2 { width: ($width / 6) - ($gutter * 10 / 12); }
    .col-3 { width: ($width / 4) - ($gutter * 9 / 12); }
    .col-4 { width: ($width / 3) - ($gutter * 8 / 12); }
    .col-5 { width: ($width / (12 / 5)) - ($gutter * 7 / 12); }
    .col-6 { width: ($width / 2) - ($gutter * 6 / 12); }
    .col-7 { width: ($width / (12 / 7)) - ($gutter * 5 / 12); }
    .col-8 { width: ($width / (12 / 8)) - ($gutter * 4 / 12); }
    .col-9 { width: ($width / (12 / 9)) - ($gutter * 3 / 12); }
    .col-10 { width: ($width / (12 / 10)) - ($gutter * 2 / 12); }
    .col-11 { width: ($width / (12 / 11)) - ($gutter * 1 / 12); }
    .col-12 { width: $width; }

    .hidden-sm {
      display: block;
    }
  }
</style>






<!--

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script> -->
