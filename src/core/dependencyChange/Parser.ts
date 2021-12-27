export class Parser {
  public parse(query: string): string[] {
    return query.split(" ");
  }
}