<script lang="ts" module>
	import BookOpen from 'lucide-svelte/icons/book-open';
	import Home from 'lucide-svelte/icons/home';
	import Gamepad from 'lucide-svelte/icons/gamepad-2';
	import Privacy from 'lucide-svelte/icons/shield';

	const data = {
		navMain: [
			{
				title: 'Home',
				url: '/',
				icon: Home
			},
			{
				title: 'Games',
				url: '/games',
				icon: Gamepad,
				items: [
					{
						title: 'Expland',
						url: '/games/expland'
					}
				]
			},
			{
				title: 'About Us',
				url: '/about',
				icon: BookOpen
			},
			{
				title: 'Privacy Policy',
				url: '/privacy',
				icon: Privacy
			}
		]
	};
</script>

<script lang="ts">
	import NavMain from '$lib/components/nav-main.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import type { ComponentProps } from 'svelte';
	import { Button } from '$lib/components/ui/button/index.js';

	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';

	import Mail from 'lucide-svelte/icons/mail';

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root bind:ref variant="floating" {...restProps}>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton size="lg" class="h-fit">
					{#snippet child({ props })}
						<a href="/" aria-label="Logo" {...props}>
							<enhanced:img src="$lib/images/NoeCoLogoTransparent-Cropped.png" alt="" />
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		<NavMain items={data.navMain} />
	</Sidebar.Content>
	<Sidebar.Footer>
		<div class="flex flex-row justify-center gap-1">
			<Button size="icon" variant="ghost" href="https://github.com/NoeCoOfficial" target="_blank">
				<Fa icon={faGithub} /></Button
			>
			<Button size="icon" variant="ghost" href="mailto:noeco.official@gmail.com">
				<Mail></Mail>
			</Button>
		</div>
		<Sidebar.Group>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					<Sidebar.MenuItem>
						<Sidebar.MenuButton size="lg">
							<a href="https://github.com/Inglan" target="_blank">
								<span>Made in Svelte by @Inglan</span>
							</a>
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Footer>
</Sidebar.Root>
