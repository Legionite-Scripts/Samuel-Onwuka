// plugins/gsap.client.js
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger)
  return {
    provide: {
      gsap,
    },
  };
});
