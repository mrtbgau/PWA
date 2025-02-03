<template>
  <div class="relative">
    <!-- Toggle button when sidebar is closed -->
    <button 
      v-if="isCollapsed"
      @click="toggleSidebar"
      class="fixed left-4 top-4 z-50 p-2 bg-[#0F0F13] rounded-lg hover:bg-white/10 transition-colors"
    >
      <ChevronsRight class="w-5 h-5 text-white" />
    </button>

    <!-- Sidebar -->
    <nav 
      class="h-screen bg-[#0F0F13] text-white transition-all duration-300 ease-in-out"
      :class="[isCollapsed ? 'w-16' : 'w-64']"
    >
      <!-- Header -->
      <div class="p-4 flex items-center justify-between">
        <h1 
          class="text-xl font-semibold transition-opacity duration-300"
          :class="{ 'opacity-0': isCollapsed }"
        >
          coding2go
        </h1>
        <button 
          @click="toggleSidebar"
          class="hover:bg-white/10 p-2 rounded-lg transition-colors"
        >
          <ChevronsLeft 
            :class="{ 'rotate-180': isCollapsed }"
            class="w-5 h-5 transition-transform duration-300"
          />
        </button>
      </div>

      <!-- Navigation Links -->
      <div class="px-3 py-4 space-y-2">
        <!-- Home -->
        <a 
          href="#" 
          class="flex items-center gap-3 text-purple-500 p-3 rounded-lg hover:bg-white/5 transition-colors"
        >
          <Home class="w-5 h-5" />
          <span :class="{ 'hidden': isCollapsed }">Home</span>
        </a>

        <!-- Dashboard -->
        <a 
          href="#" 
          class="flex items-center gap-3 text-gray-300 p-3 rounded-lg hover:bg-white/5 transition-colors"
        >
          <LayoutGrid class="w-5 h-5" />
          <span :class="{ 'hidden': isCollapsed }">Dashboard</span>
        </a>

        <!-- Create -->
        <button 
          @click="toggleCreate"
          class="w-full flex items-center justify-between gap-3 text-gray-300 p-3 rounded-lg hover:bg-white/5 transition-colors"
        >
          <div class="flex items-center gap-3">
            <Plus class="w-5 h-5" />
            <span :class="{ 'hidden': isCollapsed }">Create</span>
          </div>
          <ChevronDown 
            v-if="!isCollapsed"
            class="w-4 h-4 transition-transform"
            :class="{ 'rotate-180': isCreateOpen }"
          />
        </button>

        <!-- Todo-Lists -->
        <button 
          @click="toggleTodo"
          class="w-full flex items-center justify-between gap-3 text-gray-300 p-3 rounded-lg hover:bg-white/5 transition-colors"
        >
          <div class="flex items-center gap-3">
            <ListTodo class="w-5 h-5" />
            <span :class="{ 'hidden': isCollapsed }">Todo-Lists</span>
          </div>
          <ChevronDown 
            v-if="!isCollapsed"
            class="w-4 h-4 transition-transform"
            :class="{ 'rotate-180': isTodoOpen }"
          />
        </button>

        <!-- Calendar -->
        <a 
          href="#" 
          class="flex items-center gap-3 text-gray-300 p-3 rounded-lg hover:bg-white/5 transition-colors"
        >
          <Calendar class="w-5 h-5" />
          <span :class="{ 'hidden': isCollapsed }">Calendar</span>
        </a>

        <!-- Profile -->
        <a 
          href="#" 
          class="flex items-center gap-3 text-gray-300 p-3 rounded-lg hover:bg-white/5 transition-colors"
        >
          <User class="w-5 h-5" />
          <span :class="{ 'hidden': isCollapsed }">Profile</span>
        </a>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  ChevronsLeft,
  ChevronsRight,
  ChevronDown,
  Home,
  LayoutGrid,
  Plus,
  ListTodo,
  Calendar,
  User
} from 'lucide-vue-next'

const isCollapsed = ref(false)
const isCreateOpen = ref(false)
const isTodoOpen = ref(false)

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
}

const toggleCreate = () => {
  if (!isCollapsed.value) {
    isCreateOpen.value = !isCreateOpen.value
  }
}

const toggleTodo = () => {
  if (!isCollapsed.value) {
    isTodoOpen.value = !isTodoOpen.value
  }
}
</script>