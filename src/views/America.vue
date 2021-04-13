<template>
  <div class="w-full flex flex-col">
    <!-- Contenedor principal -->

    <div class="w-full">
      <!-- Encabezados y selectores de fecha -->
      <h1 class="font-semibold text-sm">Resumen</h1>
      <h1 class="font-semibold text-lg uppercase">Incidencias</h1>
      <div class="flex items-center justify-center mt-4">
        <h1>De:</h1>
        <input
          type="date"
          class="mx-2 bg-white p-2 rounded-md"
          v-model="fechaInicio"
          @change="
            fetchDatos();
            ranking();
          "
        />
        <h1>a</h1>
        <input
          type="date"
          class="mx-2 bg-white p-2 rounded-md"
          v-model="fechaFin"
          @change="
            fetchDatos();
            ranking();
          "
        />
      </div>
    </div>
    <!-- Encabezados y selectores de fecha -->

    <div
      v-for="(a, index) in arrayData"
      :key="index"
      class="flex flex-col w-full"
    >
      <!-- Contenedor principal destino -->

      <div class="text-3xl flex justify-center py-3">
        <!-- nombre destino -->
        <h1>{{ a.ubicacion }}</h1>
      </div>
      <!-- nombre destino -->

      <hr class="border-gray-300 mb-4" />

      <div
        class="grid grid-cols-3 md:grid-cols-5 gap-0 w-full md:w-2/6 mx-auto justify-items-stretch py-4 rounded"
      >
        <!-- Contenedor datos destino -->

        <div class="grid grid-cols-1 gap-0 pb-2 justify-items-center">
          <!-- incidencias creadas -->
          <img src="../assets/incidencias.svg" class="w-6 mb-1" alt="" />
          <h1 class="text-2xl leading-none font-semibold">
            {{ a.pendientes }}
          </h1>
          <h1 class="text-xs leading-none">Creadas</h1>
        </div>

        <!-- incidencias creadas -->

        <div class="grid grid-cols-1 gap-0 pb-2 justify-items-center">
          <!-- Incidencias en proceso acumuladas -->
          <img src="../assets/pen.svg" class="w-6 mb-1" alt="" />
          <h1 class="text-2xl leading-none font-semibold">
            {{ a.total }}
          </h1>
          <h1 class="text-xs leading-none">En proceso</h1>
        </div>
        <!-- Incidencias en proceso acumuladas -->

        <div class="grid grid-cols-1 gap-0 pb-2 justify-items-center">
          <!-- Incidencias resueltas -->
          <img src="../assets/sol.svg" class="w-6 mb-1" alt="" />
          <h1 class="text-2xl leading-none font-semibold">
            {{ a.solucionados }}
          </h1>
          <h1 class="text-xs leading-none">Solucionadas</h1>
        </div>
        <!-- Incidencias resueltas -->

        <div class="md:hidden"></div>

        <div class="grid grid-cols-1 gap-0 justify-items-center">
          <!-- Media tiempo Incidencias en proceso -->
          <img src="../assets/mupen.svg" class="w-6 mb-1" alt="" />
          <h1 class="text-2xl leading-none font-semibold">
            {{ a.mediaPendientes }}
            <span class="font-normal text-xs leading-none">H</span>
          </h1>
          <h1 class="text-xs leading-none">µ En proceso</h1>
        </div>
        <!-- Media tiempo Incidencias en proceso -->

        <div class="grid grid-cols-1 gap-0 justify-items-center">
          <!-- Media tiempo Incidencias en solucionadas -->
          <img src="../assets/musol.svg" class="w-6 mb-1" alt="" />
          <h1 class="text-2xl leading-none font-semibold">
            {{ a.mediaSolucionados }}
            <span class="font-normal text-xs leading-none">H</span>
          </h1>
          <h1 class="text-xs leading-none">µ Solucionadas</h1>
        </div>
        <!-- Media tiempo Incidencias en solucionadas -->
      </div>
      <!-- Contenedor datos destino -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-0 justify-items-center">
        <line-chart
          class="md:col-span-2"
          :colors="['#fc8181', '#f6e05e', '#68d391']"
          :download="true"
          :data="a.grafica"
        ></line-chart>

        <div
          class="w-full py-4 grid grid-cols-1 mt-4 md:mt-0 gap-0 justify-items-center"
        >
          <h1 class="mb-2 font-semibold">Ranking creadas</h1>
          <div
            v-for="(r, index) in arrayRanking"
            :key="index"
            class="grid grid-cols-4 gap-0 justify-items-center ranking my-auto"
          >
            <!-- Media tiempo Incidencias en solucionadas -->
            <h1 class="leading-none font-semibold">{{ r.idDestino }}</h1>
            <h1 class="leading-none font-semibold">{{ r.destino }}</h1>
            <img src="../assets/incidencias.svg" class="w-4 mb-1" alt="" />
            <h2 class="leading-none font-semibold">{{ r.creados }}</h2>
          </div>
        </div>

        <div
          class="w-full py-4 grid grid-cols-1 mt-4 md:mt-0 gap-0 justify-items-center"
        >
          <h1 class="mb-2 font-semibold">Ranking solucionadas</h1>
          <div
            v-for="(r, index) in arrayRanking"
            :key="index"
            class="grid grid-cols-4 gap-0 justify-items-center ranking my-auto"
          >
            <!-- Media tiempo Incidencias en solucionadas -->
            <h1 class="leading-none font-semibold">{{ r.idDestino }}</h1>
            <h1 class="leading-none font-semibold">{{ r.destino }}</h1>
            <img src="../assets/sol.svg" class="w-4 mb-1" alt="" />
            <h2 class="leading-none font-semibold">{{ r.solucionados }}</h2>
          </div>
        </div>

        <div
          class="w-full py-4 grid grid-cols-1 mt-4 md:mt-0 gap-0 justify-items-center"
        >
          <h1 class="mb-2 font-semibold">Ranking µ tiempo solución</h1>
          <div
            v-for="(r, index) in arrayRanking"
            :key="index"
            class="grid grid-cols-4 gap-0 justify-items-center ranking my-auto"
          >
            <!-- Media tiempo Incidencias en solucionadas -->
            <h1 class="leading-none font-semibold">{{ r.idDestino }}</h1>
            <h1 class="leading-none font-semibold">{{ r.destino }}</h1>
            <img src="../assets/musol.svg" class="w-4 mb-1" alt="" />
            <h2 class="leading-none font-semibold">
              {{ r.mediaSolucionados }}
              <span class="font-normal text-xs leading-none">H</span>
            </h2>
          </div>
        </div>
      </div>

      <!-- Contenedor principal todas las secciones-->
      <div class="w-full grid grid-cols-1 md:grid-cols-4 gap-3 mt-4">
        <div
          class="w-full bg-white shadow-sm rounded p-2 flex flex-col items-center justify-center"
          v-for="(b, index) in arraySecciones[a.idDestino]"
          :key="index"
        >
          <!-- contenedor de seccion-->
          <div class="flex w-full">
            <div
              class="w-10 h-10 rounded flex items-center justify-center flex-none"
              :class="[b.seccion.toLowerCase()]"
            >
              <!-- icono seccion-->
              <h1 class="truncate">{{ b.seccion }}</h1>
            </div>
            <div class="w-full h-full flex items-end justify-start flex-wrap">
              <!-- datos de la seccion-->
              <div class="w-1/5 flex flex-col justify-start items-center">
                <!-- incidencias creadas -->
                <img src="../assets/incidencias.svg" class="h-6 mb-1" alt="" />
                <h1 class="text-xs leading-none font-semibold">
                  {{ b.totalPendientes }}
                </h1>
                <h1 class="text-xxs leading-none">Creadas</h1>
              </div>
              <!-- incidencias creadas -->
              <div class="w-1/5 flex flex-col justify-start items-center">
                <!-- Incidencias en proceso acumuladas -->
                <img src="../assets/pen.svg" class="h-6 mb-1" alt="" />
                <h1 class="text-xs leading-none font-semibold">
                  {{ b.total }}
                </h1>
                <h1 class="text-xxs leading-none">En proceso</h1>
              </div>
              <!-- Incidencias en proceso acumuladas -->

              <div class="w-1/5 flex flex-col justify-start items-center">
                <!-- Incidencias resueltas -->
                <img src="../assets/sol.svg" class="h-6 mb-1" alt="" />
                <h1 class="text-xs leading-none font-semibold">
                  {{ b.totalSolucionados }}
                </h1>
                <h1 class="text-xxs leading-none">Solucionadas</h1>
              </div>
              <!-- Incidencias resueltas -->

              <div class="w-1/5 flex flex-col justify-start items-center">
                <!-- Media tiempo Incidencias en proceso -->
                <img src="../assets/mupen.svg" class="h-6 mb-1" alt="" />
                <h1 class="text-xs leading-none font-semibold">
                  {{ b.mediaPendientes }}
                  <span class="font-normal text-xs leading-none">H</span>
                </h1>
                <h1 class="text-xxs leading-none">µ En proceso</h1>
              </div>
              <!-- Media tiempo Incidencias en proceso -->

              <div class="w-1/5 flex flex-col justify-start items-center">
                <!-- Media tiempo Incidencias en solucionadas -->
                <img src="../assets/musol.svg" class="h-6 mb-1" alt="" />
                <h1 class="text-xs leading-none font-semibold">
                  {{ b.mediaSolucionados }}
                  <span class="font-normal text-xs leading-none">H</span>
                </h1>
                <h1 class="text-xxs leading-none">µ Sol.</h1>
              </div>
              <!-- Media tiempo Incidencias en solucionadas -->
            </div>
            <!-- Encabezados y selectores de fecha -->

            <!-- contenedor de seccion-->
          </div>
          <div class="flex flex-col w-full">
            <!-- Contenedor principal destino -->

            <hr class="border-gray-300 mb-4" />

            <div class="w-full">
              <line-chart
                height="200px"
                :colors="['#fc8181', '#f6e05e', '#68d391']"
                :download="true"
                :data="a.graficaSecciones[b.idSeccion]"
              ></line-chart>

              <!-- CREADAS EN ROJO => SON LAS INCIDENCIAS CREADAS ESE DIA -->
              <!-- EN PROCESO EN AMARILLO => SON LAS INCIDENCIAS QUE NO SE HAN SOLUCIONADO EL ACUMULADO QUE SE VIENE ARRASTRANDO -->
            </div>
          </div>
          <!-- Contenedor principal todas las secciones-->
        </div>
        <!-- Contenedor principal destino -->
      </div>
      <!-- Contenedor principal -->

      <!-- Contenedor principal todas las secciones-->
    </div>
    <!-- Contenedor principal destino -->
  </div>
  <!-- Contenedor principal -->
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    var fecha = new Date();
    var mes = fecha.getMonth() + 1;
    var dia = fecha.getDate();
    var ano = fecha.getFullYear();
    if (dia < 10) dia = "0" + dia;
    if (mes < 10) mes = "0" + mes;
    const fechaFin = ref(ano + "-" + mes + "-" + dia);

    fecha.setDate(fecha.getDate() - 7);
    var mes = fecha.getMonth() + 1;
    var dia = fecha.getDate();
    var ano = fecha.getFullYear();
    if (dia < 10) dia = "0" + dia;
    if (mes < 10) mes = "0" + mes;
    const fechaInicio = ref(ano + "-" + mes + "-" + dia);

    // ARRAYS
    const arrayData = ref([]);
    const arraySecciones = ref([]);
    const arrayRanking = ref([]);

    const ranking = async () => {
      console.log(fechaInicio.value, fechaFin.value);

      try {
        const resp = await fetch(
          `http://localhost/maphg-beta/apis/reportes.php?action=ranking&idDestino=1&idUsuario=1&fechaInicio=${fechaInicio.value}&fechaFin=${fechaFin.value}`
        );
        arrayRanking.value = await resp.json();
      } catch (error) {
        console.log(error);
      }
    };
    ranking();

    const fetchDatos = async () => {
      console.log(fechaInicio.value, fechaFin.value);
      try {
        // DATA 1
        const res = await fetch(
          `http://localhost/maphg-beta/apis/reportes.php?action=reporteIncidenciasGlobal&idDestino=1&idUsuario=1&fechaInicio=${fechaInicio.value}&fechaFin=${fechaFin.value}`
        );
        arrayData.value = await res.json();

        // DATA 2
        const res2 = await fetch(
          `http://localhost/maphg-beta/apis/reportes.php?action=reporteIncidencias&idDestino=1&idUsuario=1&fechaInicio=${fechaInicio.value}&fechaFin=${fechaFin.value}`
        );
        arraySecciones.value = await res2.json();
      } catch (error) {
        console.log(error);
      }
    };
    fetchDatos();

    return {
      arrayData,
      arraySecciones,
      arrayRanking,
      fechaInicio,
      fechaFin,
      ranking,
      fetchDatos,
    };
  },
};
</script>

<style scoped>
.ranking {
  font-size: 15px;
}

.destinoactual {
  color: #fc8181;
  font-size: 20px;
  border-width: 3px;
  border-color: #f6e05e;
  border-radius: 10px;
  padding: 4px;
}

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
