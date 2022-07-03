<script setup lang="ts">
//import
import { reactive, computed } from 'vue'
//props
const props = defineProps({
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    },

    totalPages: {
      type: Number,
      required: true
    },

    total: {
      type: Number,
      required: true
    },

    perPage: {
      type: Number,
      required: true
    },

    currentPage: {
      type: Number,
      required: true
    },

    hasMorePages: {
      type: Boolean,
      required: true
    }
})
//methods
function isPageActive(page:number): boolean {
      return props.currentPage === page;
    }

const emit = defineEmits(['pagechanged']);

const onClickFirstPage = () => {
  emit("pagechanged", 1)
};

const onClickPreviousPage = () => {
  emit("pagechanged", props.currentPage - 1)
};

const onClickPage = (page:any) => {
  emit("pagechanged", page)
};

const onClickNextPage = () => {
  emit("pagechanged", props.currentPage + 1)
};

const onClickLastPage = () => {
  emit("pagechanged", props.totalPages)
};

//compute
const startPage = computed(() => {
    
    if (props.currentPage === 1) {
        return 1;
      }
    if (props.currentPage === props.totalPages) {
        return (props.totalPages - props.maxVisibleButtons + 1);
      }
    return (props.currentPage - 1);

})

const endPage = computed(() => {  
    return Math.min(startPage.value + props.maxVisibleButtons - 1, props.totalPages);
})

const pages = computed(() => {
    
    let range = [];
    for (let i = startPage.value; i <= endPage.value; i=i+1) {
        range.push({
          name: i,
          isDisabled: i === props.currentPage,
        });
    }
    return range;	
})


const isInFirstPage= computed(() => {
      return props.currentPage === 1;
    })

const isInLastPage = computed(() => {
      return props.currentPage === props.totalPages;
    })

const hasMorePages = computed(() => {
      return props.currentPage != props.totalPages;
    })

</script>

<template>
  <div class="flex justify-end">
		<ul class="pagination bg-gray-100 p-2 rounded">
			<!--Arrow Mark-->
			<li class="pagination-item">
				<span
					class="rounded-l rounded-sm  px-1 py-2 cursor-not-allowed no-underline text-gray-400 h-12"
					v-if="isInFirstPage">
				&lt;</span>
				<a
					v-else
					@click.prevent="onClickFirstPage"
					class="rounded-l rounded-sm   px-1 py-2 text-gray-400 hover:bg-gray-100 no-underline"
					href="#"
					role="button"
					rel="prev">
				&lt;
				</a>
			</li>
			<!--Previous Button-->
			<li class="pagination-item">
				<button
					type="button"
					@click="onClickPreviousPage"
					:disabled="isInFirstPage"
					aria-label="Go to previous page"
					class="rounded-sm underline px-3 py-2 hover:bg-gray-300 text-gray-900  mx-2 text-sm"
					:class="{'cursor-not-allowed': isInFirstPage}"
				>前へ</button>
			</li>
			<!--Number of pages-->
			<li
				v-for="page in pages"
				class="pagination-item"
				:key="page.name">
				<span
					class="rounded-sm px-3 py-2 no-underline cursor-not-allowed mx-2"
					v-if="isPageActive(page.name)"
				>{{ page.name }}</span>
				<a
					class="rounded-sm border border-gray-100 px-3 py-2 hover:bg-gray-100 text-gray-600 underline mx-2"
					href="#"
					v-else
					@click.prevent="onClickPage(page.name)"
					role="button"
				>{{ page.name }}</a>
				 <!-- <button
					type="button"
					@click="onClickPage(page.name)"
					:disabled="page.isDisabled"
					:class="{ active: isPageActive(page.name) }" 
				>{{ page.name }}</button>  -->
			</li>

			<li class="pagination-item">
				<button
					type="button"
					@click="onClickNextPage"
					:disabled="isInLastPage"
					aria-label="Go to next page"
					class="rounded-sm px-3 py-2 hover:bg-gray-300 text-gray-900 underline mx-2 text-sm"
					:class="{'cursor-not-allowed': isInLastPage}"
				>次へ</button>
			</li>

			<li class="pagination-item">
				<!-- <button
					type="button"
					@click="onClickLastPage"
					:disabled="isInLastPage"
					aria-label="Go to last page"
				>Last</button> -->
				<a
					class="rounded-r rounded-sm  px-1 py-2 hover:bg-gray-100 text-gray-400 no-underline"
					href="#"
					@click.prevent="onClickLastPage"
					rel="next"
					role="button"
					v-if="hasMorePages"
				>&gt;</a>
				<span
					class="rounded-r rounded-sm px-1 py-2 hover:bg-gray-100 text-gray-600 no-underline cursor-not-allowed"
					v-else
				>&gt;</span>
			</li>
		</ul>
	</div>
</template>

<style>
.pagination {
  list-style-type: none;
}
.pagination-item {
  display: inline-block;
}

</style>
