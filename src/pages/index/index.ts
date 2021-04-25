import { Destructible } from "components/type";

const listDemos = document.querySelectorAll('.index__list_demo')[0] as HTMLDivElement
const templ = document.querySelectorAll('.index__template')[0] as HTMLTemplateElement

function addDemoBlock(this: HTMLButtonElement, event: MouseEvent) {
  let iterator = 0
  const clone = document.importNode(templ.content, true)
  const nevSlider = clone.querySelectorAll('.slider')[0] as HTMLDivElement
  nevSlider.addEventListener('click', () => { alert(iterator++) })

  listDemos.appendChild(clone)
}

const btn = document.querySelectorAll('.index__button--add_template')[0] as HTMLButtonElement
btn.addEventListener('click', addDemoBlock, { passive: true })
