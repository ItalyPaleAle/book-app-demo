import App from './App.svelte'

const app = (async function() {
    return new App({
        target: document.body
    })
})()
export default app
