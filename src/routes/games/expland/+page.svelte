<script lang="ts">
	import preview from './preview.webm';
	import textlogo_white from './textlogo_white.png';

	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<header
	class="sticky top-0 z-10 m-2 flex h-14 w-fit shrink-0 items-center gap-2 rounded-lg bg-black bg-opacity-50 backdrop-blur-xl md:ml-0"
>
	<div class="flex items-center gap-2 px-4">
		<Sidebar.Trigger class="-ml-1" />
		<Separator orientation="vertical" class="mr-2 h-4" />
		<Breadcrumb.Root>
			<Breadcrumb.List>
				<Breadcrumb.Item class="hidden md:block">
					<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator class="hidden md:block" />
				<Breadcrumb.Item class="hidden md:block">
					<Breadcrumb.Link href="/games">Games</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator class="hidden md:block" />
				<Breadcrumb.Item>
					<Breadcrumb.Page>Expland</Breadcrumb.Page>
				</Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb.Root>
	</div>
</header>

<video src={preview} autoplay muted loop class="fixed left-0 top-0 h-screen w-screen object-cover"
></video>

<div
	class="fixed bottom-0 z-10 flex h-fit flex-col gap-4 rounded-t-lg bg-black bg-opacity-50 p-10 backdrop-blur-xl md:bottom-2 md:rounded-lg"
>
	<div class="flex flex-col items-center justify-center gap-4 md:flex-row">
		<!-- <img src={textlogo_white} alt="Expland" class="h-16 self-center" /> -->
		<enhanced:img
			src="./textlogo_white.png"
			alt="Expland"
			class="h-16 w-52 self-center object-cover"
		/>
		<div class="flex-grow"></div>
		<Button href="https://github.com/NoeCoOfficial/Expland/releases" target="_blank" size="lg"
			>Download</Button
		>
		<Button
			href="https://github.com/NoeCoOfficial/Expland/"
			target="_blank"
			size="lg"
			variant="ghost">Source</Button
		>
	</div>
	<div class="p-2 md:max-w-prose">
		Face adversity, hardship, enjoy adventure as well, and discover a second chance to fix past
		mistakes and become a better person in a mysterious world with nightmares and happiness just
		around the corner.
	</div>
</div>
