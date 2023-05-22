<template>
            <div class="loker-list-wrap max-w-[550px] w-full flex flex-col">
                  <div class="title mb-2">
                        <h2 class="text-lg font-semibold">Lowongan Kerja</h2>
                        <h6 class="text-xs mt-1">Result : <span class="text-[#7f8c8d]">1 - 25 Items</span></h6>
                  </div>
                  <div class="loker-list-inline w-full flex flex-col py-2">
                        <div v-for="n in 10" class="pl-4 py-4 mb-4 loker-box-inline w-full drop-shadow-sm bg-[#ffffff] rounded-md hover:border-2 hover:border-inherit border-2 border-transparent transition-all duration-400">
                              <NuxtLink to="/loker/bandarlampung-sales-operational-JKASDQW9102931">
                                    <div class="loker-company h-4 mb-2">
                                          <img class="h-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Suzuki_Motor_Corporation_logo.svg/2560px-Suzuki_Motor_Corporation_logo.svg.png" alt="">
                                    </div>
                                    <div class="loker-info">
                                          <div class="loker-info-title text-sm font-semibold">
                                                <a href="" class="text-[var(--color-link-primary)] hover:text-[var(--color-link-hover-primary)]">Sales Operational</a>
                                          </div>
                                          <div class="mb-3 loker-info-company-name text-xs text-[var(--color-light-gray)]">
                                                PT.Suzuki Motor Corporation
                                          </div>
                                          <div class="mb-1 loker-specs text-[.70rem] flex flex-row">
                                                <div class="time-cat flex flex-row items-center mr-2 text-[var(--color-light-gray)]">
                                                      <Icon name="fluent:person-20-regular" class="mr-1"/>
                                                      <span>Pria/Wanita</span>
                                                </div>
                                                <div class="time-cat flex flex-row items-center mr-2 text-[var(--color-light-gray)]">
                                                      <Icon name="fluent:hat-graduation-24-regular" class="mr-1"/>
                                                      <span>SMA/SMK</span>
                                                </div>
                                                <div class="time-cat flex flex-row items-center mr-2 text-[var(--color-light-gray)]">
                                                      <Icon name="fluent:clock-toolbox-24-regular" class="mr-1"/>
                                                      <span>Full-time</span>
                                                </div>
                                          </div>
                                          <div class="loker-region-and-time flex flex-row items-center">
                                                <a href="/about" class="text-[.60rem] bg-[var(--bg-primary)] text-[var(--color-white)] px-1 py-[.2em] rounded-sm">Bandar Lampung</a>
                                                <span class="ml-2 text-[.70rem] text-[var(--color-light-gray)]">3 hari yang lalu</span>
                                          </div>
                                    </div>
                              </NuxtLink>
                        </div>
                        <div v-for="n in 2" class="pl-4 py-4 mb-4 loker-box-inline w-full drop-shadow-sm bg-[#ffffff] rounded-md hover:border-2 hover:border-inherit border-2 border-transparent transition-all duration-400">
                              <div class="animate-pulse">
                                    <div class="loker-company h-4 mb-2 rounded-full bg-slate-200 w-12">
                                          
                                    </div>
                                    <div class="loker-info">
                                          <div class="loker-info-title text-sm font-semibold rounded-full bg-slate-200 w-[120px] h-2 mb-1">
                                             
                                          </div>
                                          <div class="mb-3 loker-info-company-name text-xs text-[var(--color-light-gray)] rounded-full bg-slate-200 w-[180px] h-2">
                                                
                                          </div>
                                          <div class="mb-1 loker-specs text-[.70rem] flex flex-row rounded-full bg-slate-200 w-[200px] h-2">

                                          </div>
                                          <div class="loker-region-and-time flex flex-row items-center">
                                                <a href="/about" class="text-[.60rem] bg-[var(--bg-primary)] text-[var(--color-white)] px-1 py-[.2em] rounded-full bg-slate-200 w-16 h-2"></a>
                                                <span class="ml-2 text-[.70rem] text-[var(--color-light-gray)] rounded-full bg-slate-200 w-24 h-2"></span>
                                          </div>
                                    </div>
                              </div>
                        </div>

                  </div>
                  <div class="loker-list-navigation w-full">
                        <div class="navigation-wrap mx-auto w-auto flex items-center justify-center">
                              <div class="back cursor-pointer">
                                    <IconCSS name="fluent:chevron-double-left-20-regular" color="#2980b9" class="mr-1 text-[var(--bg-primary)]"/>
                                    <IconCSS name="fluent:chevron-left-20-regular" color="#2980b9" class="mr-4 text-[var(--bg-primary)]"/>
                              </div>
                              <div class="number_page text-sm">
                                    <span class="number_prev mr-4 text-[#7f8c8d]">1</span>
                                    <span class="number_current text-[var(--bg-primary)]">2</span>
                                    <span class="number_next ml-4 text-[#7f8c8d]">3</span>
                              </div>
                              <div class="next cursor-pointer">
                                    <IconCSS name="fluent:chevron-right-20-regular" class="ml-4 text-[var(--bg-primary)]"/>
                              </div>
                        </div>
                  </div>
            </div>
</template>

<script setup>

definePageMeta({
  layout: "default",
});

</script>
