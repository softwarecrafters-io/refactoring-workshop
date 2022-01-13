import { Author, collectTwitterHandlesBy } from "../../core/pipelines/Author";

test('collects twitter handles', ()=>{
    const author1 = new Author("Target", "@bob");
    const author2 = new Author("Other", "@other");
    const authors = [author1, author2];

    expect(collectTwitterHandlesBy(authors, "Target").length).toBe(1);
})