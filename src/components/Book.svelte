<div in:fade>
  <p class="mb-4 ml-2 text-blue-800">
    <span class="cursor-pointer" on:click={pop}>◀︎ Back</span>
  </p>
  <div class="mb-2 p-2 flex flex-row items-top flex-wrap">
    <div class="flex-grow-0 w-full sm:w-1/4">
      <img class="block mx-auto" src={book.cover} alt={book.title + ' by ' +book.author} />
    </div>
    <div class="px-4 pt-4 sm:pt-0 flex-1">
      <p class="text-xl mb-2">
        {book.title}
        <span class="inline-block ml-2 text-gray-600">({book.year})</span>
      </p>
      <p class="text-gray-800 font-italic mb-2">By {book.author}</p>
      <p class="mb-2">{book.description}</p>
      <a href="{book.link}" class="text-blue-800 underline">Buy</a>
    </div>
  </div>
</div>

<script>
import {fade} from 'svelte/transition'
import books from '../books'
import {pop} from 'svelte-spa-router'

export let params = {}

function findBook(id) {
    return books[parseInt(id, 10)]
}
$: book = findBook(params.id) 
</script>
