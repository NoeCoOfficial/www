<script lang="ts">
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import * as Card from '$lib/components/ui/card/index.js';

	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo
	title="Noe Co."
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
					<Breadcrumb.Page>Home</Breadcrumb.Page>
				</Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb.Root>
	</div>
</header>
<div class="m-4 flex items-center justify-center rounded-xl p-2">
	<div class="flex min-h-96 max-w-prose flex-col items-center justify-center gap-8 p-8 md:flex-row">
		<enhanced:img src="$lib/images/NoeCoLogoTransparent-Cropped.png" alt="" />
		<h1 class="text-center text-[40px] font-bold">Making indie games for everyone.</h1>
	</div>
</div>
<div class="flex items-center justify-center p-4">
	<div 
	class="flex min-w-10 max-w-prose rounded-xl bg-muted/50 p-4 text-xl"
	style="margin-top: -6rem;">

		We are a team of three who like making games.

		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
		et dolore magna aliqua.

		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
		et dolore magna aliqua.
	</div>
</div>
<h2 class="p-4 text-center text-4xl">Check out some of our recent games</h2>
<div class="flex items-center justify-center p-4">
	<Card.Root class="w-96">
		<Card.Header>
			<Card.Title>Expland</Card.Title>
		</Card.Header>
		<Card.Content>
			<p>
				Face adversity, hardship, enjoy adventure as well, and discover a second chance to fix past
				mistakes and become a better person in a mysterious world with nightmares and happiness just
				around the corner.
			</p>
		</Card.Content>
		<Card.Footer>
			<div>
				<Button href="https://github.com/NoeCoOfficial/Expland/releases" target="_blank" size="lg"
					>Download</Button
				>
				<Button variant="outline" href="/games/expland" size="lg">More</Button>
			</div>
		</Card.Footer>
	</Card.Root>
</div>
