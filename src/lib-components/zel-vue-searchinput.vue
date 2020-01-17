<template>
  <div class="zep-search" style="width: 100%;">
    <input type="text" class="zep-search__input" :placeholder="plachholder" :id="id" />
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
    <label class="zep-visually-hidden" for="searchbar">
      <slot>{{lable}}</slot>
    </label>
  </div>
</template>

<script>
export default {
  name: "SearchhInput",
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
    }
  }
};
</script>