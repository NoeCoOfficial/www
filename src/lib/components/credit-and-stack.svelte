<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';

	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import Globe from 'lucide-svelte/icons/globe';
	import Mail from 'lucide-svelte/icons/mail';
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
