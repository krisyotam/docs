<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const props = defineProps<{
  item: ContentNavigationItem
  isActive: (path: string) => boolean
}>()

// Start expanded so every markdown page is listed; users can collapse sections
const expanded = ref(true)

const children = computed(() => props.item.children || [])
</script>

<template>
  <div>
    <button
      type="button"
      class="folder-item"
      :class="{ active: isActive(item.path) && !children.length }"
      @click="expanded = !expanded"
    >
      <UIcon
        name="i-lucide-chevron-right"
        class="folder-chevron size-3.5"
        :class="{ expanded }"
      />
      <span class="truncate font-medium">{{ item.title }}</span>
    </button>

    <div
      v-if="expanded"
      class="folder-children"
    >
      <AppSidebarTree
        :items="children"
        :is-active="isActive"
        nested
      />
    </div>
  </div>
</template>
