<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const props = defineProps<{
  items: ContentNavigationItem[]
  isActive: (path: string) => boolean
  nested?: boolean
}>()

function hasChildren(item: ContentNavigationItem) {
  return !!(item.children && item.children.length > 0)
}
</script>

<template>
  <div>
    <template
      v-for="item in items"
      :key="item.path"
    >
      <!-- Folder with children -->
      <AppSidebarFolder
        v-if="hasChildren(item)"
        :item="item"
        :is-active="isActive"
      />

      <!-- Leaf page -->
      <NuxtLink
        v-else
        :to="item.path"
        class="folder-item"
        :class="{ active: isActive(item.path) }"
      >
        <span class="truncate">{{ item.title }}</span>
      </NuxtLink>
    </template>
  </div>
</template>
