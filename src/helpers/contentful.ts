// import * as contentful from "contentful";

// export const contentClient: contentful.ContentfulClientApi = contentful.createClient(
//   {
//     space: "d6i8ml0axzpe",
//     accessToken: "BH05RIY5i6EWnET8JuhvR-u8OKHTNseD27by7X2vdFQ",
//   }
// );
export const contentClient = {
  space_id: "d6i8ml0axzpe",
  access_token: "BH05RIY5i6EWnET8JuhvR-u8OKHTNseD27by7X2vdFQ",
  params(data) {
    if (!data) {
      return "";
    }
    return Object.keys(data)
      .map((key) => `${key}=${encodeURIComponent(data[key])}`)
      .join("&");
  },
  baseUrl() {
    return `//cdn.contentful.com/spaces/${this.space_id}/entries?access_token=${this.access_token}`;
  },
  async getEntries(query) {
    const params = this.params(query);
    const request =
      this.baseUrl() + `${params.length > 0 ? "&" + params : null}`;
    return fetch(request).then((res) => res.json());
  },
  async getPostBySlug(slug) {
    console.log({ slug });
    return this.getEntries({
      content_type: "blogPost",
      "fields.slug[in]": slug,
      limit: 1,
    });
  },
};
