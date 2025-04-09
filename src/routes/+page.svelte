<script>

	import {HeroSection} from "$components";
	import AboutMeSection from "$components/Sections/AboutMeSection.svelte";

	const {data} = $props();
	$inspect(data);

</script>

<HeroSection />
<AboutMeSection />
