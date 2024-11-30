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
		<div class="maincontent">
			{@render children()}
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>

<style>
	* {
		font-family: 'Schibsted Grotesk', sans-serif;
	}

	body {
		overflow: hidden;
	}

	.maincontent {
		width: 100%;
		flex-shrink: 0;
		overflow: auto;
		border-radius: calc(var(--radius) + 4px);
		height: calc(100vh - 16px);
	}
	@media (max-width: 767px) {
		.maincontent {
			height: 100vh !important;
		}
	}
</style>
