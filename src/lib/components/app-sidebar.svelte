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
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import CreditAndStack from '$lib/components/credit-and-stack.svelte';
	import * as Dialog from '$lib/components/ui/dialog/index.js';

	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faDiscord } from '@fortawesome/free-brands-svg-icons';
	import { faYoutube } from '@fortawesome/free-brands-svg-icons';
	import Mail from 'lucide-svelte/icons/mail';

	let creditDialogOpen = $state(false);

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
			<Button size="icon" variant="ghost" href="https://discord.gg/QNgcKCAJn3" target="_blank">
				<Fa icon={faDiscord} /></Button
			>
			<Button
				size="icon"
				variant="ghost"
				href="https://www.youtube.com/@noeco.official"
				target="_blank"
			>
				<Fa icon={faYoutube} /></Button
			>
			<Button size="icon" variant="ghost" href="mailto:noeco.official@gmail.com">
				<Mail></Mail>
			</Button>
		</div>
		<Sidebar.Group>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					<Sidebar.MenuItem>
						<Sidebar.MenuButton size="lg" onclick={() => (creditDialogOpen = true)}>
							<span class="w-full text-center">Made by Ingo</span></Sidebar.MenuButton
						>
					</Sidebar.MenuItem>
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Footer>
</Sidebar.Root>

<Drawer.Root bind:open={creditDialogOpen}>
	<Drawer.Content>
		<Drawer.Header>
			<Drawer.Title>Made by Ingo (and other credits)</Drawer.Title>
			<CreditAndStack />
		</Drawer.Header>

		<Drawer.Footer>
			<Button class="w-full" variant="outline" onclick={() => (creditDialogOpen = false)}>OK</Button
			>
		</Drawer.Footer>
	</Drawer.Content>
</Drawer.Root>

<Dialog.Root bind:open={creditDialogOpen}>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Made by Ingo (and other credits)</Dialog.Title>
			<CreditAndStack />
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>
