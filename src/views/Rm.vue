<template>
  <div class="w-full flex flex-col">
    <div class="w-full">
      <h1 class="font-semibold text-sm">Resumen</h1>
      <div class=" flex items-center justify-center mt-4">
        <h1>De </h1>
        <input type="date" name="" id="" class="mx-2 bg-white p-2 rounded-md" v-model="fechade">
        <h1>a </h1>
        <input type="date" name="" id="" class="mx-2 bg-white p-2 rounded-md" v-model="fechaa">
        <h1>{{fechade}}</h1>
        <h1>{{fechaa}}</h1>
      </div>
    </div>
    

    <div class="w-full py-4 text-3xl flex justify-start flex-col">
      <h1>Riviera Maya</h1>
      <h1 class="font-semibold text-xl uppercase">Incidencias</h1>
    </div>
    <div  class="w-full flex flex-wrap border-2 border-green-200 py-4 justify-evenly">
      
      <!-- Seccion -->
      <div v-for="(datos, a) in arrayData['RM']" :key="a" class="flex flex-wrap justify-center items-center flex-none mb-4">
        <div class="flex justify-center items-center">
          <div class="w-16 h-16 rounded-md shadow flex justify-center items-center mr-4 flex-none" :class="datos.seccion.toLowerCase()">
            <h1 class="truncate font-semibold">{{datos.seccion}}</h1>
          </div>
          <!-- Info de la seccion -->
          <div class="flex flex-col justify-center items-center rounded-2xl bg-white shadow flex-none">
          
            <div class="flex flex-none">
              <div class="flex flex-col items-center justify-center p-4">
                <img class="w-4" src="..\assets\incidencias.svg" alt="">
                <h1 class="font-semibold text-2xl mt-2 truncate">{{datos.totalIncidencias}}</h1>
                <h1 class="font-semibold text-xs uppercase">Incidencias</h1>
              </div>
              <div class="flex flex-col items-center justify-center p-4">
                <img class="w-4" src="..\assets\pen.svg" alt="">
                <h1 class="font-semibold text-2xl mt-2 truncate">{{datos.totalIncidenciasPendientes}}</h1>
                <h1 class="font-semibold text-xs uppercase">Pendientes</h1>
              </div>
              <div class="flex flex-col items-center justify-center p-4">
                <img class="w-4" src="..\assets\sol.svg" alt="">
                <h1 class="font-semibold text-2xl mt-2 truncate">{{datos.totalIncidenciasSolucionados}}</h1>
                <h1 class="font-semibold text-xs uppercase">Resueltas</h1>
              </div>
              <div class="flex flex-col items-center justify-center p-4">
                <img class="w-4" src="..\assets\comentarios.svg" alt="">
                <h1 class="font-semibold text-2xl mt-2 truncate">{{datos.totalComentarios}}</h1>
                <h1 class="font-semibold text-xs uppercase">comentarios</h1>
              </div>
              <div class="flex flex-col items-center flex-none justify-center p-4">
                <img class="w-4" src="..\assets\mupen.svg" alt="">
                <h1 class="font-semibold text-2xl mt-2 truncate">{{datos.mediaPendientes}}</h1>
                <h1 class="font-semibold text-xs">µ PENDIENTES</h1>
              </div>
              <div class="flex flex-col items-center flex-none justify-center p-4">
                <img class="w-4" src="..\assets\musol.svg" alt="">
                <h1 class="font-semibold text-2xl mt-2 truncate">{{datos.mediaSolucionados}}</h1>
                <h1 class="font-semibold text-xs">µ SOLUCIONADOS</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
       

    </div>
         <!-- <div v-for="(datos, a) in arrayData" :key="a">
           <div class="bg-blue-400">{{a}}</div>
           <div v-for="(datos2, b) in arrayData[a]" :key="b">
             {{datos2.seccion}}
           </div>
         </div> -->
         <!-- <div v-for="(datos, a) in arrayData['RM']" :key="a">
           <div class="bg-blue-400">{{a}}</div>
           <div>
             {{datos.mediaPendientes}}
           </div>
         </div> -->

    <!--Incidencias  -->
    <!-- <div v-for="(index, a) in arrayData" :key="a" class="flex flex-col justify-top items-center m-5 text-left uppercase bg-gray-100 overflow-x-auto">
      <div class="flex-none p-5 text-red-600 font-bold">{{ a }}</div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-5 py-5">
        <div v-for="(index, b) in arrayData[a]" :key="b" class="w-56 shadow-md rounded-lg bg-white text-sm text-gray-900 font-sans font-semibold capitalize p-2 cursor-pointer">
          <div class="hover:text-gray-400 text-center py-2 font-bold">
            {{ index.seccion }}
          </div>
          <div class="py-2 hover:text-gray-500">
            Total Incidencias: {{ index.totalIncidencias }}
          </div>
          <div class="py-2 hover:text-gray-500">
            Total Pendientes: {{ index.totalIncidenciasPendientes }}
          </div>
          <div class="py-2 hover:text-gray-500">
            Total Solucionados: {{ index.totalIncidenciasSolucionados }}
          </div>
          <div class="py-2 hover:text-gray-500">
            Media Pendientes: {{ index.mediaPendientes }}
          </div>
          <div class="py-2 hover:text-gray-500">
            Media Solucionados: {{ index.mediaSolucionados }}
          </div>
          <div class="py-2 hover:text-gray-500">
            Total Comentarios: {{ index.totalComentarios }}
          </div>

          <div class="w-full bg-gray-300 px-1 overflow-auto hidden" style="height: 50vh">
           
            <div v-for="(index, c) in arrayData[a][b].resumen['PENDIENTE']" :key="c" class="w-64 rounded-sm my-2 p-2 font-normal bg-red-300 text-red-700">
              P: {{ index.idOT }} - {{ index.incidencia }} - {{ index.tiempo }}
            </div>

            <div v-for="(index, c) in arrayData[a][b].resumen['SOLUCIONADO']" :key="c" class="w-64 rounded-sm my-2 p-2 font-normal bg-green-300 text-green-800">
              S: {{ index.idOT }} - {{ index.incidencia }} - {{ index.tiempo }}
            </div>

          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { useFetch } from "../hooks/useFetch";
import {ref} from 'vue';
export default {
  components: {},
  setup() {
    const fechade = ref("2021-03-30")
    const fechaa = ref("2021-03-31")
    return {
      ...useFetch(
        `https://www.maphg.com/america/php/api-reportes-incidencias.php?action=tiemposIncidencias&idDestino=10&idUsuario=1&fechaInicio=${fechade}&fechaFin=${fechaa}`
      ),fechade,fechaa
    };
  },
};
</script>

<style scoped>
.zia {
  --text-opacity: 1;
  color: #2b6cb0;
  color: rgba(43, 108, 176, var(--text-opacity));
  --bg-opacity: 1;
  background-color: #63b3ed;
}

.zie {
  --text-opacity: 1;
  color: #b7791f;
  color: rgba(183, 121, 31, var(--text-opacity));
  --bg-opacity: 1;
  background-color: #f6e05e;
}

.zic {
  --text-opacity: 1;
  color: #c53030;
  color: rgba(197, 48, 48, var(--text-opacity));
  --bg-opacity: 1;
  background-color: #fc8181;
}

.zhh {
  --text-opacity: 1;
  color: #0097a7;
  color: rgba(197, 48, 48, var(--text-opacity));
  --bg-opacity: 1;
  background-color: #26c6da;
}

.zil {
  --text-opacity: 1;
  color: #2f855a;
  color: rgba(47, 133, 90, var(--text-opacity));
  --bg-opacity: 1;
  background-color: #68d391;
}

.zhp {
  --text-opacity: 1;
  color: #0288d1;
  color: rgba(2, 136, 209, var(--text-opacity));
  --bg-opacity: 1;
  background-color: #29b6f6;
}

.dec {
  --text-opacity: 1;
  color: #6b46c1;
  color: rgba(107, 70, 193, var(--text-opacity));
  --bg-opacity: 1;
  background-color: #b794f4;
}

.zhc {
  --text-opacity: 1;
  color: #c05621;
  color: rgba(192, 86, 33, var(--text-opacity));
  --bg-opacity: 1;
  background-color: #f6ad55;

}

.zha {
  --text-opacity: 1;
  color: #4c51bf;
  color: rgba(76, 81, 191, var(--text-opacity));
  --bg-opacity: 1;
  background-color: #7f9cf5;

}

.auto {
  --text-opacity: 1;
  color: #2c7a7b;
  color: rgba(44, 122, 123, var(--text-opacity));
  --bg-opacity: 1;
  background-color: #4fd1c5;
  
}

.dep {
  --text-opacity: 1;
  color: #e2e8f0;
  color: rgba(226, 232, 240, var(--text-opacity));
  --bg-opacity: 1;
  background-color: #1a202c;

}

.oma {
  --text-opacity: 1;
  color: #f8c024;
  --bg-opacity: 1;
  background-color: #252525;
 
}

.energeticos {
  --text-opacity: 1;
  color: #ffe600;
  --bg-opacity: 1;
  background-color: #474747;
 
}
</style>
