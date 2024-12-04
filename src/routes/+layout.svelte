<script lang="ts">
	import '../app.css';
	import '@fontsource/schibsted-grotesk';
	let { children } = $props();
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
</script>

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		{@render children()}
	</Sidebar.Inset>
</Sidebar.Provider>

<style>
	* {
		font-family: 'Schibsted Grotesk', sans-serif;
	}
</style>
