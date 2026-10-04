import { mount } from 'svelte'
import './privacy.css'
import Privacy from './Privacy.svelte'

const target = document.getElementById('app')
if (!target) {
  throw new Error('Missing #app container in privacy.html')
}

const app = mount(Privacy, { target })

export default app
