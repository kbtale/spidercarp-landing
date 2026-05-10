<script lang="ts">
  import { onMount } from "svelte";
  import Button from "./Button.svelte";

  let isMenuOpen = $state(false);
  let activeSection = $state("inicio");
  let hoveredSection = $state<string | null>(null);

  let sliderLeft = $state(0);
  let sliderWidth = $state(0);

  const menuItems = [
    { id: "inicio", label: "Inicio", href: "#inicio" },
    { id: "streams", label: "Streams", href: "#streams" },
    { id: "redes", label: "Redes Sociales", href: "#redes" },
    { id: "colaboraciones", label: "Colaboraciones", href: "#colaboraciones" },
    { id: "comunidad", label: "Comunidad", href: "#comunidad" },
  ];

  const sectionIdsToObserve = [
    "inicio",
    "streams",
    "redes",
    "colaboraciones",
    "comunidad",
  ];

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function scrollToSection(id: string, e: MouseEvent) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      activeSection = id;
      if (isMenuOpen) {
        isMenuOpen = false;
      }
    }
  }

  function updateSlider() {
    const targetId = hoveredSection ?? activeSection;
    const activeEl = document.getElementById(`nav-link-${targetId}`);
    if (activeEl) {
      sliderLeft = activeEl.offsetLeft;
      sliderWidth = activeEl.offsetWidth;
    }
  }

  $effect(() => {
    const _dummy1 = activeSection;
    const _dummy2 = hoveredSection;
    updateSlider();
  });

  onMount(() => {
    const handleScroll = () => {
      // If at the very bottom of the page, select the last section (Comunidad)
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (isAtBottom) {
        activeSection = sectionIdsToObserve[sectionIdsToObserve.length - 1];
        return;
      }

      const headerOffset = 150; // offset of navbar
      let activeId = "inicio";
      
      for (const id of sectionIdsToObserve) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerOffset) {
            activeId = id;
          }
        }
      }
      activeSection = activeId;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateSlider);
    
    // Initial scroll sync
    handleScroll();
    setTimeout(updateSlider, 50);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateSlider);
    };
  });
</script>

<nav
  class="fixed top-0 w-full z-50 bg-river-white border-b-[3px] border-river-black px-spacing-24 py-spacing-16"
>
  <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
    <div class="flex items-center flex-shrink-0">
      <a
        class="flex items-center gap-2 focus:ring-2 focus:ring-river-red outline-none"
        href="/"
        onclick={(e) => scrollToSection("inicio", e)}
      >
        <img
          src="/Spidercarp-logo.webp"
          alt="SPIDERCARP Logo"
          class="h-8 w-auto object-contain"
        />
        <span
          class="text-heading font-heading font-bold text-river-red uppercase tracking-tighter"
          >SPIDERCARP</span
        >
      </a>
    </div>

    <div
      class="hidden lg:flex items-center justify-center gap-6 xl:gap-8 relative py-1 flex-grow"
    >
      {#each menuItems as item}
        <a
          id="nav-link-{item.id}"
          class="text-sm lg:text-base font-heading font-semibold uppercase tracking-wider focus:ring-2 focus:ring-river-red outline-none transition-colors duration-300 pb-2 {(hoveredSection ??
            activeSection) === item.id
            ? 'text-river-red font-bold'
            : 'text-on-surface font-medium hover:text-river-red'} whitespace-nowrap"
          href={item.href}
          onclick={(e) => scrollToSection(item.id, e)}
          onmouseenter={() => (hoveredSection = item.id)}
          onmouseleave={() => (hoveredSection = null)}
        >
          {item.label}
        </a>
      {/each}

      <div
        class="absolute bottom-0 h-[4px] bg-river-red transition-all duration-300 ease-out rounded-full"
        style="left: {sliderLeft}px; width: {sliderWidth}px;"
      ></div>
    </div>

    <div class="hidden lg:flex items-center gap-6 flex-shrink-0">
      <div class="flex items-center gap-4">
        <a
          href="https://kick.com/spidercarp23"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Kick"
          class="text-river-black hover:text-river-red transition-colors duration-200"
        >
          <svg
            viewBox="0 0 512 512"
            class="w-5 h-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
          >
            <path
              d="M37 .036h164.448v113.621h54.71v-56.82h54.731V.036h164.448v170.777h-54.73v56.82h-54.711v56.8h54.71v56.82h54.73V512.03H310.89v-56.82h-54.73v-56.8h-54.711v113.62H37V.036z"
              fill="currentColor"
            />
          </svg>
        </a>

        <a
          href="https://x.com/SpiderCarp23"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          class="text-river-black hover:text-river-red transition-colors duration-200"
        >
          <svg
            viewBox="0 0 512 462.799"
            class="w-5 h-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path
              fill-rule="nonzero"
              d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
              fill="currentColor"
            />
          </svg>
        </a>

        <a
          href="https://instagram.com/SpiderCarp23"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          class="text-river-black hover:text-river-red transition-colors duration-200"
        >
          <svg
            viewBox="0 0 512 512"
            class="w-5 h-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path
              fill-rule="nonzero"
              d="M170.663 256.157c-.083-47.121 38.055-85.4 85.167-85.482 47.121-.092 85.407 38.029 85.499 85.159.091 47.13-38.047 85.4-85.176 85.492-47.112.09-85.399-38.039-85.49-85.169zm-46.108.092c.141 72.602 59.106 131.327 131.69 131.185 72.592-.14 131.35-59.089 131.209-131.691-.141-72.577-59.114-131.336-131.715-131.194-72.585.141-131.325 59.114-131.184 131.7zm237.104-137.092c.033 16.954 13.817 30.682 30.772 30.649 16.961-.034 30.689-13.811 30.664-30.765-.033-16.954-13.818-30.69-30.78-30.656-16.962.033-30.689 13.818-30.656 30.772zm-208.696 345.4c-24.958-1.086-38.511-5.234-47.543-8.709-11.961-4.628-20.496-10.177-29.479-19.093-8.966-8.951-14.532-17.461-19.202-29.397-3.508-9.033-7.73-22.569-8.9-47.527-1.269-26.983-1.559-35.078-1.683-103.433-.133-68.338.116-76.434 1.294-103.441 1.069-24.941 5.242-38.512 8.709-47.536 4.628-11.977 10.161-20.496 19.094-29.478 8.949-8.983 17.459-14.532 29.403-19.202 9.025-3.526 22.561-7.715 47.511-8.9 26.998-1.278 35.085-1.551 103.423-1.684 68.353-.133 76.448.108 103.456 1.294 24.94 1.086 38.51 5.217 47.527 8.709 11.968 4.628 20.503 10.145 29.478 19.094 8.974 8.95 14.54 17.443 19.21 29.413 3.524 8.999 7.714 22.552 8.892 47.494 1.285 26.998 1.576 35.094 1.7 103.432.132 68.355-.117 76.451-1.302 103.442-1.087 24.957-5.226 38.52-8.709 47.56-4.629 11.953-10.161 20.488-19.103 29.471-8.941 8.949-17.451 14.531-29.403 19.201-9.009 3.517-22.561 7.714-47.494 8.9-26.998 1.269-35.086 1.56-103.448 1.684-68.338.133-76.424-.124-103.431-1.294zM149.977 1.773c-27.239 1.286-45.843 5.648-62.101 12.019-16.829 6.561-31.095 15.353-45.286 29.603C28.381 57.653 19.655 71.944 13.144 88.79c-6.303 16.299-10.575 34.912-11.778 62.168C.172 178.264-.102 186.973.031 256.489c.133 69.508.439 78.234 1.741 105.548 1.302 27.231 5.649 45.827 12.019 62.092 6.569 16.83 15.353 31.089 29.611 45.289 14.25 14.2 28.55 22.918 45.404 29.438 16.282 6.294 34.902 10.583 62.15 11.777 27.305 1.203 36.022 1.468 105.521 1.336 69.532-.133 78.25-.44 105.555-1.734 27.239-1.302 45.826-5.664 62.1-12.019 16.829-6.585 31.095-15.353 45.288-29.611 14.191-14.251 22.917-28.55 29.428-45.404 6.304-16.282 10.592-34.904 11.777-62.134 1.195-27.323 1.478-36.049 1.344-105.557-.133-69.516-.447-78.225-1.741-105.522-1.294-27.256-5.657-45.844-12.019-62.118-6.577-16.829-15.352-31.08-29.602-45.288-14.25-14.192-28.55-22.935-45.404-29.429-16.29-6.304-34.903-10.6-62.15-11.778C333.747.164 325.03-.101 255.506.031c-69.507.133-78.224.431-105.529 1.742z"
              fill="currentColor"
            />
          </svg>
        </a>

        <a
          href="https://tiktok.com/@SpiderCarp23"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          class="text-river-black hover:text-river-red transition-colors duration-200"
        >
          <svg
            viewBox="0 0 455 512.098"
            class="w-5 h-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path
              fill-rule="nonzero"
              d="M321.331.011h-81.882v347.887c0 45.59-32.751 74.918-72.582 74.918-39.832 0-75.238-29.327-75.238-74.918 0-52.673 41.165-80.485 96.044-74.727v-88.153c-7.966-1.333-15.932-1.77-22.576-1.77C75.249 183.248 0 255.393 0 344.794c0 94.722 74.353 167.304 165.534 167.304 80.112 0 165.097-58.868 165.097-169.96V161.109c35.406 35.406 78.341 46.476 124.369 46.476V126.14C398.35 122.151 335.494 84.975 321.331 0v.011z"
              fill="currentColor"
            />
          </svg>
        </a>

        <a
          href="https://www.youtube.com/playlist?list=PLLMvtaKe9aBPrDWuzzAl6d4iTDwgRzfjS"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          class="text-river-black hover:text-river-red transition-colors duration-200"
        >
          <svg
            viewBox="0 0 640 640"
            class="w-5 h-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path
              d="M633.468 192.038s-6.248-44.115-25.477-63.485c-24.366-25.477-51.65-25.642-64.123-27.118-89.493-6.52-223.904-6.52-223.904-6.52h-.236s-134.352 0-223.893 6.52c-12.52 1.523-39.768 1.63-64.123 27.118-19.24 19.37-25.358 63.485-25.358 63.485S-.012 243.806-.012 295.681v48.509c0 51.768 6.366 103.643 6.366 103.643s6.248 44.114 25.358 63.52c24.355 25.477 56.363 24.65 70.655 27.367 51.237 4.89 217.644 6.366 217.644 6.366s134.529-.237 224.022-6.638c12.52-1.477 39.756-1.63 64.123-27.119 19.24-19.37 25.476-63.532 25.476-63.532S640 396.03 640 344.154v-48.508c-.13-51.769-6.497-103.643-6.497-103.643l-.035.035zm-379.8 211.007V223.173L426.56 313.41l-172.892 89.635z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>

      <Button
        text="Unite al Stream"
        variant="primary"
        href="https://kick.com/spidercarp23"
        target="_blank"
      >
        {#snippet icon()}
          <span
            class="material-symbols-outlined"
            style="font-variation-settings: 'FILL' 1;">play_arrow</span
          >
        {/snippet}
      </Button>
    </div>

    <button
      class="lg:hidden p-2"
      aria-label="Toggle menu"
      aria-expanded={isMenuOpen}
      onclick={toggleMenu}
    >
      <span class="material-symbols-outlined"
        >{isMenuOpen ? "close" : "menu"}</span
      >
    </button>
  </div>

  {#if isMenuOpen}
    <div
      class="lg:hidden absolute top-full left-0 w-full bg-river-white border-b-[3px] border-river-black py-6 px-spacing-24 flex flex-col gap-4 shadow-lg"
    >
      {#each menuItems as item}
        <a
          class="font-heading text-xl transition-colors duration-200 {activeSection ===
          item.id
            ? 'text-river-red font-bold'
            : 'text-on-surface font-medium hover:text-river-red'}"
          href={item.href}
          onclick={(e) => scrollToSection(item.id, e)}
        >
          {item.label}
        </a>
      {/each}

      <div
        class="flex items-center gap-6 py-4 border-t border-b border-river-black/10"
      >
        <a
          href="https://kick.com/spidercarp23"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Kick"
          class="text-river-black hover:text-river-red transition-colors duration-200"
        >
          <svg
            viewBox="0 0 512 512"
            class="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
          >
            <path
              d="M37 .036h164.448v113.621h54.71v-56.82h54.731V.036h164.448v170.777h-54.73v56.82h-54.711v56.8h54.71v56.82h54.73V512.03H310.89v-56.82h-54.73v-56.8h-54.711v113.62H37V.036z"
              fill="currentColor"
            />
          </svg>
        </a>

        <a
          href="https://x.com/SpiderCarp23"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          class="text-river-black hover:text-river-red transition-colors duration-200"
        >
          <svg
            viewBox="0 0 512 462.799"
            class="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path
              fill-rule="nonzero"
              d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
              fill="currentColor"
            />
          </svg>
        </a>

        <a
          href="https://instagram.com/SpiderCarp23"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          class="text-river-black hover:text-river-red transition-colors duration-200"
        >
          <svg
            viewBox="0 0 512 512"
            class="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path
              fill-rule="nonzero"
              d="M170.663 256.157c-.083-47.121 38.055-85.4 85.167-85.482 47.121-.092 85.407 38.029 85.499 85.159.091 47.13-38.047 85.4-85.176 85.492-47.112.09-85.399-38.039-85.49-85.169zm-46.108.092c.141 72.602 59.106 131.327 131.69 131.185 72.592-.14 131.35-59.089 131.209-131.691-.141-72.577-59.114-131.336-131.715-131.194-72.585.141-131.325 59.114-131.184 131.7zm237.104-137.092c.033 16.954 13.817 30.682 30.772 30.649 16.961-.034 30.689-13.811 30.664-30.765-.033-16.954-13.818-30.69-30.78-30.656-16.962.033-30.689 13.818-30.656 30.772zm-208.696 345.4c-24.958-1.086-38.511-5.234-47.543-8.709-11.961-4.628-20.496-10.177-29.479-19.093-8.966-8.951-14.532-17.461-19.202-29.397-3.508-9.033-7.73-22.569-8.9-47.527-1.269-26.983-1.559-35.078-1.683-103.433-.133-68.338.116-76.434 1.294-103.441 1.069-24.941 5.242-38.512 8.709-47.536 4.628-11.977 10.161-20.496 19.094-29.478 8.949-8.983 17.459-14.532 29.403-19.202 9.025-3.526 22.561-7.715 47.511-8.9 26.998-1.278 35.085-1.551 103.423-1.684 68.353-.133 76.448.108 103.456 1.294 24.94 1.086 38.51 5.217 47.527 8.709 11.968 4.628 20.503 10.145 29.478 19.094 8.974 8.95 14.54 17.443 19.21 29.413 3.524 8.999 7.714 22.552 8.892 47.494 1.285 26.998 1.576 35.094 1.7 103.432.132 68.355-.117 76.451-1.302 103.442-1.087 24.957-5.226 38.52-8.709 47.56-4.629 11.953-10.161 20.488-19.103 29.471-8.941 8.949-17.451 14.531-29.403 19.201-9.009 3.517-22.561 7.714-47.494 8.9-26.998 1.269-35.086 1.56-103.448 1.684-68.338.133-76.424-.124-103.431-1.294zM149.977 1.773c-27.239 1.286-45.843 5.648-62.101 12.019-16.829 6.561-31.095 15.353-45.286 29.603C28.381 57.653 19.655 71.944 13.144 88.79c-6.303 16.299-10.575 34.912-11.778 62.168C.172 178.264-.102 186.973.031 256.489c.133 69.508.439 78.234 1.741 105.548 1.302 27.231 5.649 45.827 12.019 62.092 6.569 16.83 15.353 31.089 29.611 45.289 14.25 14.2 28.55 22.918 45.404 29.438 16.282 6.294 34.902 10.583 62.15 11.777 27.305 1.203 36.022 1.468 105.521 1.336 69.532-.133 78.25-.44 105.555-1.734 27.239-1.302 45.826-5.664 62.1-12.019 16.829-6.585 31.095-15.353 45.288-29.611 14.191-14.251 22.917-28.55 29.428-45.404 6.304-16.282 10.592-34.904 11.777-62.134 1.195-27.323 1.478-36.049 1.344-105.557-.133-69.516-.447-78.225-1.741-105.522-1.294-27.256-5.657-45.844-12.019-62.118-6.577-16.829-15.352-31.08-29.602-45.288-14.25-14.192-28.55-22.935-45.404-29.429-16.29-6.304-34.903-10.6-62.15-11.778C333.747.164 325.03-.101 255.506.031c-69.507.133-78.224.431-105.529 1.742z"
              fill="currentColor"
            />
          </svg>
        </a>

        <a
          href="https://tiktok.com/@SpiderCarp23"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          class="text-river-black hover:text-river-red transition-colors duration-200"
        >
          <svg
            viewBox="0 0 455 512.098"
            class="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path
              fill-rule="nonzero"
              d="M321.331.011h-81.882v347.887c0 45.59-32.751 74.918-72.582 74.918-39.832 0-75.238-29.327-75.238-74.918 0-52.673 41.165-80.485 96.044-74.727v-88.153c-7.966-1.333-15.932-1.77-22.576-1.77C75.249 183.248 0 255.393 0 344.794c0 94.722 74.353 167.304 165.534 167.304 80.112 0 165.097-58.868 165.097-169.96V161.109c35.406 35.406 78.341 46.476 124.369 46.476V126.14C398.35 122.151 335.494 84.975 321.331 0v.011z"
              fill="currentColor"
            />
          </svg>
        </a>

        <a
          href="https://www.youtube.com/playlist?list=PLLMvtaKe9aBPrDWuzzAl6d4iTDwgRzfjS"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          class="text-river-black hover:text-river-red transition-colors duration-200"
        >
          <svg
            viewBox="0 0 640 640"
            class="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path
              d="M633.468 192.038s-6.248-44.115-25.477-63.485c-24.366-25.477-51.65-25.642-64.123-27.118-89.493-6.52-223.904-6.52-223.904-6.52h-.236s-134.352 0-223.893 6.52c-12.52 1.523-39.768 1.63-64.123 27.118-19.24 19.37-25.358 63.485-25.358 63.485S-.012 243.806-.012 295.681v48.509c0 51.768 6.366 103.643 6.366 103.643s6.248 44.114 25.358 63.52c24.355 25.477 56.363 24.65 70.655 27.367 51.237 4.89 217.644 6.366 217.644 6.366s134.529-.237 224.022-6.638c12.52-1.477 39.756-1.63 64.123-27.119 19.24-19.37 25.476-63.532 25.476-63.532S640 396.03 640 344.154v-48.508c-.13-51.769-6.497-103.643-6.497-103.643l-.035.035zm-379.8 211.007V223.173L426.56 313.41l-172.892 89.635z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>

      <Button
        text="Unite al Stream"
        variant="primary"
        href="https://kick.com/spidercarp23"
        target="_blank"
        onclick={toggleMenu}
      >
        {#snippet icon()}
          <span
            class="material-symbols-outlined"
            style="font-variation-settings: 'FILL' 1;">play_arrow</span
          >
        {/snippet}
      </Button>
    </div>
  {/if}
</nav>
