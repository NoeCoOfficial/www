import posthog from 'posthog-js'
import { browser } from '$app/environment';
import { onMount } from 'svelte';

onMount(() => {
  if (browser) {
    posthog.init(
      'phc_Rg2oqcsjfE7qSqF811Nl0ooMojQ9rX45CDepFfJYBcw',
      {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'always',
      }
    )
  }
  return
});
