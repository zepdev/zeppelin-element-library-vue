<template>
  <div class="tag_container">
    <zInput placeholder="Input tags" label="Input Tags" v-model="tags" />
    <div class="tag__list">
      <zTagList :value="value" tagListClass="tag_item" @click="onRemoveItem" />
    </div>
  </div>
</template>

<script>
import ZelVueInput from "../zelinput.vue";
import ZelVueTagList from "./zeltagList.vue";
export default {
  name: "ZelVueTagInput",
  components: {
    zInput: ZelVueInput,
    zTagList: ZelVueTagList
  },
  props: ["value"],
  computed: {
    tags: {
      get() {
        if (this.value) {
          const tagItems = this.value.join(" ").trim();
          return tagItems;
        }
      },
      set(value) {
        if (value) {
          this.$emit("input", value.trim().split(" "));
        } else {
          this.$emit("input");
        }
      }
    }
  },
  methods: {
    onRemoveItem(newTags) {
      this.tags = newTags.join(" ");
    }
  }
};
</script>

<style>
.tag__list {
  margin-top: 10px;
}
</style>