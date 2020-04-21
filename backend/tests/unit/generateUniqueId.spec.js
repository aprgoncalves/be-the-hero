const generateUniqueId = require('../../src/utils/generateUniqueld');

describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = generateUniqueId();
        
        expect(id).toHaveLength(8);
    });
});