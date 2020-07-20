<template>
  <v-app>
       






  <v-list dense>
      <v-list-item v-for="(item, i) in items" :key="i" :item="item" :to="item.href">
        {{ item.text }}
      </v-list-item>
    </v-list>  

    </v-app>
    
</template>

<script>
// @ is an alias to /src


export default {
  
}
</script>
