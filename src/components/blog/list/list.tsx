import { Component, Host, h, State } from "@stencil/core";
import { contentClient } from "../../../helpers/contentful";

@Component({
  tag: "blog-list",
  styleUrl: "list.scss",
})
export class List {
  @State() posts = [];
  async componentWillLoad() {
    const response: any = await contentClient.getEntries({
      content_type: "blogPost",
      order: "sys.updatedAt",
    });
    this.posts = response.items.map((item) => {
      const imgId = item.fields.heroImage.sys.id;
      const heroImage = response.includes.Asset.find(
        (asset) => asset.sys.id === imgId
      );

      return {
        ...item,
        heroImage,
      };
    });
  }
  chunkPosts(posts, chunkSize = 6) {
    var R = [];
    for (var i = 0; i < posts.length; i += chunkSize) {
      R.push(posts.slice(i, i + chunkSize));
    }
    return R;
  }
  blogList(posts) {
    return this.chunkPosts(posts).map((postGrid) => {
      return (
        <div class="blog-list-grid">
          {postGrid.map((post) => {
            const cardStyle = post?.heroImage?.fields?.file?.url
              ? {
                  backgroundImage: `url(${post?.heroImage?.fields?.file?.url})`,
                }
              : null;
            return (
              <sc-button
                class="blog-list-item"
                style={cardStyle}
                href={`/blog/${post.fields.slug}`}
              >
                <h2>{post.fields.title}</h2>

                <p class="blurb">{post.fields.description}</p>
              </sc-button>
            );
          })}
        </div>
      );
    });
  }

  render() {
    return (
      <Host>
        <stencil-route-title pageTitle="Thoughts | Sean Wu" />
        <page-title>
          <h1>My thoughts</h1>
        </page-title>
        <div class="container">
          {this.posts.length > 0 ? (
            this.blogList(this.posts)
          ) : (
            <page-loading></page-loading>
          )}
          <div class="spacer-4"></div>
        </div>
        <div class="spacer-6"></div>
      </Host>
    );
  }
}
