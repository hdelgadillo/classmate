<template>
  <v-sheet
    height="100%"
    class="overflow-hidden"
    style="position: relative;"
  >
         <v-btn
                    @click.stop="drawer = !drawer"
                    
                 
                    color="white"
                    fab
                    dark
                    small
                  
                    top
                    left
                  >
                    <v-icon color="black">navigate_next</v-icon>
                  </v-btn>

                  

     <v-card>
    <v-system-bar></v-system-bar>
    <v-toolbar flat>
      <v-toolbar-title >Español I</v-toolbar-title>
      <v-spacer></v-spacer>
     
    </v-toolbar>
    <v-banner
      single-line
      :sticky="sticky"
    >
Universidad Fray Servando
      
    </v-banner>
    
  </v-card>


 <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1"
  >
    <template v-slot:item.name="{ item }">
    <td>{{ item.name }} <v-icon >{{ item.icon1 }}</v-icon></td>
    
    </template>
    <template v-slot:item.alumno="{ item }" >
      <v-avatar color="indigo" size="36"> 
      <v-icon dark>{{item.icon2}}</v-icon>
    </v-avatar>
    
    </template>


    <template v-slot:item.contenido="{ item }" >
      <v-chip
      class="ma-2"
      :color="getColor(item.contenido)"
      label
      text-color="white"
    >
      
      {{item.contenido}}
    </v-chip>
    
    </template>


    <template v-slot:item.actividad="{ item }" >
      <v-chip
      class="ma-2"
      :color="getColor(item.actividad)"
      label
      text-color="white"
    >
      
      {{item.actividad}}
    </v-chip>
    
    </template>



     <template v-slot:item.tareas="{ item }" >
      <v-chip
      class="ma-2"
      :color="getColor(item.tareas)"
      label
      text-color="white"
    >
     
      {{item.tareas}}
    </v-chip>
    
    </template>

     <template v-slot:item.proyectos="{ item }" >
      <v-chip
      class="ma-2"
      :color="getColor(item.proyectos)"
      label
      text-color="white"
    >
      
      {{item.proyectos}}
    </v-chip>
    
    </template>

   
   <template v-slot:item.equipo="{ item }" >
      <v-avatar color="indigo" size="36"> 
      <v-icon dark>{{item.icon3}}</v-icon>
    </v-avatar>
    
    </template>


    <template  v-slot:item.progreso="{ item }">

        <v-progress-linear
         color="green"
     v-model="item.progreso"
      height="25"
    >
      <strong>{{ Math.ceil(item.progreso) }}%</strong>
    </v-progress-linear>



    </template>

     <template  v-slot:item.timeline="{ item }">

        <v-progress-linear
         color="green"
     v-model="item.porc"
      height="25"
    >
      <strong>{{ item.timeline }}</strong>
    </v-progress-linear>



    </template>




  </v-data-table>



    <v-container class="fill-height">
      <v-row
        align="center"
        justify="center"
      >
       
      </v-row>
    </v-container>

    
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      width="25%"
    >



    

    <v-list-item>
      <v-card-title>
      <div class="display-1 mb-2">Grupos Virtuales</div>
      
        <v-btn class="mx-2" outlined large fab color="indigo">
      <v-icon dark>add</v-icon>

    </v-btn>

   

    </v-card-title>
    
      </v-list-item>
      <v-col cols="1" sm="11">
    <v-text-field
          v-model="search"
          append-icon="search"
          label="Filtrar"
          single-line
          width-
        >
    </v-text-field>
    </v-col>





      <v-expansion-panels
      v-model="panel"
      :disabled="disabled"
      multiple
    >

    <v-expansion-panel>
        
    <v-expansion-panel-header>  Universidad Fray</v-expansion-panel-header>
     <v-expansion-panel-content>
    <v-list-item>
    <v-expansion-panels
      v-model="panel"
      :disabled="disabled"
      multiple
    >
     <v-expansion-panel>
        <v-expansion-panel-header>Español 01</v-expansion-panel-header>
        <v-expansion-panel-content>
          Some content
        </v-expansion-panel-content>
      </v-expansion-panel>

        <v-expansion-panel>
        <v-expansion-panel-header>Matemáticas</v-expansion-panel-header>
        <v-expansion-panel-content>
          Some content
        </v-expansion-panel-content>
      </v-expansion-panel>
     </v-expansion-panels>
      </v-list-item>
       </v-expansion-panel-content>
      </v-expansion-panel>
     </v-expansion-panels>

      

      <v-divider></v-divider>

     
    </v-navigation-drawer>
    
  </v-sheet>
  
</template>





<script>
  export default {
    data () {
      return {
        drawer: null,
        headers: [
          {
            text: 'Primer semestre',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Alumno', value: 'alumno'  },
          { text: 'Contenido', value: 'contenido' },
          { text: 'Actividad', value: 'actividad' },
          { text: 'Calificaciones', value: 'calificaciones' },
          { text: 'Tareas', value: 'tareas' },
          { text: 'Calificaciones', value: 'tareasC' },
          { text: 'Proyecos', value: 'proyectos' },
          { text: 'Calificaciones', value: 'proyectosC' },
           { text: 'Equipo', value: 'equipo' },
          { text: 'Timeline', value: 'timeline' },
          { text: 'Progreso', value: 'progreso' },
        ],
        desserts: [
          {
            name: 'Clase 1',icon1: "forum",
            alumno: 'dd',icon2: "account_circle",
            contenido: 'Listo',
            actividad: 'Listo',
            calificaciones:2,
            tareas: 'Listo',
            tareasC: 9,
            proyectos: 'Listo',icon3: "group",
            proyectosC: 9,
            equipo:2,icon: "group",
            progreso:2,
            timeline: "Jun 10 - 30", porc:50, 
           
          },
          {
           name: 'Clase 1',icon1: "forum",
           alumno: 'dd',icon2: "account_circle",
            contenido: 'Listo',
            actividad: 'Estancado',
            calificaciones:2,
            tareas: 'Listo',
            tareasC: 9,
             proyectos: 'Listo',icon3: "group",
            proyectosC: 9,
            equipo:2,icon: "group",
            progreso:50,
            timeline: "Jun 6 - 10", porc:20, 
           
          },
          {
           name: 'Clase 1',icon1: "forum",
           alumno: 'dd',icon2: "account_circle",
            contenido: 'Listo',
            actividad: 'Listo',
            calificaciones:2,
            tareas: 'Listo',
            tareasC: 9,
             proyectos: 'Listo',icon3: "group",
            proyectosC: 9,
            equipo:2,icon: "group",
            progreso:90,
            timeline: "Jun 10 - 30", porc:50, 
           
          },
          {
           name: 'Clase 1',icon1: "forum",
           alumno: 'dd',icon2: "account_circle",
            contenido: 'Listo',
            actividad: 'En proceso',
            calificaciones:2,
            tareas: 'Listo',
            tareasC: 9,
             proyectos: 'Listo',icon3: "group",
            proyectosC: 9,
            equipo:2,icon: "group",
            progreso:20,
            timeline: "Jun 15 - 30", porc:40, 
          
          },
          
        ],
      }
    },
    methods: {
      getColor (contenido) {
        if (contenido == 'Listo') return 'green'
        else if (contenido == 'En proceso') return 'orange'
        else return 'red'
      },
      getColor(actividad){
          if (actividad == 'Listo') return 'green'
        else if (actividad == 'En proceso') return 'orange'
        else return 'red'

      },
      getColor(tareas){
          if (tareas == 'Listo') return 'green'
        else if (tareas == 'En proceso') return 'orange'
        else return 'red'

      },
      getColor(proyectos){
          if (proyectos == 'Listo') return 'green'
        else if (proyectos == 'En proceso') return 'orange'
        else return 'red'

      },
    },
  }
</script>