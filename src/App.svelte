<script lang="ts">
  import Navbar from "./lib/components/Navbar.svelte";
  import Hero from "./lib/components/Hero.svelte";
  import Clips from "./lib/components/Clips.svelte";
  import TikToks from "./lib/components/TikToks.svelte";
  import Colabs from "./lib/components/Colabs.svelte";
  import Comunidad from "./lib/components/Comunidad.svelte";
  import Footer from "./lib/components/Footer.svelte";
</script>

<a href="#contenido-principal" class="skip-link">
  Saltar al contenido principal
</a>

<div class="font-body antialiased min-h-screen flex flex-col pt-[76px]">
  <Navbar />

  <main id="contenido-principal" class="flex-grow overflow-x-clip">
    <Hero />
    <Clips />
    <TikToks />
    <Colabs />
    <Comunidad />
  </main>

  <Footer />
</div>
