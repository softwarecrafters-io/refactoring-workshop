import { Author } from "../../core/pipelines/Author";

describe('The author',()=>{
  it('collects twitter handles', ()=>{
    const author1 = new Author();
    author1.company = "Target";
    author1.twitterHandle = "@bob";
    const author2 = new Author();
    author2.company = "Other";
    author2.twitterHandle = "@other";
    const authors = [author1, author2];

    expect(Author.twitterHandles(authors, "Target").length).toBe(1);
  })
})