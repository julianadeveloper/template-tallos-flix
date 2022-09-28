<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="620"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <!-- Text slides with image -->
            <b-carousel-slide
              img-src="https://www.cinepolis.com.br/fotos/destaque_home/1015.jpg"
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide
              img-src="https://www.cinepolis.com.br/fotos/destaque_home/1016.jpg"
            >
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide
              img-src="https://www.cinepolis.com.br/fotos/destaque_home/1019.png"
            ></b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <template #img>
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="620"
                  src="https://www.cinepolis.com.br/fotos/destaque_home/1018.jpg"
                  alt="image slot"
                />
              </template>
            </b-carousel-slide>

            <!-- Slide with blank fluid image to maintain slide aspect ratio -->
            <!-- <b-carousel-slide
              caption="Blank Image"
              img-blank
              img-alt="Blank image"
            >
            </b-carousel-slide> -->
          </b-carousel>

          <p class="mt-4">
            Slide #: {{ slide }}<br />
            <!-- Sliding: {{ sliding }} -->
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>
