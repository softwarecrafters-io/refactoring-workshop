export class CsvBuilder {
	public buildLine(...fields:string[]) {
		return fields.join(",");
	}

	private header(): String {
		return "Field1, Field2";
	}

	public aFileWithLine(line: String) {
		return [this.header(), line];
	}
}