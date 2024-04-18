<template>
  <div class="socials">
    <p>Let's connect</p>
    <a
      href="https://www.linkedin.com/in/samuel-dave-825205263/"
      target="_blank"
    >
      <img src="@/assets/icons/linkedin.svg" />
    </a>
    <a
      href="https://www.youtube.com/channel/UCWqfqkZvUv6GCBJwxyO1ghQ"
      target="_blank"
    >
      <img src="@/assets/icons/youtube.svg" />
    </a>
    <a href="https://twitter.com/TheLegionite" target="_blank">
      <img src="@/assets/icons/twitter.svg" />
    </a>
    <a href="https://www.instagram.com/solomonmarvel97" target="_blank">
      <img src="@/assets/icons/instagram.svg" />
    </a>
  </div>
</template>

<style scoped>
.socials {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  row-gap: 5px;
  place-items: center;
  align-items: flex-start;
}

.socials img {
  width: 20px;
  height: 20px;
  object-fit: contain;
  /* color: rgb(88, 88, 252) */
}
</style>
