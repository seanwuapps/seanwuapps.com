import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "main-bg",
  styleUrl: "main-bg.scss",
})
export class MainBg {
  render() {
    return (
      <Host class="main-bg">
        <slot></slot>
      </Host>
    );
  }
}
