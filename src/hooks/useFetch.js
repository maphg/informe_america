import { onMounted, ref } from "vue";

export function useFetch(url, url2) {
  console.log(url);
  const arrayData = ref([]);
  const arraySecciones = ref([]);

  onMounted(async () => {
    try {
      // DATA 1
      const res = await fetch(url);
      arrayData.value = await res.json();
      console.log(arrayData);

      // DATA 2
      const res2 = await fetch(url2);
      arraySecciones.value = await res2.json();
      console.log(arraySecciones);
    } catch (error) {
      console.log(error);
    }
  });

  return { arrayData, arraySecciones };
}