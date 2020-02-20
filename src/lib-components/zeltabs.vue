<template>
  <div class="zep-tabs" role="tablist" aria-label="Tabs Default">
    <div class="zep-tabs__item" v-for="(tab, index) in tabs" v-bind:key="index">
      <button
        :class="{'is-active': tab.isActive,
          'zep-tab':'zep-tab',
           'zep-tab--small':selectTab
           }"
        role="tab"
        aria-selected="true"
        aria-controls="panel-1"
        v-bind:id="'tab-'+tab.id"
        v-bind:tabindex="index"
        v-on:click="selectTab(tab)"
      >{{tab.name}}</button>
    </div>
    <div class="tabs-details" :class="className">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ZelVueTabs",
  props: {
    tabsItems: {
      type: Array,
      default: function() {
        return [
          {
            id: "t1",
            name: "Tab 1"
          },
          {
            id: "t2",
            name: "Tab 2"
          }
        ];
      }
    },
    tabindex: {
      type: Number
    },
    id: {
      type: String
    },
    tabsizeSmall: {
      type: Boolean
    },
    className: String
  },
  data() {
    return {
      tabs: this.tabsItems
    };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab: function(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name == selectedTab.name;
      });
    }
  },
  computed: {
    setTabSize() {
      return this.tabsizeSmall ? true : false;
    }
  }
};
</script>

<style scoped>
.is-active {
  border-bottom: 3px solid #27166f;
}
.zep-tabs {
  display: block;
  margin: 10px;
  width: auto;
}
.tabs-details {
  margin-top: 20px;
}
</style>