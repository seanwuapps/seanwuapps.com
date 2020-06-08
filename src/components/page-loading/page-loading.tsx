import { Component, h } from "@stencil/core";

@Component({
  tag: "page-loading",
  styleUrl: "page-loading.css",
})
export class PageLoading {
  render() {
    return (
      <div class="text-center spacing-4">
        <h3>Loading content...</h3>
      </div>
    );
  }
}
