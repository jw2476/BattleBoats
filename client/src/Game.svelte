<section class="section">
  <div class="container box has-text-centered is-link notification">
    <p class="title">Selected Tile: x: {x}, y: {y}</p>
    <table class="table">
      {#each grid as row, y}
      <tr>
        {#each row as tile, x}
        <button class="is-dark button is-outlined {tile === 'MISS' ? 'has-background-white has-text-dark' : ''} {tile === 'HIT' ? 'has-background-danger has-text-dark' : ''}" on:click={() => handleTile(x, y)}>{tile}</button>
        {/each}
      </tr>
      {/each}
    </table>
  </div>
</section>

<script lang="ts">
  let grid: Array<Array<string>> = []
  let x, y: number

  let width: number = 16
  let height: number = 16
  for (let i = 0; i < height; i++) {
    let row: Array<string> = []
    for (let j = 0; j < width; j++) {
      row.push("")
    }
    grid.push(row)
  }

  function handleTile(ax: number, ay: number) {
    x = ax
    y = ay
    if (Math.floor(Math.random() * 2) == 1) {
      grid[y][x] = "HIT"
    } else {
      grid[y][x] = "MISS"
    }
  }
</script>

<style>
  table {
    width: 100%;
  }

  tr {
    color: white;
  }

  tr, .table, .container {
    background-color: hsl(217, 71%, 53%);
  }

  button {
    width: 6.25%;
    border-radius: 0;
  }
</style>