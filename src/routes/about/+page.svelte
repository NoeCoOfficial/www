<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import * as Card from '$lib/components/ui/card/index.js';

	import { Button } from '$lib/components/ui/button/index.js';

	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faYoutube } from '@fortawesome/free-brands-svg-icons';
</script>

<SvelteSeo
	title="About Us - Noe Co."
	description="We are a partnership of two who like making games."
/>

<header class="sticky top-0 flex h-16 w-full shrink-0 items-center gap-2 backdrop-blur-xl">
	<div class="flex items-center gap-2 px-4">
		<Sidebar.Trigger class="-ml-1" />
		<Separator orientation="vertical" class="mr-2 h-4" />
		<Breadcrumb.Root>
			<Breadcrumb.List>
				<Breadcrumb.Item>
					<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator></Breadcrumb.Separator>
				<Breadcrumb.Item>
					<Breadcrumb.Page>About Us</Breadcrumb.Page>
				</Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb.Root>
	</div>
</header>

<div class="flex items-center justify-center">
	<div class="flex min-h-48 max-w-prose flex-col items-end justify-center gap-8 p-4 md:flex-row">
		<h1 class="text-center text-[40px] font-bold">Meet the Team</h1>
	</div>
</div>

<div class="flex items-center justify-center px-2">
	<Card.Root class="w-full max-w-prose">
		<Card.Content>We are a partnership of two who like making games.</Card.Content></Card.Root
	>
</div>

<div class="flex justify-center">
	<div class="flex max-w-screen-lg flex-col items-start justify-center gap-2 p-2 md:flex-row">
		<Card.Root class="flex h-full w-full flex-col">
			<Card.Header>
				<Card.Title>Sebastian Suciu</Card.Title>
			</Card.Header>
			<Card.Content>
				<p>
					Seb is a 14 year old in high school who loves messing around with computers and
					programming languages. His favorite video game is Geometry Dash, and the engine he uses to
					make games is Godot and Blender. He has been making games and projects for over 2 years,
					and he has been loving every second of it. He enjoys playing Basketball and sport and is
					skilled in GDScript, Python and C++.
				</p>
			</Card.Content>
			<div class="flex-grow"></div>
			<Card.Footer>
				<div class="flex flex-row justify-center gap-1">
					<Button size="icon" variant="ghost" href="https://github.com/sebashtioon" target="_blank">
						<Fa icon={faGithub} /></Button
					>
				</div>
			</Card.Footer>
		</Card.Root>
		<Card.Root class="flex h-full w-full flex-col">
			<Card.Header>
				<Card.Title>Tristan Taylor</Card.Title>
			</Card.Header>
			<Card.Content>
				<p>
					Tristan is 14 years old and unlike Seb, enjoys making game assets rather than coding, as
					well as being skilled in Blender, Soundtrap, and paperwork. Tristan is the main source of
					ideas. He is great at making lore, storyboarding, and game planning. His favorite video
					game is Subnautica.
				</p>
			</Card.Content>
			<div class="flex-grow"></div>
			<Card.Footer>
				<div class="flex flex-row justify-center gap-1">
					<Button size="icon" variant="ghost" href="https://github.com/GoatsAreTB" target="_blank">
						<Fa icon={faGithub} /></Button
					>
				</div>
			</Card.Footer>
		</Card.Root>
	</div>
</div>
