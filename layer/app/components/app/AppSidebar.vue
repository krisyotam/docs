<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const props = defineProps<{
  navigation?: ContentNavigationItem[] | null
}>()

const route = useRoute()
const appConfig = useAppConfig()
const colorMode = useColorMode()
const { open: searchOpen } = useContentSearch()
const { forced: forcedColorMode } = useDocusColorMode()

const brand = computed(() => appConfig.header?.title || 'Docs')
const githubUrl = computed(() => {
  const gh = appConfig.github
  if (!gh || gh === false) return undefined
  return gh.url || undefined
})

const tree = computed(() => props.navigation ?? [])

function openSearch() {
  searchOpen.value = true
}

function toggleTheme() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

function isActive(path: string) {
  return route.path === path || route.path.startsWith(path + '/')
}
</script>

<template>
  <aside class="docus-sidebar">
    <div class="docus-sidebar-header">
      <div class="profile-bento">
        <div class="profile-bento-row">
          <NuxtLink
            to="/"
            class="profile-bento-cell profile-info-cell"
          >
            <h1 class="profile-name">
              {{ brand }}
            </h1>
          </NuxtLink>
          <div class="profile-bento-actions">
            <button
              v-if="!forcedColorMode"
              type="button"
              class="profile-bento-cell theme-toggle-cell"
              aria-label="Toggle theme"
              @click="toggleTheme"
            >
              <UIcon
                :name="colorMode.value === 'dark' ? 'i-lucide-sun' : 'i-lucide-moon'"
                class="size-5"
              />
            </button>
            <a
              v-if="githubUrl"
              :href="githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="profile-bento-cell github-cell"
              aria-label="GitHub repository"
            >
              <UIcon
                name="i-simple-icons-github"
                class="size-5"
              />
            </a>
          </div>
        </div>
        <div class="profile-bento-row search-row">
          <button
            type="button"
            class="search-input"
            @click="openSearch"
          >
            <UIcon
              name="i-lucide-search"
              class="size-4 shrink-0 opacity-50"
            />
            <span>Search docs...</span>
            <kbd class="search-kbd">⌘K</kbd>
          </button>
        </div>
      </div>
    </div>

    <nav class="docus-sidebar-content">
      <div class="folder-tree">
        <AppSidebarTree
          :items="tree"
          :is-active="isActive"
        />
      </div>
    </nav>
  </aside>
</template>

<style>
:root {
  --docus-sidebar-width: 280px;
}

.docus-sidebar {
  width: var(--docus-sidebar-width);
  background: var(--ui-bg-elevated, var(--ui-bg));
  border-right: 1px solid var(--ui-border);
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  flex-shrink: 0;
  position: sticky;
  top: 0;
  z-index: 40;
}

.docus-sidebar-header {
  padding: 0;
  flex-shrink: 0;
}

.profile-bento {
  border-bottom: 1px solid var(--ui-border);
  background: var(--ui-bg);
}

.profile-bento-row {
  display: flex;
  align-items: stretch;
}

.profile-bento-row + .profile-bento-row {
  border-top: 1px solid var(--ui-border);
}

.profile-bento-cell {
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-info-cell {
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0.75rem 1rem;
  min-width: 0;
  text-decoration: none;
  color: inherit;
}

.profile-info-cell:hover .profile-name {
  opacity: 0.8;
}

.profile-name {
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0;
  color: var(--ui-text);
  line-height: 1.3;
}

.profile-bento-actions {
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--ui-border);
}

.theme-toggle-cell,
.github-cell {
  width: 48px;
  min-height: 48px;
  border: none;
  background: transparent;
  color: var(--ui-text-muted);
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  padding: 0;
  text-decoration: none;
}

.github-cell {
  border-top: 1px solid var(--ui-border);
}

.theme-toggle-cell:hover,
.github-cell:hover {
  background: var(--ui-bg-elevated);
  color: var(--ui-text);
}

/* Single action cell: fill the bento header height */
.profile-bento-actions:has(> :only-child) > * {
  flex: 1;
  min-height: 100%;
  border-top: none;
}

.search-row {
  display: flex;
}

.search-row .search-input {
  flex: 1;
  margin: 0;
  border: none;
  border-radius: 0;
  padding: 0.625rem 1rem;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--ui-text-muted);
  font-size: 0.875rem;
  cursor: pointer;
  text-align: left;
  width: 100%;
  transition: color 0.15s, background 0.15s;
}

.search-row .search-input:hover {
  color: var(--ui-text);
  background: var(--ui-bg-elevated);
}

.search-kbd {
  margin-left: auto;
  font-size: 0.7rem;
  font-family: inherit;
  padding: 0.1rem 0.35rem;
  border: 1px solid var(--ui-border);
  border-radius: 0.25rem;
  color: var(--ui-text-dimmed);
  line-height: 1.2;
}

.docus-sidebar-content {
  flex: 1;
  overflow-y: auto;
  padding: 0.75rem 0.75rem 1.25rem;
}

.folder-tree {
  font-size: 0.875rem;
}

.folder-item {
  cursor: pointer;
  padding: 0.375rem 0.5rem;
  border-radius: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--ui-text-muted);
  transition: color 0.15s;
  position: relative;
  text-decoration: none;
  background: none;
  border: none;
  width: 100%;
  font: inherit;
  text-align: left;
}

.folder-item:hover {
  color: var(--ui-text);
}

.folder-item.active {
  color: var(--ui-text);
  font-weight: 500;
}

.folder-item .folder-chevron {
  flex-shrink: 0;
  transition: transform 0.15s;
  opacity: 0.7;
}

.folder-item .folder-chevron.expanded {
  transform: rotate(90deg);
}

.folder-children {
  margin-left: 0.75rem;
  border-left: 1px solid var(--ui-border);
  padding-left: 0.35rem;
}

.folder-children .folder-item::before {
  content: "";
  position: absolute;
  left: -0.5rem;
  top: 0;
  bottom: 0;
  width: 1px;
  background: transparent;
  transition: background 0.15s;
}

.folder-children .folder-item:hover::before,
.folder-children .folder-item.active::before {
  background: var(--ui-text);
}

</style>
