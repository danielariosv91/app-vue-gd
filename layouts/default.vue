<template>
  <v-app>
    <v-app-bar :style="{ background: $vuetify.theme.themes['light'].primary }" fixed app>
      <v-toolbar-title :style="{color: $vuetify.theme.themes['light'].info}">{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-main :style="{ background: $vuetify.theme.themes['light'].background }">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<style></style>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      title: 'Gobierno Digital'
    }
  },
}
</script>
