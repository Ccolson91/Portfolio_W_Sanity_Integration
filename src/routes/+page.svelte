<script>

	import {AboutMeSection, HeroSection, MyWorkSection, SkillsSection} from "$components";
	import ContactSection from "$components/Sections/ContactSection.svelte";

	
	

	const {data} = $props();
	let {workExperience, projects, skills} = data;

</script>

<HeroSection />
<AboutMeSection {workExperience} />
<MyWorkSection {projects} />
<SkillsSection {skills} />
<ContactSection />
