import { Component, h } from "@stencil/core";
import "soft-components";
@Component({
  tag: "app-root",
  styleUrl: "app-root.scss",
})
export class AppRoot {
  render() {
    return (
      <div class="app-root">
        {/* <img src="/assets/img/logo.png" alt="Sean Wu" class="profile-pic" /> */}

        <header>
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-12 col-md-4 logo">
                <fancy-name url="/"></fancy-name>
              </div>
              <div class="col-12 col-md-8">
                <nav>
                  <ul>
                    <li>
                      <stencil-route-link url="/about">
                        About
                      </stencil-route-link>
                    </li>
                    <li>
                      <stencil-route-link url="/projects">
                        Projects
                      </stencil-route-link>
                    </li>
                    <li>
                      <stencil-route-link url="/blog">
                        Thoughts
                      </stencil-route-link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route
                url="/"
                component="page-home"
                exact
              ></stencil-route>
              <stencil-route url="/about" component="page-about" />
              <stencil-route url="/projects" component="page-projects" />
              <stencil-route url="/blog" component="blog-list" exact />
              <stencil-route url="/blog/" component="blog-list" exact />
              <stencil-route url="/blog/:slug" component="blog-single" />

              <stencil-route component="page-notfound" />
            </stencil-route-switch>
          </stencil-router>
        </main>

        <footer>
          <div class="container text-center">
            <div class="row">
              <div class="col">
                {/* github */}
                <sc-button
                  href="https://github.com/seanwuapps"
                  target="_blank"
                  rel="noreferrer"
                  icon
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <title>Github</title>
                    <path
                      fill-rule="evenodd"
                      d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
                    />
                  </svg>
                </sc-button>
              </div>
              <div class="col">
                {/* codepen */}
                <sc-button
                  href="https://codepen.io/deseanwu"
                  target="_blank"
                  rel="noreferrer"
                  icon
                >
                  <svg viewBox="0 0 32 32">
                    <title>Codepen</title>
                    <path d="M16 2.84375l-.5625.375-12 8.03125L3 11.53125v8.9375l.4375.28125 12 8.03125.5625.375.5625-.375 12-8.03125.4375-.28125v-8.9375l-.4375-.28125-12-8.03125zm-1 3.0625v5.4375L9.84375 14.8125 5.8125 12.09375zm2 0l9.1875 6.1875-4.03125 2.71875L17 11.34375zm-1 7.1875L20.34375 16 16 18.90625 11.65625 16zM5 13.9375L8.0625 16 5 18.0625zm22 0v4.125L23.9375 16zm-17.125 3.25L15 20.65625v5.4375l-9.1875-6.1875zm12.25 0l4.0625 2.71875L17 26.09375v-5.4375z" />
                  </svg>
                </sc-button>
              </div>
              <div class="col">
                {/* linkedin */}
                <sc-button
                  href="https://www.linkedin.com/in/deseanwu"
                  target="_blank"
                  rel="noreferrer"
                  icon
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <title>LinkedIn</title>
                    <path d="M8.6425781 4C7.1835781 4 6 5.181625 6 6.640625s1.182625 2.6679688 2.640625 2.6679688 2.642578-1.2089688 2.642578-2.6679688C11.283203 5.182625 10.101578 4 8.6425781 4zm12.8925779 7c-2.219 0-3.488656 1.160453-4.097656 2.314453h-.064453v-2.003906H13V26h4.556641v-7.271484c0-1.916.144625-3.767578 2.515625-3.767578 2.337-.000001 2.371093 2.184671 2.371093 3.888671V26H27v-8.068359C27 13.983641 26.151156 11 21.535156 11zm-15.1718748.310547V26h4.5605468V11.310547H6.3632812z" />
                  </svg>
                </sc-button>
              </div>
              <div class="col">
                {/* twitter */}
                <sc-button
                  href="https://twitter.com/seanwuapps"
                  target="_blank"
                  rel="noreferrer"
                  icon
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <title>Twitter</title>
                    <path d="M28 8.558594c-.882812.390625-1.832031.65625-2.828125.773437 1.015625-.609375 1.796875-1.574218 2.164063-2.722656-.949219.5625-2.003907.972656-3.125 1.195313-.898438-.957032-2.179688-1.558594-3.59375-1.558594-2.71875 0-4.925782 2.207031-4.925782 4.925781 0 .386719.042969.761719.128907 1.121094-4.09375-.203125-7.722657-2.164063-10.148438-5.144531C5.246094 7.875 5.003906 8.722656 5.003906 9.625c0 1.707031.867188 3.214844 2.191407 4.097656-.808594-.027343-1.566407-.246093-2.230469-.617187v.0625c0 2.386719 1.695312 4.378906 3.949219 4.828125-.414063.113281-.847657.175781-1.296875.175781-.316407 0-.628907-.03125-.925782-.089844.625 1.957032 2.445313 3.378907 4.597657 3.421875-1.683594 1.320313-3.808594 2.105469-6.113282 2.105469-.398437 0-.789062-.023437-1.175781-.070312 2.179688 1.398437 4.765625 2.214843 7.546875 2.214843 9.058594 0 14.011719-7.503906 14.011719-14.011718 0-.210938-.007813-.425782-.015625-.636719.960937-.695313 1.796875-1.5625 2.457031-2.546875z" />
                  </svg>
                </sc-button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
