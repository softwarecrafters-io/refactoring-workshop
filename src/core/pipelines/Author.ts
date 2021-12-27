/*
Refactoring to pipelines by Martin Fowler:

https://martinfowler.com/articles/refactoring-pipelines.html
 */

export class Author {
  public company: string;
  public twitterHandle: string;

  public static twitterHandles(authors: Author[], company: string): string[] {
    const result = [];
    for (let i = 0; i < authors.length; i++){
      if (authors[i].company == company) {
          const handle = authors[i];
          if ((handle != null)) {
            result.push(handle);
          }
        }
    }
    return result;
  }
}