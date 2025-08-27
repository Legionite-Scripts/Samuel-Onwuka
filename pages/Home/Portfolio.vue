<template>
  <div class="portfolio">
    <section>
      <div class="mt-8 mb-8">
        <div>
          <h3 class="neon-blue">Experience</h3>
          <h1 class="mb-5">Where I've Worked?</h1>
        </div>

        <div class="portfolio-grid">
          <div
            class="portfolio-item glass glow"
            v-for="(item, index) in portfolio"
            :key="index"
          >
            <a target="blank" :href="item.link">
              <!-- The container for image and text -->
              <div>
                <img loading="lazy" :src="item.image" />
                <div class="details-container">
                  <div class="details">
                    <h3 class="mb-1">{{ item.platform }}</h3>
                    <p class="">{{ item.position }}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { portfolio } from "@/data/portfolio.js";

export default {
  layout: "web",
  data() {
    return {
      portfolio: portfolio,
    };
  },
};
</script>

<style scoped>
.portfolio {
  padding-bottom: 2em;
}
.icon {
  font-size: 25px;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  width: 100%;
}

.portfolio-item {
  position: relative;
  border-radius: var(--input-border-radius) !important;
  overflow: hidden; /* Ensures nothing spills out of the rounded corners */
  display: flex; /* Make the card a flex container */
  flex-direction: column; /* Stack children vertically */
}

.portfolio-item .details {
  padding: 30px;
  width: 100%; /* Ensure details takes full width inside the container */
}

/* --- CORRECTED IMAGE STYLES --- */
.portfolio-item img {
  display: block; /* Removes any extra space below the image */
  width: 100%; /* Makes the image fill the container's width */
  height: auto; /* Maintains the image's aspect ratio */
  max-width: 100%; /* Ensures image doesn't overflow */
  border-radius: var(--input-border-radius) var(--input-border-radius) 0 0;
}

/* --- NEW STYLES FOR ALIGNMENT --- */
.portfolio-item a > div {
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Make the container fill the link */
}

.details-container {
  flex-grow: 1; /* Allow this container to grow, pushing details to the bottom */
  display: flex;
  align-items: flex-end; /* Align the .details div to the bottom */
}


@media (max-width: 768px) {
  .portfolio-item {
    flex-basis: 150px;
    border-radius: var(--border-radius);
  }
}

a {
  font-size: 12px;
  color: rgb(172, 172, 172);
  text-decoration: none; /* Good practice for links wrapping content blocks */
  display: flex; /* Make the link a flex container */
  flex-direction: column; /* Stack its children */
  flex-grow: 1; /* Make the link fill the card's height */
}

.icons {
  width: 50px;
  height: 50px;
  font-size: 20px !important;
  border-radius: 50%;
  border: 2px dotted rgba(255, 255, 255, 0.097);
  padding: 10px;
}
</style>
