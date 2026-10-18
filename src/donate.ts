import { mount } from 'svelte'
import './donate.css'
import Donate from './Donate.svelte'

const target = document.getElementById('app')
if (!target) {
  throw new Error('Missing #app container in donate.html')
}

const app = mount(Donate, { target })

export default app
