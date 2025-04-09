<script>

	import {HeroSection} from "$components";
	import AboutMeSection from "$components/Sections/AboutMeSection.svelte";

	const {data} = $props();
	let {workExperience} = data;

</script>

<HeroSection />
<AboutMeSection {workExperience} />
