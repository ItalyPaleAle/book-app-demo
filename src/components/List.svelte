<h1 class="text-2xl mb-4">Library</h1>
<div>
  {#each books as book, i}
    <a href="#/book/{i}" class="mb-2 p-2 hover:bg-gray-200 flex flex-row items-center">
      <div class="flex-grow-0 w-20">
        <img src={book.cover} alt={book.title + ' by ' +book.author} />
      </div>
      <div class="px-3">
        <p class="text-xl">
          {book.title}
          <span class="inline-block ml-2 text-gray-600">({book.year})</span>
        </p>
        <p>{book.author}</p>
      </div>
    </a>
  {/each}
</div>

<script>
import books from '../books'
</script>
