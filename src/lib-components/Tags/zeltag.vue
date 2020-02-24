<template>
  <div class="tag_container">
    <span class="zep-tag">
      {{tagname}}
      <button class="zep-tag__button">
        <svg
          class="zep-tag__icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <title>{{tagtitle}}</title>
          <path
            fill="currentColor"
            d="M25.333 8.547l-1.88-1.88-7.453 7.453-7.453-7.453-1.88 1.88 7.453 7.453-7.453 7.453 1.88 1.88 7.453-7.453 7.453 7.453 1.88-1.88-7.453-7.453z"
          />
        </svg>
      </button>
    </span>
  </div>
</template>

<script>
export default {
  name: "ZelVueTag",
  props: {
    tagname: {
      type: String,
      required: true
    },
    tagtitle: {
      type: String,
      default: "zepicons-close"
    }
  }
};
</script>