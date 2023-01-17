<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<h1>{data.name}</h1>
<pre>{JSON.stringify(data, null,2)}</pre>