<template>
  <div>
    <section class="hero">
      <div>
        <div class="mb-4">
          <p class="neon-blue">From Concept to Code: Your Vision. Deployed</p>
        </div>
        <h1 class="mb-3 mt-5 gradient-text" ref="scrambleText"></h1>
        <p>
          Full-Stack Web Developer | Crafting Innovative Solutions with Code |
          AI & Cloud Technology Enthusiast | Web Developer at The Boltcliq
          Company
        </p>

        <div class="button-flex cta mt-4">
          <a href="/consulting">
            Consulting
            <img src="@/assets/icons/link.svg" alt="" />
          </a>

          <a href="https://wa.me/+2349043683675" target="_blank">
            Connect
            <img src="@/assets/icons/link.svg" alt="" />
          </a>
        </div>
      </div>

      <div class="spin">
        <img class="avatar-wrapper" src="@/assets/images/rotate.svg" />
        <img
          loading="lazy"
          class="avatar"
          src="@/assets/images/avatar/me.webp"
        />
      </div>
    </section>

    <div class="mb-4 socials">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/samuel-dave-825205263/"
      >
        <img src="@/assets/icons/social/linkedin.svg" />
        Linkedin
      </a>
      <a target="_blank" href="https://twitter.com/TheLegionite">
        <img src="@/assets/icons/social/twitter.svg" />
        Twitter
      </a>
      <a target="_blank" href="https://github.com/legionite-scripts">
        <img src="@/assets/icons/social/github.svg" />
        Github
      </a>
      <a target="_blank" href="https://www.instagram.com/theelegionite/">
        <img src="@/assets/icons/instagram.svg" />
        Instagram
      </a>
    </div>
    <div class="center">
      <iframe
        class="mb-3"
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/ECnqartfjIM"
        title="AWS vs Azure vs GCP | Which one should you learn?"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    <socialIcons />
  </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';

const scrambleText = ref(null);

onMounted(() => {
  if (process.client) {
    const gsap = useNuxtApp().$gsap;

    gsap.to(scrambleText.value, {
      duration: 2,
      text: {
        value: "Samuel Onwuka",
        scramble: true,
      },
      repeat: 0, 
      repeatDelay: 1,
      ease: "none",
    });
  }
});
</script>

<style scoped>
.custom-twitch-iframe {
  width: 100%;
  max-width: 100%;
  height: 500px !important;
  margin: 0 auto;
  margin-bottom: 3em;
}

.hero {
  z-index: 100;
  justify-content: space-between;
  display: flex;
  place-items: center;
  gap: 20px;
  height: 100%;
  padding: 5em 0;
  padding-top: 5em;
}

.hero > div {
  display: grid;
  place-items: center;
}

.cta a {
  font-size: 20px;
  color: var(--primary);
  display: flex;
  gap: 5px;
  place-items: center;
  border-radius: var(--border-radius);
  padding: 15px;
  background-color: #141414;
}

.cta a:hover {
  background-color: #272727;
}

.cta img {
  height: 25px;
  width: 25px;
}

h1 {
  color: #fefefe;
  line-height: 0.8;
  font-weight: 900;
  letter-spacing: -2px;
  font-size: 180px;
  line-height: 0.9;
  text-align: center;
}

@keyframes textShine {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 100% 50%;
  }
}

.hero p {
  font-size: 16px;
  line-height: 1.6;
  text-align: center;
}

.socials {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
}

.socials img {
  height: 20px;
  width: 20px;
  object-fit: cover;
}

.socials a {
  font-size: 16px;
  display: flex;
  gap: 5px;
  place-items: center;
  padding: 5px 8px;
  border-radius: var(--border-radius);
}

.socials a:hover {
  background-color: rgba(255, 255, 255, 0.109);
}

.icons {
  width: 12px;
  height: 12px;
}

.hero .cta_blog {
  height: 65px;
  border-radius: var(--border-radius);
  background-image: linear-gradient(117deg, #232222 8%, #323232 93%);
  color: white;
  display: grid;
}

.hero .cta_github {
  height: 65px;
  display: grid;
  opacity: 0.73;
  border-radius: var(--border-radius);
  background-color: #f0f0f0;
}

.gradient-text {
  color: transparent;
  position: relative;
  display: inline-block;
  font-size: 180px;
  line-height: 0.9;
  font-weight: 900;
  letter-spacing: -2px;
}

.gradient-text {
  content: "";
  z-index: -1;
  background: linear-gradient(
    45deg,
    #ff5252,
    #ff8a65,
    #ffd476,
    #acff78,
    #78ffd6,
    #76acff,
    #ff5252
  );
  background-size: 200% 200%;
  animation: textFlow 5s ease infinite;

  -webkit-background-clip: text;
  background-clip: text;
}

@keyframes textFlow {
  0% {
    background-position: 0 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0 50%;
  }
}

.multipreneur {
  letter-spacing: 20px;
}

@media (max-width: 1000px) {
  .custom-twitch-iframe {
    width: 100%;
    height: 250px !important;
  }

  .hero {
    padding-top: 2em;
    flex-direction: column-reverse !important;
    place-items: center;
  }

  h1 {
    width: 100%;
    font-size: 48px !important;
    letter-spacing: -1px;
  }

  h3 {
    width: 100%;
    line-height: 1.2;
    font-size: 20px;
  }

  .hero p {
    width: 100%;
  }

  .hero .avatar {
    width: 100%;
    height: auto;
  }

  .multipreneur {
    letter-spacing: 5px;
  }
  .center > iframe {
    width: auto !important;
    height: auto !important;
  }
}

.bringtofront {
  position: absolute;
  z-index: 99;
  top: 50px;
  left: 50px;
}

.bringtofront {
  color: white;
}
</style>
