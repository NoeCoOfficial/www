<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
</script>

<SvelteSeo
	description="We are a team of three who like making games. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
		et dolore magna aliqua."
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

<div class="m-4 flex items-center justify-center rounded-xl p-2">
	<div class="flex min-h-96 max-w-prose flex-col items-center justify-center gap-8 p-8 md:flex-row">
		<enhanced:img src="$lib/images/NoeCoLogoTransparent-Cropped.png" alt="" />
		<h1 class="text-center text-7xl font-bold">Meet the Team</h1>
	</div>
</div>

<div class="m-4 flex items-center justify-center rounded-xl p-2">
	<div class="max-w-prose">
		We are a team of three who like making games. Lorem ipsum dolor sit amet, consectetur adipiscing
		elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
	</div>
</div>

<div class="m-4 flex flex-col items-start justify-center gap-6 rounded-xl p-4">
	<div>
		<h2 class="scroll-m-20 text-2xl font-semibold tracking-tight text-white">Sebastian Suciu</h2>
		<p class="text-lg text-gray-300">
			Seb is a 14 year old in high school who loves messing around with computers and programming
			languages. His favorite video game is Geometry Dash, and the engine he uses to make games is
			Godot and Blender. He has been making games and projects for over 2 years, and he has been
			loving every second of it. He enjoys playing Basketball and sport and is skilled in GDScript,
			Python and C++.
		</p>
	</div>
	<div>
		<h2 class="scroll-m-20 text-2xl font-semibold tracking-tight text-white">Tristan Taylor</h2>
		<p class="text-lg text-gray-300">
			Tristan is 14 years old and unlike Seb, enjoys making game assets rather than coding, as well
			as being skilled in Blender, Soundtrap and paperwork. Tristan is our main source of ideas for
			the team. He is great at making lore, storyboarding and game planning. His favorite video game
			is Subnautica.
		</p>
	</div>
	<div>
		<h2 class="scroll-m-20 text-2xl font-semibold tracking-tight text-white">Erik Miller</h2>
		<p class="text-lg text-gray-300">
			Erik is a talented artist and animator, creating visually stunning and immersive game
			environments. They add the finishing touch to the team's creations. Erik is 14 years old and
			loves making pixel art and music for the team. He holds skills in Pixilart and Soundtrap.
		</p>
	</div>
</div>
