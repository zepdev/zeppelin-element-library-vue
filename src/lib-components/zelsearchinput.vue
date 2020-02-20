<template>
  <div class="zep-search zep-search-container" style="width: 100%;">
    <input
      type="text"
      class="zep-search__input"
      v-bind:palceholder="plachholder"
      v-bind:dataSource="dataSource"
      v-bind:id="id"
      v-bind:value="value"
      v-on:keypress.enter="setSelectedValueOnEnter"
      v-on:input="findItem"
      v-on:keyup="nextItem"
    />
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      class="zep-search__icon"
    >
      <title><slot>{{titlelabel}}</slot></title>
      <path
        fill="currentColor"
        d="M12.667 4c4.786 0 8.667 3.88 8.667 8.667 0 2.147-0.787 4.12-2.080 5.64l0.36 0.36h1.053l6.667 6.667-2 2-6.667-6.667v-1.053l-0.36-0.36c-1.52 1.293-3.493 2.080-5.64 2.080-4.786 0-8.667-3.88-8.667-8.667s3.88-8.667 8.667-8.667v0zM12.667 6.667c-3.333 0-6 2.667-6 6s2.667 6 6 6c3.333 0 6-2.667 6-6s-2.667-6-6-6z"
      />
    </svg>
    <ul v-show="isFound" class="search_items">
      <li
        v-for="(item , index) in dataItems"
        v-bind:key="index"
        v-on:click="setSelectedValue(item)"
        v-bind:class="classObject(index)"
        :ref="classObject(index)"
      >
        <span>{{item}}</span>
      </li>
    </ul>
    <label class="zep-visually-hidden" for="searchbar">
      <slot>{{lable}}</slot>
    </label>
  </div>
</template>

<script>
export default {
  name: "ZelVueSearchInput",
  props: {
    id: {
      type: String,
      required: false,
      default: "searchbar"
    },
    className: {
      type: String,
      required: false
    },
    lable: {
      type: String,
      default: "Search",
      required: false
    },
    titlelabel: {
      type: String,
      required: false,
      default: "zepicons-search"
    },
    plachholder: {
      type: String,
      default: "Search",
      required: false
    },
    dataSource: {
      type: Array,
      required: true
    },
    value: String
  },
  data: function() {
    return {
      currentItem: 0,
      dataItems: [],
      isFound: false
    };
  },
  methods: {
    findItem(event) {
      let searchValue = event.target.value;
      if (searchValue.length <= 0) {
        this.isFound = false;
        this.$emit("input");
        return [];
      }
      this.isFound = true;
      this.dataItems = this.dataSource.filter(item => {
        return item.toLowerCase().startsWith(searchValue.toLowerCase());
      });
      this.$emit("input", event.target.value);
    },
    setSelectedValue(value) {
      this.isFound = false;
      this.$emit("onlist-click", value);
    },
    setSelectedValueOnEnter() {
      this.isFound = false;
      Object.keys(this.$refs).forEach(el => {
        let value = this.$refs[el][0].innerText;
        this.$emit("onenter_keypress", value);
      });
    },
    nextItem(event) {
      if (event.keyCode == 38 && this.currentItem > 0) {
        this.currentItem--;
      } else if (
        event.keyCode == 40 &&
        this.currentItem < this.dataItems.length
      ) {
        this.currentItem++;
      } else if (this.currentItem === this.dataItems.length) {
        this.currentItem = 0;
      }
    },
    classObject: function(index) {
      return {
        active_item: this.currentItem === index
      };
    }
  }
};
</script>
<style scoped>
.active_item {
  background-color: #ddd;
  position: relative;
}
.search_items {
  border: 1px solid rgba(0, 0, 0, 0.72);
}
.search_items li {
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
}
.zep-search-container ul {
  background: rgba(255, 255, 255, 1);
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 9999;
}
</style>