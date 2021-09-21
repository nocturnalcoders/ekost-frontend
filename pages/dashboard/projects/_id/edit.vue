<template>
  <div class="project-page">
    <section class="dashboard-header pt-5">
      <div class="container mx-auto relative">
        <Navbar />
      </div>
    </section>
    <section class="container mx-auto pt-8">
      <div class="flex justify-between items-center">
        <div class="w-full mr-6">
          <h2 class="text-4xl text-gray-900 mb-2 font-medium">Dashboard</h2>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div class="w-3/4 mr-6">
          <h3 class="text-2xl text-gray-900 mb-4">Edit Room "{{kost.data.name}}"</h3>
        </div>
        <div class="w-1/4 text-right">
          <button
            @click="save"
            class="
              bg-green-button
              hover:bg-green-button
              text-white
              font-bold
              px-4
              py-1
              rounded
              inline-flex
              items-center
            "
          >
            Save
          </button>
        </div>
      </div>
      <div class="block mb-2">
        <div class="w-full lg:max-w-full lg:flex mb-4">
          <div
            class="
              w-full
              border border-gray-400
              bg-white
              rounded
              p-8
              flex flex-col
              justify-between
              leading-normal
            "
          >
            <form class="w-full">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-gray-700 text-xs
                      font-bold
                      mb-2
                    "
                  >
                    Rooms Name
                  </label>
                  <input
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-200
                      text-gray-700
                      border border-gray-200
                      rounded
                      py-3
                      px-4
                      leading-tight
                      focus:outline-none focus:bg-white focus:border-gray-500
                    "
                    type="text"
                    placeholder="Contoh: Demi Gunpla Demi Istri"
                    v-model="kost.data.name"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-gray-700 text-xs
                      font-bold
                      mb-2
                    "
                  >
                    Price
                  </label>
                  <input
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-200
                      text-gray-700
                      border border-gray-200
                      rounded
                      py-3
                      px-4
                      leading-tight
                      focus:outline-none focus:bg-white focus:border-gray-500
                    "
                    type="number"
                    placeholder="Contoh: 200000"
                    v-model="kost.data.price"
                  />
                </div>
                <div class="w-full px-3">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-gray-700 text-xs
                      font-bold
                      mb-2
                      mt-3
                    "
                  >
                    Short Description
                  </label>
                  <input
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-200
                      text-gray-700
                      border border-gray-200
                      rounded
                      py-3
                      px-4
                      mb-3
                      leading-tight
                      focus:outline-none focus:bg-white focus:border-gray-500
                    "
                    type="text"
                    placeholder="Deskripsi singkat mengenai Room Kamu"
                    v-model="kost.data.short_description"
                  />

                  
                </div>
                <div class="w-full px-3">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-gray-700 text-xs
                      font-bold
                      mb-2
                      mt-3
                    "
                  >
                    Room Available 
                  </label>
                  <input
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-200
                      text-gray-700
                      border border-gray-200
                      rounded
                      py-3
                      px-4
                      mb-3
                      leading-tight
                      focus:outline-none focus:bg-white focus:border-gray-500
                    "
                    type="text"
                    placeholder="Deskripsi singkat mengenai Room Kamu"
                    v-model="kost.data.current_space_count"
                  />

                  
                </div>
                <div class="w-full px-3">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-gray-700 text-xs
                      font-bold
                      mb-2
                    "
                  >
                    What will Finders get
                  </label>
                  <input
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-200
                      text-gray-700
                      border border-gray-200
                      rounded
                      py-3
                      px-4
                      mb-3
                      leading-tight
                      focus:outline-none focus:bg-white focus:border-gray-500
                    "
                    type="text"
                    placeholder="Contoh: Ayam, Nasi Goreng, Piring"
                    v-model="kost.data.perks"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-gray-700 text-xs
                      font-bold
                      mb-2
                    "
                  >
                    Longitude
                  </label>
                  <input
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-200
                      text-gray-700
                      border border-gray-200
                      rounded
                      py-3
                      px-4
                      leading-tight
                      focus:outline-none focus:bg-white focus:border-gray-500
                    "
                    type="text"
                    placeholder="Contoh: Demi Gunpla Demi Istri"
                    v-model="kost.data.longitude"
                  />
                </div>

                <div class="w-full md:w-1/2 px-3 mb-10 md:mb-0">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-gray-700 text-xs
                      font-bold
                      mb-2
                    "
                  >
                    Latitude
                  </label>
                  <input
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-200
                      text-gray-700
                      border border-gray-200
                      rounded
                      py-3
                      px-4
                      leading-tight
                      focus:outline-none focus:bg-white focus:border-gray-500
                    "
                    type="text"
                    placeholder="Contoh: Demi Gunpla Demi Istri"
                    v-model="kost.data.latitude"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-gray-700 text-xs
                      font-bold
                      mb-2
                      mt-5
                    "
                  >
                    Panjang
                  </label>
                  <input
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-200
                      text-gray-700
                      border border-gray-200
                      rounded
                      py-3
                      px-4
                      leading-tight
                      focus:outline-none focus:bg-white focus:border-gray-500
                    "
                    type="text"
                    placeholder="Contoh: Demi Gunpla Demi Istri"
                    v-model="kost.data.panjang"
                  />
                </div>
                
                <div class="w-full md:w-1/2 px-3 mb-10 md:mb-0">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-gray-700 text-xs
                      font-bold
                      mb-2
                      mt-5
                    "
                  >
                    Lebar
                  </label>
                  <input
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-200
                      text-gray-700
                      border border-gray-200
                      rounded
                      py-3
                      px-4
                      leading-tight
                      focus:outline-none focus:bg-white focus:border-gray-500
                    "
                    type="text"
                    placeholder="Contoh: Demi Gunpla Demi Istri"
                    v-model="kost.data.lebar"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3 mb-10 md:mb-0">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-gray-700 text-xs
                      font-bold
                      mb-2
                      mt-10
                    "
                  >
                    Gender
                  </label>
                  <input
                    type="radio"
                    id="Perempuan"
                    value="Perempuan"
                    v-model="kost.data.gender"
                  />
                  <label for="one">Perempuan</label>
                  <br />
                  <input
                    type="radio"
                    id="Laki-Laki"
                    value="Laki-Laki"
                    v-model="kost.data.gender"
                  />
                  <label for="two">Laki-Laki</label>
                  <br />
                  <input
                    type="radio"
                    id="Campur"
                    value="Campur"
                    v-model="kost.gender"
                  />
                  <label for="two">Campur</label>
                </div>

                <div class="w-full px-3 mt-10">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-gray-700 text-xs
                      font-bold
                      mb-2
                    "
                  >
                    Description
                  </label>
                  <textarea
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-200
                      text-gray-700
                      border border-gray-200
                      rounded
                      py-3
                      px-4
                      mb-3
                      leading-tight
                      focus:outline-none focus:bg-white focus:border-gray-500
                    "
                    type="text"
                    placeholder="Isi deskripsi panjang untuk Room Kamu"
                    v-model="kost.data.description"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  
  async asyncData({ $axios,params}) {
    const kost = await $axios.$get('api/v1/kosts/' + params.id)
    return {kost}
  },

  methods: {
    async save() {
      try {
        let response = await this.$axios.$put('api/v1/kosts' + this.$route.params.id, {
          name: this.kost.data.name,
          price: this.kost.data.price,
          short_description: this.kost.data.short_description,
          perks: this.kost.data.perks,
          longitude: this.kost.data.longitude,
          latitude: this.kost.data.latitude,
          panjang: this.kost.data.panjang,
          lebar: this.kost.data.lebar,
          gender: this.kost.data.gender,
          description: this.kost.data.description,
        })
        
        console.log('ini response create kost', response)
      } catch (error) {
        console.log('ini error response create kost', error)
      }
    },
     changeImage(url) {
      this.default_image = url
    },
  },
}
</script>
