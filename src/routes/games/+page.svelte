<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
</script>

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
					<Breadcrumb.Page>Games</Breadcrumb.Page>
				</Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb.Root>
	</div>
</header>
<div class="flex items-center justify-center p-4">
	<Card.Root class="w-full max-w-prose">
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
