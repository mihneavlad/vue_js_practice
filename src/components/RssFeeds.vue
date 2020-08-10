<template>
<div class="hello">
  <h1>{{ msg }}</h1>
  <h2>{{ coite }}</h2>
    <div class="container" id="foo">
        <div class="row">
        </div>
    </div>
  <!-- <VueRssParser :feedUrl="feedUrl" :name="name" :limit="limit"/> -->
</div>
</template>

<script>
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
      let imageLink = `${el.querySelector("enclosure")['attributes'].getNamedItem('url').value}`;
      let title = `${el.querySelector("title").innerHTML}`;

      html +=
        `
        <article>
          <img src="${imageLink}">
          <h3>
            <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
              ${title}
            </a>
          </h3>
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
  data() {
    return {
      coite: 'muie',
      msg: 'Stories that might catch your interest'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  h1, h2
    font-weight: normal

  ul
    list-style-type: none
    padding: 0

  li
    display: inline-block
    margin: 0 10px

  a
    color: #42b983

</style>
