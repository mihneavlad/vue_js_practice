<template>
<div class="hello">
  <!-- <h1>{{ msg }}</h1> -->
  <div id="app">
    <template>
      <div class="container">
        <b-form-select
           v-model="selected"
           :options="options"
           class="mb-3"
           value-field="item"
           text-field="name"
           @change="onChange"
           @getFeedName="getFeedName"
         ></b-form-select>
         <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="10000"
          controls
          img-width="520"
          img-height="250"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <b-carousel-slide
            v-for="i in 5" :key="i"
            img-src="https://picsum.photos/520/250/?image=52"
          >
          <a class="titlu" target="_blank" rel="noopener">
          </a>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </template>
  </div>
</div>
</template>

<script>

let feeds = [
  'https://www.spiegel.de/schlagzeilen/index.rss',
  'https://www.spiegel.de/politik/index.rss',
  'https://www.spiegel.de/wirtschaft/index.rss',
  'https://www.spiegel.de/panorama/index.rss',
  'https://www.spiegel.de/kultur/index.rss',
  'https://www.spiegel.de/netzwelt/index.rss',
  'https://www.spiegel.de/wissenschaft/index.rss',
  'https://www.spiegel.de/gesundheit/index.rss',
];



export default {
  data() {
    return {
      selected: this.getFeedName(0),
        options: [
          { item: this.getFeedName(0), name: 'DER SPIEGEL - Schlagzeilen' },
          { item: this.getFeedName(1), name: this.getFeedName(1) },
          { item: this.getFeedName(2), name: this.getFeedName(2) },
          { item: this.getFeedName(3), name: this.getFeedName(3) },
          { item: this.getFeedName(4), name: this.getFeedName(4) },
          { item: this.getFeedName(5), name: this.getFeedName(5) },
          { item: this.getFeedName(6), name: this.getFeedName(6) },
          { item: this.getFeedName(7), name: this.getFeedName(7) },
        ],
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    getFeedName(i) {
      this.feed = feeds[i];
      return this.feed;
    },
    onChange(event) {
      let feed = event
      console.log(feed);
      let proxyUrl = 'https://cors-anywhere.herokuapp.com/';

      fetch(proxyUrl + feed)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
          const items = data.querySelectorAll("item");

          let tiles = document.querySelectorAll('.carousel-item');
          tiles.forEach((tile, i) => {
            tile.setAttribute('data-slide-index', `${i}`);
          });


          items.forEach((el, i) => {
            if (i > 4) {
              return;
            }

            // const feedTitle = data.querySelector("title");
            // console.log(feedTitle);

            let imageLink = `${el.querySelector("enclosure")['attributes'].getNamedItem('url').value}`;
            let parentSlide = document.querySelector('[data-slide-index="' + `${i}` + '"]');
            let img = parentSlide.firstElementChild;
            img.src = imageLink;

            let title = `${el.querySelector("title").innerHTML}`;
            let titleHolder = img.nextElementSibling.firstElementChild;
            titleHolder.innerHTML = title;
            titleHolder.href = `${el.querySelector("link").innerHTML}`
          });
        });
    },

    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  },
}
</script>

<style lang="scss" scoped>
  @import 'node_modules/bootstrap/scss/bootstrap';
  @import 'node_modules/bootstrap-vue/src/index.scss';
  #app {
    text-align: center;
  }

</style>
