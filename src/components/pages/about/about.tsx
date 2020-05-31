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
        <div class="spacer-4"></div>
        <fade-in left withScroll revert>
          <div class="row">
            <div class="col-10 offset-1 col-md-8 offset-md-3 col-lg-7 offset-lg-4">
              <h1>Allow me to introduce myself</h1>
            </div>
          </div>
        </fade-in>
        <div class="spacer-6"></div>
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-8 offset-md-1">
              <fade-in withScroll right revert>
                <h2>Life is complex.</h2>
              </fade-in>

              <fade-in withScroll up revert>
                <p>
                  My job is to simplify it for people in a place called the Web.
                </p>
              </fade-in>

              <fade-in withScroll up revert>
                <p>
                  I'm always fascinated by technology and smart ways people
                  apply technology to make life easier.
                </p>
              </fade-in>

              <fade-in withScroll up revert>
                <p>
                  I love making{" "}
                  <stencil-route-link url="/projects">
                    cool shit that's also useful
                  </stencil-route-link>{" "}
                  and I{" "}
                  <a
                    href="http://playground.cordelta.digital/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    encourage others around me to do the same
                  </a>
                  .
                </p>
              </fade-in>
            </div>
          </div>
          <div class="spacer-6"></div>
          <div class="row">
            <div class="col-12 col-md-8 offset-md-3 col-lg-7 offset-lg-4">
              <fade-in withScroll up revert>
                <p>
                  I grew up in <em>Beijing, China</em> 🐼 and moved to{" "}
                  <em>Canberra, Australia</em> 🐨 when I was 17.
                </p>
              </fade-in>
              <fade-in withScroll up revert>
                <p>
                  Although both cities are the capital of the country, they are
                  worlds apart from each other.
                </p>
              </fade-in>
              <fade-in withScroll up revert>
                <p>
                  I loved the crowd life in Beijing where I can go out and enjoy
                  delicious meals with a bunch of friends any time ☀️ and 🌙 but
                  I've come to enjoy the peaceful life of Canberra more.
                </p>
              </fade-in>
            </div>
          </div>

          <div class="spacer-4"></div>
          <div class="row">
            <div class="col-12">
              <fade-in withScroll right revert>
                <h3>More about me?</h3>
                <p>Follow these guys 👇 </p>
              </fade-in>
            </div>
          </div>
          <div class="spacer-1"></div>
        </div>
      </Host>
    );
  }
}
