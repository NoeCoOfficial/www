<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<SvelteSeo title="Privacy Policy - Noe Co." />

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
					<Breadcrumb.Page>Privacy Policy</Breadcrumb.Page>
				</Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb.Root>
	</div>
</header>

<div class="flex items-center justify-center">
	<div class="flex min-h-48 max-w-prose flex-col items-end justify-center gap-8 p-4 md:flex-row">
		<h1 class="text-center text-[40px] font-bold">Privacy Policy</h1>
	</div>
</div>

<div class="flex items-center justify-center px-2">
	<Card.Root class="w-full max-w-prose">
		<Card.Content>
			We currently don't collect any data, but we may in the future. If we do, we will update this
			page to reflect that.
		</Card.Content></Card.Root
	>
</div>
