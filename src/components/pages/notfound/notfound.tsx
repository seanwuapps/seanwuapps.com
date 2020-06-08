import { Component, h } from "@stencil/core";

@Component({
  tag: "page-notfound",
  styleUrl: "notfound.css",
})
export class Notfound {
  render() {
    return (
      <div class="text-center">
        <div class="spacer-4"></div>
        <h3>Sorry, content not found.</h3>
        <p>
          <stencil-route-link url="/">Back to home</stencil-route-link>
        </p>
        <div class="spacer-4"></div>
      </div>
    );
  }
}
