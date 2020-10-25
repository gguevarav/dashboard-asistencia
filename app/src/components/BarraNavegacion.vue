<template>
  <div>
    <v-app-bar
      color="brown darken-3"
      dark
      app>
      <v-app-bar-nav-icon
        @click="ocultarBarra()">
        <v-icon>
          {{ iconoBarra }}
        </v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title>
        Dashboard
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      color="teal darken-4"
      v-model="barraNavegacion"
      app
      floating
      dark>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Dashboard
          </v-list-item-title>
          <v-list-item-subtitle>
            Asistencias
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav dense flat>
        <v-list-item-group>
          <v-list-item :to="{name: 'Home'}">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Inicio</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="{name: 'Dashboard'}">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="{name: 'About'}">
            <v-list-item-icon>
              <v-icon>mdi-help</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Acerca de</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>

export default {

  computed: {
    mini () {
      return (this.$vuetify.breakpoint.smAndDown) || this.toggleMini
    }
  },
  data: () => ({
    barraNavegacion: false,
    iconoBarra: 'mdi-plus'
  }),
  methods: {
    ocultarBarra () {
      if (this.barraNavegacion === true) {
        this.barraNavegacion = false
        this.iconoBarra = 'mdi-plus'
      } else if (this.barraNavegacion === false) {
        this.barraNavegacion = true
        this.iconoBarra = 'mdi-minus'
      }
    }
  }
}
</script>
