<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ coite }}</h2>
    <!-- <VueRssParser :feedUrl="feedUrl" :name="name" :limit="limit"/> -->
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          muie-rapid

        </a>
      </li>
    </ul>
  </div>
</template>


<script>

// import VueRssParser from "vue-rss-parser";



console.log('muie');

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://www.spiegel.de/kultur/index.rss';

fetch(proxyUrl + url)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
    const items = data.querySelectorAll("item");
    let html = ``;
    items.forEach(el => {
      html += `
        <article>
          <img src="${el.querySelector("link").innerHTML}/image/large.png" alt="">
          <h2>
            <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
              ${el.querySelector("title").innerHTML}
            </a>
          </h2>
        </article>
      `;
    });
    document.body.insertAdjacentHTML("beforeend", html);
  });


export default {
  name: 'RssFeeds',
  // components: {
  //   VueRssParser
  // },
  data () {
    console.log('miau');
    console.log(proxyUrl);
    console.log(proxyUrl + url);
    return {
      // feedUrl: proxyUrl + url,
      // name: "",
      // limit: 5,
      coite: 'muie',
      msg: 'Stories that might catch your interest'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
