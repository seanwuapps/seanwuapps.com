import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "page-about",
  styleUrl: "about.scss",
})
export class About {
  render() {
    return (
      <Host>
        <seo-tags
          pageTitle="About me | Sean Wu"
          description="Sean Wu, the web dev with coffee addiction"
        ></seo-tags>
        <page-title>
          <h1>Allow me to introduce myself</h1>
        </page-title>
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-8 offset-md-1">
              <fade-in offsetPx={200} withScroll right revert>
                <h2>Life is complex.</h2>
              </fade-in>

              <fade-in offsetPx={200} withScroll up revert>
                <p>
                  My job is to simplify it for people in a place called the Web.
                </p>
              </fade-in>

              <fade-in offsetPx={200} withScroll up revert>
                <p>
                  I'm always fascinated by technology and smart ways people
                  apply technology to make life easier.
                </p>
              </fade-in>

              <fade-in offsetPx={200} withScroll up revert>
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
        </div>
        <div class="spacer-3"></div>
        <fade-in offsetPx={200} withScroll>
          <img
            src="/assets/img/canberra.jpg"
            alt="Canberra night"
            class="full-width"
          />
        </fade-in>
        <div class="container neg-spacing-6">
          <div class="row">
            <div class="col-12 col-md-8 offset-md-3 col-lg-7 offset-lg-4">
              <fade-in offsetPx={200} withScroll up revert>
                <p>
                  I grew up in <em>Beijing, China</em> 🐼 and moved to{" "}
                  <em>Canberra, Australia</em> 🐨 when I was 17.
                </p>
              </fade-in>
              <fade-in offsetPx={200} withScroll up revert>
                <p>
                  Although both cities are the capital of the country, they are
                  worlds apart from each other.
                </p>
              </fade-in>
              <fade-in offsetPx={200} withScroll up revert>
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
            <div class="col-12 col-md-8 col-lg-7">
              <fade-in offsetPx={200} withScroll up revert>
                <p>
                  I'm one lucky bastard. Why? Because I got married with an
                  amazing woman who's as smart as she is beautiful.
                </p>
              </fade-in>
              <fade-in offsetPx={200} withScroll up revert>
                <p>
                  Louise is intelligent, funny, brave, caring and all those good
                  things a man could ask for combined into one.
                </p>
              </fade-in>
              <fade-in offsetPx={200} withScroll up revert>
                <p>
                  Whenever I get carried away in coding land, she's there to
                  entertain the little ones, she's there to cook and whenever
                  I'm lost or stressed she's there to say
                  <em>
                    <strong>"You've got this hubby!"</strong>
                  </em>
                </p>
              </fade-in>

              <fade-in offsetPx={200} withScroll up revert>
                <p>
                  Oh! And Louise and I met online, everything is just perfect.
                </p>
              </fade-in>
            </div>
          </div>

          <div class="spacer-6"></div>
          <div class="row">
            <div class="col-12">
              <fade-in offsetPx={200} withScroll right revert>
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
