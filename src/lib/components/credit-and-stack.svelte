<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';

	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import Globe from 'lucide-svelte/icons/globe';
	import Mail from 'lucide-svelte/icons/mail';
	import * as Accordion from '$lib/components/ui/accordion/index.js';
</script>

<div class="h-[calc(100vh-500px)] w-full overflow-auto">
	<span>
		I built this website in my free time to learn SvelteKit and for my friend Seb, who enjoys game
		development but not web development. This site is open source and available on GitHub. If you
		are intersted in contributing you can open a pull request, and if you find a bug you can open an
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

	<Accordion.Root type="single" class="text-left">
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
				<a href="https://github.com/NoeCoOfficial/www" target="_blank" class="underline">GitHub</a>.
				I need to start code testing but I am running some tests with
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
			<Accordion.Content>
				<Accordion.Root type="single">
					<Accordion.Item value="font">
						<Accordion.Trigger>Font</Accordion.Trigger>
						<Accordion.Content>
							<p>
								Copyright 2023 The Schibsted-Grotesk Project Authors
								(https://github.com/schibsted/schibsted-grotesk)
							</p>
							<p>
								This Font Software is licensed under the SIL Open Font License, Version 1.1 . This
								license is copied below, and is also available with a FAQ at: <a
									href="https://openfontlicense.org"
									target="_blank"
									class="underline">https://openfontlicense.org</a
								>
							</p>
							<p><strong>SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007</strong></p>
							<p><strong>PREAMBLE</strong></p>
							<p>
								The goals of the Open Font License (OFL) are to stimulate worldwide development of
								collaborative font projects, to support the font creation efforts of academic and
								linguistic communities, and to provide a free and open framework in which fonts may
								be shared and improved in partnership with others.
							</p>
							<p>
								The OFL allows the licensed fonts to be used, studied, modified and redistributed
								freely as long as they are not sold by themselves. The fonts, including any
								derivative works, can be bundled, embedded, redistributed and/or sold with any
								software provided that any reserved names are not used by derivative works. The
								fonts and derivatives, however, cannot be released under any other type of license.
								The requirement for fonts to remain under this license does not apply to any
								document created using the fonts or their derivatives.
							</p>
							<p><strong>DEFINITIONS</strong></p>
							<p>
								"Font Software" refers to the set of files released by the Copyright Holder(s) under
								this license and clearly marked as such. This may include source files, build
								scripts and documentation.
							</p>
							<p>
								"Reserved Font Name" refers to any names specified as such after the copyright
								statement(s). "Original Version" refers to the collection of Font Software
								components as distributed by the Copyright Holder(s).
							</p>
							<p>
								"Modified Version" refers to any derivative made by adding to, deleting, or
								substituting -- in part or in whole -- any of the components of the Original
								Version, by changing formats or by porting the Font Software to a new environment.
							</p>
							<p>
								"Author" refers to any designer, engineer, programmer, technical writer or other
								person who contributed to the Font Software.
							</p>
							<p><strong>PERMISSION & CONDITIONS</strong></p>
							<p>
								Permission is hereby granted, free of charge, to any person obtaining a copy of the
								Font Software, to use, study, copy, merge, embed, modify, redistribute, and sell
								modified and unmodified copies of the Font Software, subject to the following
								conditions:
							</p>
							<ul>
								<li>
									Neither the Font Software nor any of its individual components, in Original or
									Modified Versions, may be sold by itself.
								</li>
								<li>
									Original or Modified Versions of the Font Software may be bundled, redistributed
									and/or sold with any software, provided that each copy contains the above
									copyright notice and this license. These can be included either as stand-alone
									text files, human-readable headers or in the appropriate machine-readable metadata
									fields within text or binary files as long as those fields can be easily viewed by
									the user.
								</li>
								<li>
									No Modified Version of the Font Software may use the Reserved Font Name(s) unless
									explicit written permission is granted by the corresponding Copyright Holder. This
									restriction only applies to the primary font name as presented to the users.
								</li>
								<li>
									The name(s) of the Copyright Holder(s) or the Author(s) of the Font Software shall
									not be used to promote, endorse or advertise any Modified Version, except to
									acknowledge the contribution(s) of the Copyright Holder(s) and the Author(s) or
									with their explicit written permission.
								</li>
								<li>
									The Font Software, modified or unmodified, in part or in whole, must be
									distributed entirely under this license, and must not be distributed under any
									other license. The requirement for fonts to remain under this license does not
									apply to any document created using the Font Software.
								</li>
							</ul>
							<p><strong>TERMINATION</strong></p>
							<p>This license becomes null and void if any of the above conditions are not met.</p>
							<p><strong>DISCLAIMER</strong></p>
							<p>
								THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
								IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR
								A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER
								RIGHT. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR
								OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR
								CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
								FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN
								THE FONT SOFTWARE.
							</p>
						</Accordion.Content></Accordion.Item
					></Accordion.Root
				>
			</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
</div>
