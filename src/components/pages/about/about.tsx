import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "page-about",
  styleUrl: "about.scss",
})
export class About {
  render() {
    return (
      <Host>
        <stencil-route-title pageTitle="About me | Sean Wu" />
        <fade-in withScroll up revert>
          <div class="row">
            <div class="col-10 offset-1 col-md-8 offset-md-3 col-lg-7 offset-lg-4">
              <h1>Allow me to introduce myself</h1>
            </div>
          </div>
        </fade-in>
        <div class="container"></div>
      </Host>
    );
  }
}
