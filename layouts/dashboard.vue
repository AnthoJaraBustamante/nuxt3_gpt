<template>
  <main class="flex flex-row mt-7">
    <nav
      class="hidden sm:flex flex-col ml-5 w-[370px] min-h-[calc(100vh-3.0rem)] bg-white bg-opacity-10 p-5 rounded-3xl">
      <h1 class="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 bg-clip-text text-transparent">
        AngularGPT<span class="text-indigo-500">.</span>
      </h1>
      <span class="text-xl">Bienvenido</span>

      <div class="border-gray-700 border my-3"></div>

      <!-- Nav Links -->
      <SideBarMenuItem v-for="route in getRoutes" :key="route.path" :description="route.description" :icon="route.icon"
        :path="route.path" :title="route.title" />
      <!-- End Nav Links -->
    </nav>

    <section class="mx-3 sm:mx-20 flex flex-col w-full h-[calc(100vh-50px)] bg-white bg-opacity-10 p-5 rounded-3xl">
      <div class="flex h-full flex-row">
        <div class="flex flex-col flex-auto p-1">
          <slot />
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import type { MenuItem } from '../interfaces/sideBarMenuItemInterface';

export default {
  computed: {
    getRoutes(): MenuItem[] {
      const router = useRouter();
      const routes = router.options.routes
        .filter((route: any) =>  Object.keys(route.meta).length > 0)
        .map((route: any) => ({
          icon: route.meta.icon,
          title: route.meta.title,
          description: route.meta.description,
          path: route.path,
        }));
      console.log('routes', routes);
      return routes;
    }
  }
}

</script>

<style></style>