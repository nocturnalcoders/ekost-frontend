<template>
  <div class="landing-page">
    <section class="landing-hero pt-5">
      <div class="header__bg"></div>
      <div class="container mx-auto relative">
        <Navbar />
        <div class="flex items-center pt-10 px-5 md:px-0">
          <div class="w-1/2">
            <h1 class="text-4xl text-white mb-5">
              Every People can be <u class="hero-underline">Owner and finder</u> <br />
              getting started with<u class="hero-underline">room</u> <br />
              to live
            </h1>
            <p class="text-white text-xl font-light mb-8">
              Find The Best The Best Room <br />
              For Live and Stay
            </p>
            <button
              @click="$router.push({ path: '/' })"
              class="
                block
                bg-orange-button
                hover:bg-green-button
                text-white
                font-semibold
                px-12
                py-3
                text-xl
                rounded-full
              "
            >
              Sell a Room
            </button>
          </div>
          <div class="w-1/2 flex justify-center">
            <img src="/hero-image@2x.png" alt="crowdfunding project" />
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto pt-24">
      <div class="flex justify-between items-center">
        <div class="w-auto">
          <h2 class="text-3xl text-gray-900 mb-8">
            New Articles you can <br />
            see and Read take a chill
          </h2>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4 mt-3">
        <div
          v-for="mountain in mountains.data"
          :key="mountain.id"
          class="card-project w-full p-5 border border-gray-500 rounded-20"
        >
          <div class="item">
            <figure class="item-image">
              <img
                :src="$axios.defaults.baseURL + mountain.image_url"
                alt=""
                class="rounded-20 w-full"
              />
            </figure>
            <div class="item-meta">
              <h4 class="text-3xl font-medium text-gray-900 mt-5">
                {{ mountain.title }}
              </h4>
              <p class="text-md font-light text-gray-900">
                {{ mountain.subtitle }}
              </p>
              <p class="text-md font-light text-gray-900">
                {{ mountain.description }}
              </p>
              <div class="relative pt-4">
                <div
                  :style="'width'"
                  class="
                    shadow-none
                    flex flex-col
                    text-center
                    whitespace-nowrap
                    text-white
                    justify-center
                    bg-purple-progress
                    progress-striped
                  "
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto pt-24">
      <div class="flex justify-between items-center">
        <div class="w-auto">
          <h2 class="text-3xl text-gray-900 mb-8">
            See What Our <br />
            Happy Clients Say
          </h2>
        </div>
      </div>
      <div class="flex mb-10">
        <div class="w-2/12 flex justify-center items-start">
          <img src="/testimonial-line.svg" alt="" />
        </div>
        <div class="w-8/12 mt-16">
          <h2 class="text-3xl text-gray-900 font-light">
            “Loan Room at Ekost is very easy and comfortable. <br />
            Just need to find an place, click and already Stay.”
          </h2>
          <div class="testimonial-info mt-8">
            <div class="name text-xl font-semibold">Shopie Nicole</div>
            <div class="title text-xl font-light text-gray-400">
              Project Manager
            </div>
          </div>
          <div class="testimonial-icon mt-10">
            <img
              src="/testimonial-1-icon.png"
              alt=""
              class="w-20 mr-5 inline-block testimonial-user rounded-full"
            />
            <img
              src="/testimonial-2-icon.png"
              alt=""
              class="w-20 mr-5 inline-block testimonial-user rounded-full"
            />
            <img
              src="/testimonial-3-icon.png"
              alt=""
              class="
                w-20
                mr-5
                inline-block
                testimonial-user
                active
                rounded-full
              "
            />
          </div>
        </div>
        <div class="w-2/12"></div>
      </div>
    </section>
    <div class="cta-clip -mt-20"></div>
    <CallToAction />
    <footer class="bg-purple-progress py-20 text-white text-lg">
      <div class="container mx-auto">
        <div class="sm:flex mb-4">
          <div class="sm:w-1/2 sm:mt-0 mt-8 h-auto">
            <img src="/logo-footer.svg" alt="" class="mb-3" />
            <p class="font-light">
              Helps people execute their <br />bright ideas
            </p>
          </div>
          <div class="sm:w-1/4 h-auto">
            <div class="mb-8 font-bold">Explore</div>
            <ul class="font-light">
              <li class="mb-3">Our Services</li>
              <li class="mb-3">Equity System</li>
              <li class="mb-3">Refund</li>
              <li class="mb-3">Shareholder</li>
            </ul>
          </div>
          <div class="sm:w-1/4 h-auto">
            <div class="mb-8 font-bold">Investor</div>
            <ul class="font-light">
              <li class="mb-3">My Account</li>
              <li class="mb-3">Top Startups</li>
              <li class="mb-3">How-to Tutorials</li>
              <li class="mb-3">Withdrawl</li>
            </ul>
          </div>
          <div class="sm:w-1/4 h-auto">
            <div class="mb-8 font-bold">Office</div>
            <ul class="font-light">
              <li class="mb-3">+021 2208 1996</li>
              <li class="mb-3">KBP, Bandung</li>
              <li class="mb-3">No.12 (Backer)</li>
              <li class="mb-3">support@backer.id</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
    data() {
      return {
        mountains: []
      }
    },
  async fetch() {
      this.mountains = await fetch(
        'http://139.180.144.215:7070/api/v1/articles'
      ).then(res => res.json())
    }
}
</script>
