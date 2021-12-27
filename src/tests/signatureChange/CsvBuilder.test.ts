import { CsvBuilder } from '../../core/signatureChange/CsvBuilder';

describe('The CSV Builder', ()=> {
	const builder = new CsvBuilder();

	it('builds csv lines', () => {
		//const lines = builder.aFileWithLine('a', 'b')
		const lines = builder.aFileWithLine(builder.buildLine('a', 'b'))
		expect(lines[0]).toBe('Field1, Field2')
		expect(lines[1]).toBe('a,b')
	})

	it('builds csv lines with more fields than headers', () => {
		const lines = builder.aFileWithLine(builder.buildLine('a', 'b', 'c'))
		expect(lines[1]).toBe('a,b,c')
	})
})