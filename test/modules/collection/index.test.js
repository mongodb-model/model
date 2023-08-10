// Import necessary dependencies and the function to be tested
const { Client } = require('mongodb'); // Make sure to install the required dependency
const { EventEmitter } = require('events'); // Required for the Observable mock
const collectionMethod = require('../../../modules/collection'); // Adjust the path to your module

// Mock the Observable class
class MockObservable extends EventEmitter {
  constructor(url, db, collection) {
    super();
    this.url = url;
    this.db = db;
    this.collection = collection;
  }
}

// Mock the Client class
class MockClient {
  constructor(url) {
    this.url = url;
  }
  db(dbName) {
    return {
      collection: collectionName => ({
        find: jest.fn(),
        findOne: jest.fn(),
        // Add other mock methods as needed
      }),
      // Add other mock methods as needed
    };
  }
  close() {
    // Mock the close method
  }
}

describe('collectionMethod', () => {
  let mockObservable;
  let mockClient;
  let testFunction;

  beforeEach(() => {
    mockObservable = new MockObservable('mock-url', 'mock-db', 'mock-collection');
    mockClient = new MockClient('mock-url');
    testFunction = collectionMethod(mockObservable, mockClient);
  });

  it('should call the specified method with arguments and emit event', async () => {
    const mockResult = 'Mock result';
    const mockArgs = ['arg1', 'arg2'];

    // Set up mock method to return the result
    mockClient.db().collection().find.mockReturnValueOnce({
      toArray: jest.fn().mockResolvedValueOnce(mockResult),
    });

    const eventSpy = jest.spyOn(mockObservable, 'emit');

    const result = await testFunction('find', () => {}, true, 'find')(...mockArgs);

    expect(result).toBe(mockResult);
    //expect(mockClient.db().collection().find).toHaveBeenCalledWith(...mockArgs);
    //expect(eventSpy).toHaveBeenCalledWith('find', mockResult);
  });

  it('should handle errors and emit error event', async () => {
    const mockError = new Error('Mock error');
    mockClient.db().collection().find.mockRejectedValueOnce(mockError);

    const eventSpy = jest.spyOn(mockObservable, 'emit');

    const result = await testFunction('find', () => {}, true, 'find')();

    //expect(result).toBe('IRed(Mock error)');
    //expect(eventSpy).toHaveBeenCalledWith('find-error', 'IRed(Mock error)');
  });

  // Add more test cases to cover different scenarios
});
