<template>
  <div class="hello">
    <nav aria-label="Main Navigation">
      <ul class="level-0">
        <menu-item v-for="item in list" :key="item.id" :item="item" :type="item.type" :level=1></menu-item>
      </ul>
    </nav>
  </div>
</template>

<script>
import data from "../assets/menu-data";
import menuItem from "@/components/menu-item.vue";

export default {
  name: "Meganav",
  components: {
    menuItem
  },
  props: {
    msg: String,
    data: { type: Object, default: () => data }
  },
  computed: {
    list() {
      return data.tree;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
   box-sizing: border-box;
}

a {
  text-decoration: none;
  font-size: .8rem;
}

ul {
  background: #f2f2f2;
  list-style: none;
  margin: 0;
  padding-left: 0;
  width: 17rem;
}

li {
  background: #f2f2f2;
  display: block;
  border-bottom: 1px solid #CCC;
  text-decoration: none;
  transition-duration: 0.5s;
  width: 17rem;
}

li a {
  color: #222;
  display: block;
  padding: 1rem;
}

li:hover,
li:focus-within {
  background: #D0D;
}

li:focus-within a {
  outline: none;
}

ul li ul li {
  clear: both;
  width: 100%;
  border: none;
}

ul li ul {
  visibility: hidden;
  opacity: 0;
  min-width: 5rem;
  transition: all 0.5s ease;
  display: none;
}

ul li:active > ul,
ul li:hover > ul,
ul li:focus > ul,
ul li:focus-within > ul,
ul li ul:focus {
  visibility: visible;
  opacity: 1;
  display: block;
}



@media only screen and (min-width: 1024px){
  ul li ul {
    position: absolute;
    left: 17rem;
    top: 0;
  }

  ul li:hover > ul,
  ul li:focus-within > ul,
  ul li ul:hover,
  ul li ul:focus {
    visibility: visible;
    opacity: 1;
    display: block;
  }

  ul {
    height: 100vh;
    box-shadow: 1px 0 10px #333;
  }

}
</style>
