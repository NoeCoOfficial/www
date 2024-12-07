<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';

	import * as Card from '$lib/components/ui/card/index.js';
</script>

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
