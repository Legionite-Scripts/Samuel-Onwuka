<template>
  <a
    href="https://wa.me/+2349043683675"
    target="_blank"
    title="Contact me on Whatsapp"
  >
    <div class="whatsapp center">
      <img src="@/assets/icons/whatsapp.png" alt="Whatsapp" />
    </div>
  </a>

  <a
    href="https://x.com/TheLegionite"
    target="_blank"
    title="Let's connect on X!"
  >
    <div class="x left center">
      <img src="@/assets/icons/x-social.png" alt="Twitter(X)" />
    </div>
  </a>
</template>

<style scoped>
.whatsapp {
  position: fixed;
  right: 0;
  bottom: 2%;
  background-color: #00712d;
  height: fit-content !important;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  transition: width 0.5s ease, transform 0.5s ease, background-color 0.3s ease,
    background-color 0.3s ease;
  width: 8em; /* Initial width */

  @media (max-width: 768px) {
    display: none;
  }
}

.whatsapp img {
  height: 80px; /* Adjust height for smoother animation */
  width: auto !important;
  -webkit-user-drag: none;
  margin: 15px;
}

.whatsapp:hover {
  width: 10em;
  cursor: pointer;
  background-color: #159247;
}

.x {
  position: fixed;
  left: 0;
  bottom: 2%;
  background-color: #181c14;
  height: fit-content !important;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  transition: width 0.5s ease, transform 0.5s ease, background-color 0.3s ease,
    background-color 0.3s ease;
  width: 8em; /* Initial width */

  @media (max-width: 768px) {
    display: none;
  }
}

.x img {
  height: 80px; /* Adjust height for smoother animation */
  width: auto !important;
  -webkit-user-drag: none;
  margin: 15px;
}

.x:hover {
  width: 10em;
  cursor: pointer;
  /* background-color: #0cb44f; */
  border: 0.5px solid #fff;
  border-left: none;
}
</style>
