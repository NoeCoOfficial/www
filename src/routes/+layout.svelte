<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
</script>

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<div class="w-full flex-shrink-0 overflow-auto" style="height: calc(100vh - 20px)">
			{@render children()}
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
