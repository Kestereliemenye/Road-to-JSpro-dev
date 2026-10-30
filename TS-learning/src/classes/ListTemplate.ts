// itll register a ul in the constructor
// it create a render methos to render a new li to the container
// till accept argument: payment or invoice a heading and a psotion
import type { HasFormatter } from "../interfaces/HasFormatter"


export class ListTemplate {
  constructor(private container: HTMLUListElement) {}
    render(item: HasFormatter, heading: string, pos: "start" | "end") {
        const li = document.createElement("li")
        const h4 = document.createElement("h4")
        h4.innerText = heading
        li.append(h4)

        const p = document.createElement("p")
        p.innerText = item.format()
        li.append(p)

        if (pos === "start") {
            this.container.prepend(li)
        } else {
            this.container.append(li)
        }
  }
}