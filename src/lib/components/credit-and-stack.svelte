<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';

	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import Globe from 'lucide-svelte/icons/globe';
	import Mail from 'lucide-svelte/icons/mail';
	import * as Accordion from '$lib/components/ui/accordion/index.js';
</script>

<span>
	I built this website in my free time to learn SvelteKit and for my friend Seb, who enjoys game
	development but not web development. This site is open source and available on GitHub. If you are
	intersted in contributing you can open a pull request, and if you find a bug you can open an
	issue. If you just want to check out the source code it is <a
		href="https://github.com/NoeCoOfficial/www"
		target="_blank"
		class="underline">here</a
	>.
	<br />
	&nbsp;- Ingo (@Inglan)
	<br />
	<br />
	<div class="flex w-fit flex-row justify-center gap-1">
		<Button size="icon" variant="ghost" href="https://github.com/Inglan" target="_blank">
			<Fa icon={faGithub} /></Button
		>
		<Button size="icon" variant="ghost" href="https://ingo.au" target="_blank">
			<Globe />
		</Button>
		<Button size="icon" variant="ghost" href="mailto:me@ingo.au" target="_blank">
			<Mail />
		</Button>
	</div>
</span>

<Accordion.Root type="single">
	<Accordion.Item value="techstack">
		<Accordion.Trigger>Tech Stack</Accordion.Trigger>
		<Accordion.Content>
			This website is written in <a href="https://svelte.dev/" target="_blank" class="underline"
				>Svelte</a
			>
			for the frontend and uses
			<a href="https://kit.svelte.dev/" target="_blank" class="underline">SvelteKit</a>
			for the other website related stuff like routing. The website uses
			<a href="https://tailwindcss.com/" target="_blank" class="underline">TailwindCSS</a>
			for styling, and components from
			<a href="https://shadcn.dev/" target="_blank" class="underline">shadcn</a>. The website is
			hosted on
			<a href="https://www.cloudflare.com/" target="_blank" class="underline">Cloudflare</a> pages
			and the source code is on
			<a href="https://github.com/NoeCoOfficial/www" target="_blank" class="underline">GitHub</a>. I
			need to start code testing but I am running some tests with
			<a href="https://playwright.dev/" target="_blank" class="underline">Playwright</a>
			on
			<a href="https://github.com/features/actions" target="_blank" class="underline"
				>GitHub Actions</a
			>. GitHub's
			<a href="https://github.com/dependabot" target="_blank" class="underline">dependabot</a> keeps
			the dependencies up to date.
		</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item value="licences">
		<Accordion.Trigger>Licences</Accordion.Trigger>
		<Accordion.Content></Accordion.Content>
	</Accordion.Item>
</Accordion.Root>
