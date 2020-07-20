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

   <div >
       
    <v-btn class="ma-2" tile color="indigo" dark>Mover Alumnos</v-btn>
    <v-btn class="ma-2" tile outlined color="success">
       Eliminar Alumno
    </v-btn>
    <v-btn class="ma-2" tile large color="teal" icon>
      <v-icon>mdi-vuetify</v-icon>
    </v-btn>
    
    <v-text-field
          v-model="search"
          append-icon="search"
          label="Filtrar"
          single-line
          width-
        >
    </v-text-field>
   
    
  </div>

   


  </v-card>


 <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1"
  >
     <template v-slot:item.Alumnos="{ item }" >
<v-checkbox v-model="selected" :label="` ${item.Alumnos}`"></v-checkbox>    
     </template>


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
            value: 'Alumnos',
          },
          
          { text: 'Clave de grupo', value: 'clave' },
          { text: 'Escuela', value: 'Escuela' },
          { text: 'Fecha de carga', value: 'fechas' },
         
  
        ],
        desserts: [
          {
            Alumnos: 'Ricardo Quezada Cancino',
            clave: '123Z-4YT9',
            Escuela: 'Grupo Kent',
            fechas:'9 Jun 2020',
     
            
           
          },
          {
       Alumnos: 'Ricardo Quezada Cancino',
            clave: '123Z-4YT9',
            Escuela: 'Grupo Kent',
            fechas:'9 Jun 2020',
            
          
          },
          {
         Alumnos: 'Ricardo Quezada Cancino',
            clave: '123Z-4YT9',
            Escuela: 'Grupo Kent',
            fechas:'9 Jun 2020',
            
           
           
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