<template>
          <div class="loker-filter-sidebar w-[calc(100%-550px)] pl-4">
                  <div class="sticky top-4 loker-filter-wrap drop-shadow-sm bg-[#ffffff] rounded-md">
                        <div class="w-full bg-[--bg-primary] text-sm flex items-center h-[36px] text-[var(--color-white)] pl-4 rounded-t-md">Cari Lowongan</div>
                        <div class="loker-filter-content rounded-b-md px-4 py-4">
                              <div class="input-group mb-4">
                                    <div class="text-xs mb-2 font-medium">Lokasi</div>
                                    <div class="relative input-wicon w-full h-[32px] border-2 rounded-md flex items-center">
                                          <div class="w-[40px] h-full flex items-center justify-center">
                                                <Icon name="fluent:globe-location-20-regular" class=""/>
                                          </div>
                                          <input placeholder="Masukan Wilayah" v-model="location_val" @keyup="location_suggest = true" @blur="closeSuggest" type="text" class="w-[calc(100%-40px)] focus:outline-none text-xs" />
                                          <div v-show="location_suggest" class="input-suggest-list absolute top-[32px] left-[39px] right-0 bg-[var(--color-white)] text-xs border-2 rounded-md shadow-md overflow-scroll">
                                                <div v-for="item of location_data" @click="location_val = item" class="list w-full h-[32px] flex items-center pl-2 border-b-2 last:border-b-0 hover:bg-[var(--bg-primary)] hover:text-[var(--color-white)] cursor-pointer">
                                                      {{item}}
                                                </div>
                                          </div>
                                          
                                    </div>
                              </div>
                              <div class="input-group mb-4">
                                    <div class="text-xs mb-2 font-medium">Profesi / Jabatan</div>
                                    <div class="input-wicon w-full h-[32px] border-2 rounded-md flex items-center">
                                          <div class="w-[40px] h-full flex items-center justify-center">
                                                <Icon name="fluent:search-20-regular" class=""/>
                                          </div>
                                          <input placeholder="Masukan Profesi" type="text" class="w-[calc(100%-40px)] focus:outline-none text-xs" />
                                    </div>
                              </div>
                              <div class="input-group mb-4">
                                    <div class="text-xs mb-2 font-medium">Pendidikan</div>
                                    <div class="input-wicon w-full h-[32px] border-2 rounded-md flex items-center">
                                          <div class="w-[40px] h-full flex items-center justify-center">
                                                <Icon name="fluent:hat-graduation-24-regular" class=""/>
                                          </div>
                                          <input placeholder="Masukan Pendidikan" type="text" class="w-[calc(100%-40px)] focus:outline-none text-xs" />
                                    </div>
                              </div>
                              <div class="input-group mb-4">
                                    <div class="text-xs mb-2 font-medium">Gender</div>
                                    <div class="input-wicon w-full h-[32px] border-2 rounded-md flex items-center">
                                          <div class="w-[40px] h-full flex items-center justify-center">
                                                <Icon name="fluent:person-20-regular" class=""/>
                                          </div>
                                          <input placeholder="Masukan Gender" type="text" class="w-[calc(100%-40px)] focus:outline-none text-xs" />
                                    </div>
                              </div>
                              <div class="button-input-filter w-full h-[32px] flex items-center justify-center text-xs font-semibold text-[var(--color-white)] bg-[var(--bg-dark-primary)] hover:opacity-80 rounded-md cursor-pointer transition-all duration-400">
                                    Cari
                              </div>
                        </div>
                  </div>
            </div>
</template>

<script setup lang="ts">
      
      const location_val = ref<String>("");
      const location_suggest = ref<Boolean>(false);
      const location_data = ref<any>(["Jakarta","Surabaya","Bandung"]);

      const closeSuggest = () => {
            setTimeout(() => {
                  location_suggest.value = false
            }, 200);
      };

</script>