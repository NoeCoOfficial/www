<script lang="ts">
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
</script>

<header
	class="sticky top-0 flex h-16 w-full shrink-0 items-center gap-2 bg-neutral-950 shadow-lg shadow-neutral-950"
>
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
<div class="m-4 rounded-xl bg-muted/50 p-2">
	<div class="flex justify-center p-8">
		<h1 class="size-10">Making indie games for everyone</h1>
	</div>
</div>
