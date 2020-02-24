<template>
  <div class="zep-pagination">
    <button
      id="zep-button-firspage"
      class="zep-button zep-button-icon"
      @click="onClickFirstPage"
      :disabled="isInFirstPage"
    >
      <svg
        class="zep-button__icon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <title>First page</title>
        <path
          d="M23.213 22.107l-6.107-6.107 6.107-6.12-1.88-1.88-8 8 8 8 1.88-1.893zM10.667 8h-2.667v16h2.667v-16z"
        />
      </svg>
    </button>
    <button
      id="zep-button-previouspage"
      class="zep-button zep-button-icon"
      @click="onClickPreviousPage"
      :disabled="isInFirstPage"
    >
      <svg
        class="zep-button__icon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <title>Previous</title>
        <path d="M20.547 22.107l-6.107-6.107 6.107-6.12-1.88-1.88-8 8 8 8z" />
      </svg>
    </button>
    <button
      :class="{'zep-button':'zep-button', 'zep-button-pagination':'zep-button-pagination', active: isPageActive(page.name)}"
      v-for="(page , index) in pages"
      v-bind:key="index"
      @click="onClickPage(page.name)"
      :disabled="page.disabled"
    >{{page.name}}</button>

    <button
      id="zep-button-nextpage"
      class="zep-button zep-button-icon"
      @click="onClickNextPage"
      :disabled="isInLastPage"
    >
      <svg
        class="zep-button__icon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <title>Next</title>
        <path d="M11.453 22.107l6.107-6.107-6.107-6.12 1.88-1.88 8 8-8 8z" />
      </svg>
    </button>
    <button
      id="zep-button-lastpage"
      class="zep-button zep-button-icon"
      @click="onClickLastPage"
      :disabled="isInLastPage"
    >
      <svg
        class="zep-button__icon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <title>Last page</title>
        <path
          d="M8 22.107l6.107-6.107-6.107-6.12 1.88-1.88 8 8-8 8-1.88-1.893zM20.547 8h2.667v16h-2.667v-16z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "ZelVuePagination",
  props: {
    className: {
      type: String
    },
    visiblebuttons: {
      type: Number,
      required: false,
      default: 5
    },
    perpage: {
      type: Number,
      required: true
    },
    currentpage: {
      type: Number,
      required: true
    },
    items: {
      type: Array,
      required: false
    }
  },
  data: function() {
    return {
      totalpages: 0,
      dataSource: this.items,
      pageOfItems: {
        pagedItems: [],
        currentpage: this.currentpage
      }
    };
  },
  created() {
    if (!this.$listeners.onPagechanged) {
      throw 'Missing required event listener: "onPagechanged"';
    }
    // set page if items array isn't empty
    if (this.items && this.items.length) {
      this.pageOfItems.currentpage = 1;
      let newItems = this.setPage(1);
      this.pageOfItems.pagedItems = newItems;
      this.$emit("onPagechanged", this.pageOfItems);
    }
    this.setTotalPages;
  },
  computed: {
    startPage() {
      if (this.currentpage === 1) {
        return 1;
      }
      if (this.currentpage === this.totalpages) {
        return this.totalpages - this.visiblebuttons + 1;
      }
      return this.currentpage - 1;
    },
    endPage() {
      return Math.min(
        this.startPage + this.visiblebuttons - 1,
        this.totalpages
      );
    },
    pages() {
      const range = [];
      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push({
          name: i,
          isDisabled: i === this.currentpage
        });
      }
      return range;
    },
    isInFirstPage() {
      return this.currentpage === 1;
    },
    isInLastPage() {
      return this.currentpage === this.totalpages;
    },
    setTotalPages() {
      if (this.dataSource.length < this.perpage) {
        this.totalpages = 0;
      } else {
        let total = Math.floor(
          (this.dataSource.length + this.perpage - 1) / this.perpage
        );
        this.totalpages = total;
      }
    }
  },
  methods: {
    setPage(page) {
      let begin = (page - 1) * this.perpage;
      let end = begin + this.perpage;
      let newItems = this.dataSource.slice(begin, end);
      return newItems;
    },
    onClickFirstPage() {
      let newItems = this.setPage(1);
      this.pageOfItems.currentpage = 1;
      this.pageOfItems.pagedItems = newItems;
      this.$emit("onPagechanged", this.pageOfItems);
    },
    onClickPreviousPage() {
      let cPage = this.currentpage - 1;
      let newItems = this.setPage(cPage);
      this.pageOfItems.currentpage = cPage;
      this.pageOfItems.pagedItems = newItems;
      this.$emit("onPagechanged", this.pageOfItems);
    },
    onClickPage(page) {
      let cPage = page;
      let newItems = this.setPage(cPage);
      this.pageOfItems.currentpage = page;
      this.pageOfItems.pagedItems = newItems;
      this.$emit("onPagechanged", this.pageOfItems);
    },
    onClickNextPage() {
      let cPage = this.currentpage + 1;
      let newItems = this.setPage(cPage);
      this.pageOfItems.currentpage = cPage;
      this.pageOfItems.pagedItems = newItems;
      this.$emit("onPagechanged", this.pageOfItems);
    },
    onClickLastPage() {
      let newItems = this.setPage(this.totalpages);
      this.pageOfItems.currentpage = this.totalpages;
      this.pageOfItems.pagedItems = newItems;
      this.$emit("onPagechanged", this.pageOfItems);
    },
    isPageActive(page) {
      return this.currentpage === page;
    }
  }
};
</script>

<style scoped>
</style>
