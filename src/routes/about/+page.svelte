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

<div class="m-4 flex items-center justify-center rounded-xl p-2">
	<div class="max-w-prose">
		We are a team of three who like making games. Lorem ipsum dolor sit amet, consectetur adipiscing
		elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
	</div>
</div>
