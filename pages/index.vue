<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="12">
      <v-card>
        <v-card-title color="">
          {{ title }}
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" single-line hide-details></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="Records" :search="search" item-value="name" class="elevation-1">
          <template v-slot:column.name="{ column }">
            {{ column.title.toUpperCase() }}
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      title: 'METRO',
      search: '',
      headers: [
        {
          text: 'Nombre Fantasia',
          align: 'start',
          sortable: true,
          value: 'NOMBRE FANTASIA',
        },
        {
          text: 'Direccion',
          align: 'start',
          sortable: true,
          value: 'DIRECCION',
        },
        {
          text: 'Comuna',
          align: 'start',
          sortable: true,
          value: 'COMUNA',
        },
        {
          text: 'Codigo',
          align: 'start',
          sortable: true,
          value: 'CODIGO',
        }
      ],
    }
  },
  async fetch({ store }) {
    await store.dispatch('getRecords')
  },
  computed: {
    Records() {
      return this.$store.state.records
    }
  }
}
</script>