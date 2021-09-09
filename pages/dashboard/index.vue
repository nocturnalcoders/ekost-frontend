<template>
  <div class="project-page">
    <section class="dashboard-header pt-5">
      <div class="container mx-auto relative">
        <Navbar />
      </div>
    </section>
    <section class="container mx-auto pt-8">
      <div class="flex justify-between items-center mb-6">
        <div class="w-3/4 mr-6">
          <h2 class="text-4xl text-gray-900 mb-2 font-medium">Dashboard</h2>
          <ul class="flex mt-2">
            <li class="mr-6">
              <nuxt-link class="text-gray-800 font-bold" to="#">
                Your Rooms
              </nuxt-link>
            </li>
            <li class="mr-6">
              <nuxt-link
                class="text-gray-500 hover:text-gray-800"
                to="/dashboard/transactions"
              >
                Your Transactions
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="w-1/4 text-right">
          <nuxt-link
            to="/dashboard/create.html"
            class="
              bg-orange-button
              hover:bg-green-button
              text-white
              font-bold
              py-4
              px-4
              rounded
              inline-flex
              items-center
            "
          >
            + Create Campaign
          </nuxt-link>
        </div>
      </div>
      <hr />
      <div class="block mb-2">
        <div
          class="w-full lg:max-w-full lg:flex mb-4"
          v-for="kost in kosts.data"
          :key="kost.id"
        >
          <div
            class="
              border
              h-48
              lg:h-auto lg:w-48
              flex-none
              bg-cover
              rounded-t
              lg:rounded-t-none lg:rounded-l
              text-center
              overflow-hidden
            "
            :style="
              'background-color : #bbb; background-position: center; background-image: url(\'' +
              $axios.defaults.baseURL +
              '/' +
              kost.image_url +
              '\')'
            "
          >
            <img
              :src="$axios.defaults.baseURL + kost.image_url"
              alt=""
              class="rounded-20 w-full"
            />
          </div>
          <nuxt-link
            :to="'dashboard/projects/' + kost.id"
            class="
              w-full
              border-r border-b border-l border-gray-400
              lg:border-l-0 lg:border-t lg:border-gray-400
              bg-white
              rounded-b
              lg:rounded-b-none lg:rounded-r
              p-8
              flex flex-col
              justify-between
              leading-normal
            "
          >
            <div class="mb-8">
              <div class="text-gray-900 font-bold text-xl mb-1">
                {{ kost.name }}
              </div>
              <p class="text-sm text-gray-600 flex items-center mb-2">
                Rp. {{ new Intl.NumberFormat().format(kost.price) }}
              </p>
              <p class="text-gray-700 text-base">
                {{ kost.short_description }}
              </p>
            </div>
            <div class="flex items-center">
              <button
                class="bg-green-button text-white py-2 px-4 rounded"
              >
                Detail
              </button>
            </div>
          </nuxt-link>
        </div>
      </div>
    </section>
    <div class="cta-clip -mt-20"></div>
    <Footer />
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  async asyncData({ $axios, app }) {
    const kosts = await $axios.$get(
      '/api/v1/kosts?user_id=' + app.$auth.user.id
    )
    return { kosts }
  },
}
</script>
