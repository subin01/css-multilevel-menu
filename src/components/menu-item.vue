<template>
  <li>
    <a :href="item.link" v-if="!hasChildren">
      <span v-if="item.icon" class="icon"></span>
       {{item.name}} <i>[{{level}}-{{type}}]</i>
    </a>
    <a v-else href="#" class="has-menu">
      {{item.name}} <i>[{{level}}-{{type}}]</i>
    </a>

    <ul v-if="hasChildren" :class="`menu level-${level}`">
      <li class="heading">
        <span v-if="item.icon" class="icon"></span>{{item.name}}
      </li>
      <li>
        <a :href="item.link">VOIR TOUT</a>
      </li>
      <menu-item
        v-for="subItems in item.children"
        :key="subItems.id"
        :item="subItems"
        :type="type"
        :level="nextLevel"
      />
    </ul>
  </li>
</template>

<script>
export default {
  name: "menu-item",
  props: {
    item: Object,
    type: String,
    level: Number,
  },
  computed: {
    hasChildren() {
      return this.item.children && this.item.children.length > 0;
    },
    nextLevel() {
      return parseInt(this.level) + 1
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.icon {
  border-radius: 50%;
  background: #333;
  height: 1rem;
  width: 1rem;
  margin-right: 1rem;
  display: inline-block;
}

.heading {
  font-weight: bold;
  font-size: 1.2em;
  padding: 1rem;
  display: none;
}

.has-menu {
 /* background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAJUlEQVR42mNgAILy8vL/DLgASBKnApgkVgXIkhgKiNKJ005s4gDLbCZBiSxfygAAAABJRU5ErkJggg==") no-repeat scroll 0 0 transparent; */
 /* background-position: 95% 50%; */
}

i {
  display: none
}

.level-1 a{
  padding-left: 2rem;
}

.level-2 a{
  padding-left: 3rem;
  border-left: 1px solid #333;
}

@media only screen and (min-width: 1024px){
  .heading {
    display: block;
  }
}
</style>
