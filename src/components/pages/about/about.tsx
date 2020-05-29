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
        <div class="container">
          <fade-in withScroll up revert delay="0.2s">
            <div class="row">
              <div class="col-12 col-md-8">
                <h2>Life is complex.</h2>
                <p>
                  My job is to simplify it for people in a place called the Web.
                </p>
                <p>
                  I'm always fascinated by technology and smart ways people
                  apply technology to make life easier.
                </p>
                <p>
                  I love making cool shit that's useful and I{" "}
                  <a
                    href="http://playground.cordelta.digital/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    encourage others around me to do the same
                  </a>
                  .
                </p>
              </div>
            </div>
          </fade-in>
        </div>
      </Host>
    );
  }
}
