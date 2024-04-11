export default class DisclosureButton {
  private buttonNode: HTMLButtonElement;
  private controlledNode: HTMLDivElement;
  
  public constructor(buttonNode: HTMLButtonElement) {
    this.buttonNode = buttonNode;
    this.controlledNode = this.getControlledNode();

    this.buttonNode.setAttribute("aria-expanded", "false");
    this.hideContent();

    this.buttonNode.addEventListener("click", this.onClick.bind(this));
    this.buttonNode.addEventListener("focus", this.onFocus.bind(this));
    this.buttonNode.addEventListener("blur", this.onBlur.bind(this));
  }

  private getControlledNode() {
    const controlledNodeId = this.buttonNode.getAttribute("aria-controls");
    if (controlledNodeId) {
      const controlledNode = document.getElementById(controlledNodeId);
      if (controlledNode instanceof HTMLDivElement) {
        return controlledNode;
      } else {
        throw new Error("The controlled node is not valid");
      }
    } else {
      throw new Error("The button node has no aria-controls attribute");
    }
  }

  private showContent() {
    this.controlledNode.style.display = "block";
  }

  private hideContent() {
    this.controlledNode.style.display = "none";
  }

  private toggleExpand() {
    if (this.buttonNode.getAttribute("aria-expanded") === "true") {
      this.buttonNode.setAttribute("aria-expanded", "false");
      this.hideContent();
    } else {
      this.buttonNode.setAttribute("aria-expanded", "true");
      this.showContent();
    }
  }

  private onClick() {
    this.toggleExpand();
  }

  private onFocus() {
    this.buttonNode.classList.add("focus");
  }

  private onBlur() {
    this.buttonNode.classList.remove("focus");
  }
}