<script lang="ts">
  import Button from './Button.svelte';
</script>

<section class="relative px-spacing-24 py-spacing-40 md:py-32 border-b border-river-black overflow-hidden min-h-[80vh] flex items-center">
  <div class="absolute inset-0 parallax-bg opacity-20 filter grayscale"></div>
  <div class="absolute inset-0 bg-gradient-to-r from-river-white via-river-white/90 to-transparent"></div>
  
  <div class="max-w-7xl mx-auto grid-12 relative z-10 w-full">
    <div class="col-span-12 md:col-span-7 space-y-6">
      <h1 class="font-display text-display text-river-black uppercase leading-none tracking-tighter">
        VIVÍ LA <br/>LOCURA <br/><span class="text-river-red">MILLONARIA</span>
      </h1>
      <p class="font-subheading text-subheading text-on-surface max-w-xl bg-river-white/80 p-4 rounded-lg winamp-border backdrop-blur-sm shadow-sm">
        El destino digital definitivo para los hinchas de River Plate. Reacciones en vivo, análisis táctico, mucho humo y la mejor comunidad de la red.
      </p>
      <div class="flex gap-4 pt-4">
        <Button text="Ver en Vivo (Kick)" variant="primary" href="https://kick.com/spidercarp23" target="_blank">
          {#snippet icon()}
            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
          {/snippet}
        </Button>
        <Button text="Cronograma" variant="ghost">
          {#snippet icon()}
            <span class="material-symbols-outlined">calendar_today</span>
          {/snippet}
        </Button>
      </div>
    </div>

    <div class="col-span-12 md:col-span-5 relative mt-8 md:mt-0 flex justify-center items-center h-[400px] md:h-[500px]">
      <div class="flex gap-4 transform -skew-x-12">
        <div class="relative w-24 md:w-28 h-64 md:h-80 transform -translate-y-6 z-10 group/strip">
          <div class="absolute inset-0 border border-river-red translate-x-3 translate-y-3 pointer-events-none z-0 transition-transform duration-300 group-hover/strip:translate-x-1 group-hover/strip:translate-y-1"></div>
          
          <div class="w-full h-full overflow-hidden winamp-border bg-river-black shadow-2xl relative z-10">
            <div class="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-20 opacity-30"></div>
            
            <div class="absolute inset-0 bg-river-red/10 mix-blend-color opacity-0 group-hover/strip:opacity-100 transition-opacity duration-300 z-10"></div>
            
            <img alt="Secondary stream setup shot" class="w-full h-full object-cover transform skew-x-12 scale-150 grayscale group-hover/strip:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOOG18F8sha-JEY3JDsAipBLH6TNh0d_jnNO02rwX33exNhC8nrwz3n-txJx15NnHwS80wE4rjbGpwEQvrGtwsRwrL4nrzSRTLOLULulqVEFBjS-oZPnNlXmo4thkhborYN-arP5gG7rQzqfZMhc4tvPH9LrO7opcvIkO0S1iza60g9B4_hUU34lsjP-EHSGK1QMF_U4B-v4F2VVGFx16koJSoQmQDzOIu-woViiUvB_qLbLT8RPBA5ltOoCiDq9uNmEf3sktG8IkV"/>
          </div>
        </div>
        
        <div class="relative w-28 md:w-32 h-80 md:h-[24rem] z-20 group/strip">
          <div class="absolute inset-0 border border-river-black translate-x-3 translate-y-3 pointer-events-none z-0 transition-transform duration-300 group-hover/strip:translate-x-1 group-hover/strip:translate-y-1"></div>
          
          <div class="w-full h-full overflow-hidden winamp-border bg-river-black shadow-2xl relative z-10">
            <div class="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-20 opacity-30"></div>
            
            <div class="absolute inset-0 bg-river-red/5 mix-blend-color z-10"></div>
            
            <img alt="A dynamic, high-contrast shot of a professional streamer's studio setup" class="w-full h-full object-cover transform skew-x-12 scale-150" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_tk96w1vKOYOQGzwRZL9sJZX7nj136mYm8DHWZuTxkTuVhLBmIaKUgxL4s6MwdTTh3Io6NWUaiTVZwZZHO8d-kjBALuYH4BVlY1s1Pxt0CRYMBvu5ROqk1NvhsoDsJo2zoqoSO89u5zwGfxzfv--LEWlhlgHd9lq5nEYTaoQ7iBq1bv4TGQpplAXClOTtgYzTrFifI2kup60scEzceFO4DZCS3M5-5MN-H7II6zsfAXlrD_gz2hzoM7b04jRWGiwDV5wdB2KFS4Fl"/>
          </div>
        </div>
        
        <div class="relative w-24 md:w-28 h-64 md:h-80 transform translate-y-6 z-10 group/strip">
          <div class="absolute inset-0 border border-river-red translate-x-3 translate-y-3 pointer-events-none z-0 transition-transform duration-300 group-hover/strip:translate-x-1 group-hover/strip:translate-y-1"></div>
          
          <div class="w-full h-full overflow-hidden winamp-border bg-river-black shadow-2xl relative z-10">
            <div class="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-20 opacity-30"></div>
            
            <div class="absolute inset-0 bg-river-red/10 mix-blend-color opacity-0 group-hover/strip:opacity-100 transition-opacity duration-300 z-10"></div>
            
            <img alt="Tertiary stream setup shot" class="w-full h-full object-cover transform skew-x-12 scale-150 grayscale group-hover/strip:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNmGyUkwHB1_BqkAk10DEF6ntHXKC6u5GUBZVNAXtWYZa3tLt0zUyoqPO8poGJdypr4HcgTdRaFT04ceggoYbl3UHy8R593QNxEcABAfdH1VUAjRh74zK0CQPo7xBChYAuk5QfPJmNR_FTStvGvdhChL8FDnAiXLwVYIw8lXsxtNyjTDe9K9g6NhebtLmqQWJOypJ1EVqVHlOduqsL8AyruQSx3PSo0MA8BBbPxNn8CXr4SnFT7Ke_sd0b3nXX1ReystDWPZ8xyeh1"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
