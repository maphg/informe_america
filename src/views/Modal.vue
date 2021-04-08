<template>
  <!-- CONTENEDOR PRINCIPAL DE COLUMNAS -->
  <div class="w-full mt-6 border border-indigo-500 rounded alto p-2">
    <div class="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-0 rounded-lg shadow justify-items-stretch leading-none">
        <!-- ********************** #1 -->
        <div class="md:row-span-2 md:col-span-2 principal ">
            <!--   Titulo de columna -->
            <div class="py-1 text-gray-400 text-xxs font-font-serif">
                <h1>Proyecto / Activo</h1>
            </div>
            <hr class="mx-56 mb-2">
            <!--  Titulo o Nombre de Activo -->
            <div class="py-2 font-light px-4 text-xl">
                <h2 class="truncate">Aqui iria el titulo del proyecto sdkufshf sdyhfsd kfhskdj fhskjdhdf </h2>
            </div>
            <!--  Destino seccion subseccion status -->
            <div class="py-2 px-4 text-xs flex justify-center items-center text-gray-900">
                <h1 class="py-1 px-2 rounded-full bg-gray-200 font-semibold">RM</h1>
                <p class="mx-1">/</p>
                <h1 class="py-1 px-2 rounded-full bg-gray-200 font-semibold">ZIA</h1>
                <p class="mx-1">/</p>
                <p class="mr-1">por:</p>
                <h1 class="font-semibold mr-1 uppercase py-1 px-2 rounded-full bg-gray-200 cursor-pointer">PEDRO REGO</h1>
                <p class="mr-1">el</p>
                <h1 class="font-semibold mr-1 uppercase">14/02/2021  10:16:00</h1>
            </div>
            <hr class="mx-6 mb-2">
            <!-- Stado y status -->
            <div class="py-2 px-2 text-xs flex justify-between items-center text-gray-900 w-full">
                <div class=" px-2 py-1 rounded font-semibold text-gray-500 flex items-center justify-center mr-2">
                    <span class="flex h-3 w-3 relative mr-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                    </span>
                    <h1>En proceso</h1>
                </div>
                <div class="flex justify-center items-center">
                    <div class="w-5 h-5 rounded bg-gray-900 text-white flex items-center justify-center mr-2">
                        <h1>M</h1>
                    </div>
                    <div class="w-5 h-5 rounded bg-blue-500 text-white flex items-center justify-center mr-2">
                        <h1>T</h1>
                    </div>
                    <div class="w-5 h-5 rounded bg-yellow-500 text-white flex items-center justify-center mr-2">
                        <h1>D</h1>
                    </div>
                </div>
                <div class="h-6 px-3 rounded-full hover:bg-indigo-500 hover:text-white text-indigo-500 border border-indigo-500 cursor-pointer flex items-center justify-center mr-2 self-end">
                    <h1 class="text-xl font-semibold mr-1">+</h1>
                    <h1 class="text-xs font-semibold">Status</h1>
                </div>
            </div>
            <hr class="mx-6 my-2">
            <div>
                <h1>Eduardo</h1>
            </div>
        </div>
        <!-- ********************** #2  -->
        <div class="rejilla md:row-span-2 md:col-span-2">
            <h1>..</h1>
        </div>
        <!-- ********************** #3 -->
        <div class="rejilla md:col-span-2">
            <h1>..</h1>
        </div>
        <!-- ********************** #4 -->
        <div class="rejilla">
            <h1>..</h1>
        </div>
        <!-- ********************** #5 -->
        <div class="rejilla">
            <h1>..</h1>
        </div>
    </div>
     
  </div>
  <!-- CONTENEDOR PRINCIPAL DE COLUMNAS -->
</template>

<script>
export default {
    
    }
</script>

<style>
.alto{
   min-height: 90vh;
   overflow-y: auto;
}
.rejilla{
    background-color: white;
}

.principal{
    background-color: #f6f6fc;
}

</style>