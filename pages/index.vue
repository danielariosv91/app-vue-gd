<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="12">

      <v-select label="Comunas" @change="onChange($event)" :items="Comunas"></v-select>
      <v-select label="Codigos" @change="onChange($event)" :items="Codigos"></v-select>

      <v-card>
        <v-card-title color="">
          {{ title }}
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" single-line hide-details></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="Records" :search="search" @click:row="handleClick"
          :footer-props="footerProps" item-value="name" class="elevation-1">
          <template v-slot:column.name="{ column }">
            {{ column.title.toUpperCase() }}
          </template>
        </v-data-table>
      </v-card>


      <div class="text-center">
        <v-dialog v-model="dialog" width="auto">
          <v-card>
            <v-card-text>
              <div class="dialog __content">
                <h3> Horario Estación {{ station }}</h3>
                <p>{{ schedule }}</p>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="dialog = false">Cerrar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-col>
  </v-row>
</template>

<style>
.dialog.__content {
  text-align: center;
  line-height: 1.5;
  padding: 10%;
}
</style>

<script>
export default {
  data() {
    return {
      title: 'METRO',
      search: '',
      dialog: false,
      schedule: '',
      station: '',
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
        },
      ],
      footerProps: { 'items-per-page-options': [10, 20, 50] },
    }
  },
  async fetch({ store }) {
    await store.dispatch('getRecords', '')
  },
  computed: {
    Records() {
      return this.$store.state.records
    },
    Comunas() {
      return this.$store.state.comunas
    },
    Codigos() {
      return this.$store.state.codigos
    }
  },
  methods: {
    handleClick(row) {
      this.dialog = true;
      this.station = row['NOMBRE FANTASIA'];
      this.schedule = row['HORARIO REFERENCIAL'];
    },
    onChange(value) {
      this.$store.dispatch('getRecordsFiltered', value);
    }
  }
}
</script>