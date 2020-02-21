<template>
  <div class="zep-pagination">
    <button class="zep-button zep-button-icon" disabled>
      <svg
        class="zep-button__icon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <title>zepicons-previous-page</title>
        <path
          d="M23.213 22.107l-6.107-6.107 6.107-6.12-1.88-1.88-8 8 8 8 1.88-1.893zM10.667 8h-2.667v16h2.667v-16z"
        />
      </svg>
    </button>
    <button class="zep-button zep-button-icon" disabled>
      <svg
        class="zep-button__icon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <title>zepicons-chevron-left</title>
        <path d="M20.547 22.107l-6.107-6.107 6.107-6.12-1.88-1.88-8 8 8 8z" />
      </svg>
    </button>
    <button class="zep-button zep-button-pagination">1</button>
    <button class="zep-button zep-button-pagination">2</button>
    <button class="zep-button zep-button-pagination">3</button>
    <button class="zep-button zep-button-pagination">4</button>
    <button class="zep-button zep-button-pagination">5</button>
    <button class="zep-button zep-button-icon">
      <svg
        class="zep-button__icon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <title>zepicons-chevron-right</title>
        <path d="M11.453 22.107l6.107-6.107-6.107-6.12 1.88-1.88 8 8-8 8z" />
      </svg>
    </button>
    <button class="zep-button zep-button-icon">
      <svg
        class="zep-button__icon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <title>zepicons-next-page</title>
        <path
          d="M8 22.107l6.107-6.107-6.107-6.12 1.88-1.88 8 8-8 8-1.88-1.893zM20.547 8h2.667v16h-2.667v-16z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
    name:"ZelVuePagination"
};
</script>

<style>
</style>