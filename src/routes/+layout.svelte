<script lang="ts">
	import Footer from '$components/Footer.svelte';
import Header from '$components/Header.svelte';
    import '../app.css';

    let {children} = $props();
</script>

<Header />

{@render children()}

<Footer />