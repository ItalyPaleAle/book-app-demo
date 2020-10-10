// Import Svelte components
import Book from './components/Book.svelte'
import List from './components/List.svelte'
import NotFound from './components/NotFound.svelte'

// Route dictionary
export default {
    '/': List,
    '/book/:id': Book,
    // Catch-all route, must be last
    '*': NotFound
}
