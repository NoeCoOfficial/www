<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
</script>

<SvelteSeo
	title="About - Noe Co."
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

<h1 class="text-4xl font-bold text-center my-8">Meet the Team</h1>

<div class="m-4 flex items-center justify-center rounded-xl p-2">
	<div class="max-w-prose">
		We are a team of three who like making games. Lorem ipsum dolor sit amet, consectetur adipiscing
		elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
	</div>
</div>

<div class="m-4 flex flex-col gap-6 items-start justify-center rounded-xl p-4">
	<div>
		<h2 class="scroll-m-20 text-2xl font-semibold tracking-tight text-white">
			Name 1
		</h2>
		<p class="text-lg text-gray-300">
			Name 1 is a passionate game developer who specializes in design and
			storytelling. They bring the team's ideas to life with innovative mechanics and
			captivating narratives.
		</p>
	</div>
	<div>
		<h2 class="scroll-m-20 text-2xl font-semibold tracking-tight text-white">
			Name 2
		</h2>
		<p class="text-lg text-gray-300">
			Name 2 focuses on programming and technology, ensuring smooth and efficient
			performance in every game. Their technical expertise helps the team tackle
			challenging problems.
		</p>
	</div>
	<div>
		<h2 class="scroll-m-20 text-2xl font-semibold tracking-tight text-white">
			Name 3
		</h2>
		<p class="text-lg text-gray-300">
			Name 3 is a talented artist and animator, creating visually stunning and
			immersive game environments. They add the finishing touch to the team's
			creations.
		</p>
	</div>
</div>
