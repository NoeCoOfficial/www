<script lang="ts">
	import * as Collapsible from '$lib/components/ui/collapsible/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import { page } from '$app/stores';
	import { useSidebar } from '$lib/components/ui/sidebar/index.js';
	const sidebar = useSidebar();

	let {
		items
	}: {
		items: {
			title: string;
			url: string;
			// This should be `Component` after lucide-svelte updates types
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			icon: any;
			isActive?: boolean;
			items?: {
				title: string;
				url: string;
			}[];
		}[];
	} = $props();
</script>

<Sidebar.Group>
	<Sidebar.Menu>
		{#each items as mainItem (mainItem.title)}
			<Collapsible.Root open={$page.url.pathname.startsWith(mainItem.url)}>
				{#snippet child({ props })}
					<Sidebar.MenuItem class="test" {...props}>
						<Sidebar.MenuButton
							size="lg"
							isActive={$page.url.pathname == mainItem.url}
							onclick={() => {
								if (sidebar.isMobile) {
									sidebar.toggle();
								}
							}}
						>
							{#snippet tooltipContent()}
								{mainItem.title}
							{/snippet}
							{#snippet child({ props })}
								<a href={mainItem.url} {...props}>
									<mainItem.icon />
									<span>{mainItem.title}</span>
								</a>
							{/snippet}
						</Sidebar.MenuButton>
						{#if mainItem.items?.length}
							<Collapsible.Trigger>
								{#snippet child({ props })}
									<Sidebar.MenuAction {...props} class="h-7 w-7 data-[state=open]:rotate-90">
										<ChevronRight />
										<span class="sr-only">Toggle</span>
									</Sidebar.MenuAction>
								{/snippet}
							</Collapsible.Trigger>
							<Collapsible.Content>
								<Sidebar.MenuSub>
									{#each mainItem.items as subItem (subItem.title)}
										<Sidebar.MenuSubItem>
											<Sidebar.MenuSubButton
												onclick={() => {
													if (sidebar.isMobile) {
														sidebar.toggle();
													}
												}}
												href={subItem.url}
												isActive={$page.url.pathname == subItem.url}
											>
												<span>{subItem.title}</span>
											</Sidebar.MenuSubButton>
										</Sidebar.MenuSubItem>
									{/each}
								</Sidebar.MenuSub>
							</Collapsible.Content>
						{/if}
					</Sidebar.MenuItem>
				{/snippet}
			</Collapsible.Root>
		{/each}
	</Sidebar.Menu>
</Sidebar.Group>
