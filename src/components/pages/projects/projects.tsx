import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "page-projects",
  styleUrl: "projects.css",
})
export class Projects {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
