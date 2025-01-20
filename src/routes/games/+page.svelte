<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo title="Games - Noe Co." />

<header class="sticky top-0 flex h-16 w-full shrink-0 items-center gap-2 backdrop-blur-xl">
	<div class="flex items-center gap-2 px-4">
		<Sidebar.Trigger class="-ml-1" />
		<Separator orientation="vertical" class="mr-2 h-4" />
		<Breadcrumb.Root>
			<Breadcrumb.List>
				<Breadcrumb.Item class="hidden md:block">
					<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator class="hidden md:block"></Breadcrumb.Separator>
				<Breadcrumb.Item>
					<Breadcrumb.Page>Games</Breadcrumb.Page>
				</Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb.Root>
	</div>
</header>

<div class="flex items-center justify-center">
	<div class="flex min-h-48 max-w-prose flex-col items-end justify-center gap-8 p-4 md:flex-row">
		<h1 class="text-center text-[40px] font-bold">Games</h1>
	</div>
</div>

<div class="flex justify-center">
	<div class="flex max-w-screen-lg flex-col items-start justify-center gap-2 p-2 md:flex-row">
		<Card.Root class="flex h-full w-full max-w-96 flex-col">
			<Card.Header>
				<Card.Title>Expland</Card.Title>
			</Card.Header>
			<Card.Content>
				<p>
					Face adversity, hardship, enjoy adventure as well, and discover a second chance to fix
					past mistakes and become a better person in a mysterious world with nightmares and
					happiness just around the corner.
				</p>
			</Card.Content>
			<div class="flex-grow"></div>
			<Card.Footer>
				<div class="flex flex-grow flex-row justify-center gap-1 [&>*:first-child]:flex-grow">
					<Button
						class=""
						href="https://github.com/NoeCoOfficial/Expland/releases"
						target="_blank"
						size="lg">Download</Button
					>
					<Button class="" variant="outline" href="/games/expland" size="lg">More</Button>
				</div>
			</Card.Footer>
		</Card.Root>
	</div>
</div>
