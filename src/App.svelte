<script lang="ts">
  import Navbar from './lib/components/Navbar.svelte';
  import Hero from './lib/components/Hero.svelte';
  import Clips from './lib/components/Clips.svelte';
  import Tweets from './lib/components/Tweets.svelte';
  import Colabs from './lib/components/Colabs.svelte';
  import Comunidad from './lib/components/Comunidad.svelte';
  import Footer from './lib/components/Footer.svelte';
</script>

<div class="font-body antialiased min-h-screen flex flex-col pt-[80px]">
  <Navbar />
  
  <main class="flex-grow">
    <Hero />
    <Clips />
    <Tweets />
    <Colabs />
    <Comunidad />
  </main>
  
  <Footer />
</div>
