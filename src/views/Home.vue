<template>
  <v-app>
        <v-app-bar app color="primary" dark elevation="0">
            <v-app-bar-nav-icon @click.stop="sidebarMenu = !sidebarMenu"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-btn @click="toggleTheme" color="primary" class="mr-2">{{buttonText}}</v-btn>
            <v-icon>account_circle</v-icon>
        </v-app-bar>
        <v-navigation-drawer 
            v-model="sidebarMenu" 
            app
            floating
            :permanent="sidebarMenu"
            :mini-variant.sync="mini"
            >
            <v-list dense color="primary" dark>
                <v-list-item>
                    <v-list-item-action>
                        <v-icon @click.stop="sidebarMenu = !sidebarMenu">chevron_left</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            <h3 class="font-weight-thin">Classmate</h3>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-list-item class="px-2" @click="toggleMini = !toggleMini">
                <v-list-item-avatar>
                    <v-icon>account_box</v-icon>
                </v-list-item-avatar>
                <v-list-item-content class="text-truncate">
                    Hugo D. 
                </v-list-item-content>
                <v-btn icon small>
                    <v-icon>chevron_left</v-icon>
                </v-btn>
            </v-list-item>
            <v-divider></v-divider>
            <v-list>
                <v-list-item v-for="item in items" :key="item.title" link :to="item.href">
                    <v-list-item-icon>
                        <v-icon color="primary">{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="primary--text">{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-content>
            <v-container class="px-4 py-0 fill-height" fluid>
                <v-row class="fill-height">
                    <v-col>
                        <transition name="fade">
                            <router-view></router-view>
                        </transition>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
        <v-footer class="py-3">
            <span class="ml-auto overline">ITDMX &copy;2020</span>
        </v-footer>



    </v-app>
    
</template>

<script>
// @ is an alias to /src

import 'material-design-icons-iconfont/dist/material-design-icons.css'

export default {

  computed: {
    mini() {
        return (this.$vuetify.breakpoint.smAndDown) || this.toggleMini
    },
    buttonText() {
        return !this.$vuetify.theme.dark ? 'Dark' : 'Light'
    }
  },
  data: () => ({
      sidebarMenu: true,
      toggleMini: false,
      items: [
        { title:"Buzon", href:"/", icon:"mail" },
        { title:"Calendario", href:"/calendario", icon:"calendar_today" },
        { title:"Estadisticas", href:"/estadisticas", icon:"insert_chart_outlined" },
        { title:"Plantillas de examenes", href:"/examenes", icon:"notes" },
        { title:"Historial", href:"/historial", icon:"access_time" },
        { title:"Administrar alumnos", href:"/administrar", icon:"group_add"},
        { title:"Ayuda", href:"/help", icon:"help" },
      ],
  }),
  methods: {
    toggleTheme() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;      
    },
  }
  
}
</script>
