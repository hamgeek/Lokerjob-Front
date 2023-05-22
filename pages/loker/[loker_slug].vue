<template>
      <div class="loker-information max-w-[550px] w-full flex flex-col">
            <!-- <div class="title mb-2">
                  <h1 class="text-lg font-semibold">Lowongan Kerja</h1>

                  <h6 class="text-xs mt-1">Result : <span class="text-[#7f8c8d]">1 - 25 Items</span></h6>
            </div> -->
            <div class="loker-info-img-company w-auto h-10 mb-6">
                  <img class="h-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Suzuki_Motor_Corporation_logo.svg/2560px-Suzuki_Motor_Corporation_logo.svg.png" alt="">
            </div>
            <div class="loker-info-title mb-4">
                  <h1 class="text-sm font-semibold ">Sales Operational</h1>
            </div>
            <div class="loker-info-specs-summary flex flex-col space-y-1 mb-4">
                  <div class="lokasi text-xs flex flex-row items-center"><Icon name="fluent:building-20-regular" class=""/> <span class="font-light ml-2">PT. Suzuki Motor Corporation</span></div>
                  <div class="lokasi text-xs flex flex-row items-center"><Icon name="fluent:globe-location-20-regular" class=""/> <span class="font-light ml-2">Bandar Lampung</span></div>
                  <div class="lokasi text-xs flex flex-row items-center"><Icon name="fluent:person-20-regular" class=""/> <span class="font-light ml-2">Pria</span></div>
                  <div class="lokasi text-xs flex flex-row items-center"><Icon name="fluent:hat-graduation-24-regular" class=""/> <span class="font-light ml-2">S1</span></div>
                  <div class="lokasi text-xs flex flex-row items-center"><Icon name="fluent:person-accounts-20-regular" class=""/> <span class="font-light ml-2">Pengalaman Min. 1 Tahun</span></div>
            </div>
            <div class="loker-info-description drop-shadow-sm bg-[#ffffff] rounded-md mb-4">
                  <div class="title w-full bg-[--bg-primary] text-sm flex items-center h-[36px] text-[var(--color-white)] pl-4 rounded-t-md">
                        Deskripsi Pekerjaan
                  </div>
                  <div class="content rounded-b-md px-4 py-4 bg-[var(--color-white)] text-xs">
                        <ul class="flex space-y-2 flex-col" style="list-style-type: square; list-style-position: inside;">
                              <li>Memasarkan Product keluaran terbaru.</li>
                              <li>Mengejar Target Penjualan Product.</li>
                        </ul>
                  </div>
            </div>
            <div class="loker-info-rules drop-shadow-sm bg-[#ffffff] rounded-md mb-4">
                  <div class="title w-full bg-[--bg-primary] text-sm flex items-center h-[36px] text-[var(--color-white)] pl-4 rounded-t-md">
                        Persyaratan
                  </div>
                  <div class="content rounded-b-md px-4 py-4 bg-[var(--color-white)] text-xs">
                        <ul class="flex space-y-2 flex-col" style="list-style-type: square; list-style-position: inside;">
                              <li>Kemampuan yang harus dimiliki : Microsoft Office.</li>
                              <li>Dapat Berkomunikasi dengan baik dan lancar.</li>
                              <li>Diutamakan Rumah berada dekat Kantor.</li>
                              <li>Memiliki SIM C dan Kendaraan Beroda Dua (Motor).</li>
                              <li>Dapat mengendarai Mobil dapat Nilai Plus.</li>
                        </ul>
                  </div>
            </div>
            <div class="loker-info-caution drop-shadow-sm bg-[#ffffff] rounded-md mb-4">
                  <div class="title w-full bg-[var(--color-danger)] text-sm flex items-center h-[36px] text-[var(--color-white)] pl-4 rounded-t-md">
                        Peringatan !!
                  </div>
                  <div class="content rounded-b-md px-4 py-4 bg-[var(--color-white)] text-xs">
                        <ul class="flex space-y-2 flex-col" style="list-style-type: square; list-style-position: inside;">
                              <li>Memasarkan Product keluaran terbaru.</li>
                              <li>Mengejar Target Penjualan Product.</li>
                        </ul>
                  </div>
            </div>
            <div class="loker-info-apply drop-shadow-sm bg-[#ffffff] rounded-md mb-4">
                  <div class="title w-full bg-[--bg-primary] text-sm flex items-center h-[36px] text-[var(--color-white)] pl-4 rounded-t-md">
                        Cara Melamar
                  </div>
                  <div class="content rounded-b-md px-4 py-4 bg-[var(--color-white)] text-xs">
                        <ul class="flex space-y-2 flex-col" style="list-style-type: square; list-style-position: inside;">
                              <li>Memasarkan Product keluaran terbaru.</li>
                              <li>Mengejar Target Penjualan Product.</li>
                        </ul>
                  </div>
            </div>
      </div>
</template>

<script setup>

definePageMeta({
layout: "default",
});

</script>
