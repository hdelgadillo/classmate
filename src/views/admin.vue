<template>
  <v-sheet
    height="100%"
    class="overflow-hidden"
    style="position: relative;"
  >
         

                  

     <v-card>
    <v-system-bar></v-system-bar>
    <v-toolbar flat>
      <v-toolbar-title >Revisar mis grupos virtuales</v-toolbar-title>
      <v-spacer></v-spacer>
     
    </v-toolbar>
    <v-banner
      single-line
      :sticky="sticky"
    >
 <div >
    <v-btn class="ma-2" tile color="indigo" dark>Administrar alumnos</v-btn>
    <v-btn class="ma-2" tile outlined color="success">
       Mis grupos
    </v-btn>
    <v-btn class="ma-2" tile large color="teal" icon>
      <v-icon>mdi-vuetify</v-icon>
    </v-btn>
  </div>


    </v-banner>
    
  </v-card>


 <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1"
  >
    




  </v-data-table>



    <v-container class="fill-height">
      <v-row
        align="center"
        justify="center"
      >
       
      </v-row>
    </v-container>

    
    
  </v-sheet>
  
</template>





<script>
  export default {
    data () {
      return {
        drawer: null,
        headers: [
          {
            text: 'Institucion',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Grupo', value: 'grupo'  },
          { text: 'Clave de grupo', value: 'clave' },
          { text: 'N° de alumnos', value: 'alumnos' },
          { text: 'El grupo termina', value: 'termina' },
         
  
        ],
        desserts: [
          {
            name: 'UVM',
            grupo: 'Español II',
            clave: '7YTR-456',
            alumnos:41,
            termina:'9 Jun 2021',
            
           
          },
          {
           name: 'Unitec',icon1: "forum",
            grupo: 'Español II',
            clave: '7YTR-456',
            alumnos:41,
            termina:'9 Jun 2021',
            
          
          },
          {
           name: 'Unitec',icon1: "forum",
          
             grupo: 'Español II',
            clave: '7YTR-456',
            alumnos:41,
            termina:'9 Jun 2021',
            
           
           
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