import { Component, h } from "@stencil/core";

@Component({
  tag: "page-notfound",
  styleUrl: "notfound.css",
  shadow: true,
})
export class Notfound {
  render() {
    return <stencil-router-redirect url="/" />;
  }
}
