/*
Refactoring to pipelines by Martin Fowler:

https://martinfowler.com/articles/refactoring-pipelines.html
 */

export class Author {
  constructor(
    readonly company: string,
    readonly twitterHandle: string
  ) {}
}

export function collectTwitterHandlesBy(authors: Author[], company: string): string[] {
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