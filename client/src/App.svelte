<main>
	<Game/>
</main>

<script lang="ts">
import Game from "./Game.svelte"
import {io} from "socket.io-client"
io()
</script>