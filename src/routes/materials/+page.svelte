<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<h1>All Materials</h1>
<p>Last Updated: 2022-01-16</p>

<ul>
  {#each data.items as item}
    <li>
      <a href="/materials/{item.mat_id}">{item.mat_nm}</a>
    </li>
  {/each}
</ul>