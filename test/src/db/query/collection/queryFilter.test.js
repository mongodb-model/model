// Import necessary dependencies and modules for testing
const assert = require('assert');
const jest = require('jest');
const { EventEmitter } = require('events');

// Mock the Observable object
const Observable = {
    db: 'testDb',
    collection: 'testCollection',
    emit: jest.fn(),
  };
// Mock the Observable object
// const Observable = new EventEmitter();
// Observable.db = 'testDb';
// Observable.collection = 'testCollection';
// Observable.emit = jest.fn();

class Client {
    constructor() {
      this.db = jest.fn().mockReturnThis();
      this.collection = jest.fn().mockReturnThis();
      this.close = jest.fn().mockResolvedValue();
    }
  }
// Mock the Client class
// class Client {
//   constructor() {
//     this.db = jest.fn().mockReturnThis();
//     this.collection = jest.fn().mockReturnThis();
//     this.close = jest.fn().mockResolvedValue();
//   }
// }

// Import the function to be tested
const queryFilter = require('./your-module-file')(Observable, new Client());

describe('queryFilter', () => {
  it('should execute find method without toArray option', async () => {
    // Mock the connection object
    const connection = {
      find: jest.fn().mockReturnThis(),
    };

    // Set up the expected result
    const expectedResult = [{ name: 'John' }, { name: 'Jane' }];

    // Mock the find method
    connection.find.mockResolvedValue(expectedResult);

    // Assign the mocked connection to the database.collection
    new Client().db().collection.mockReturnValue(connection);

    // Call the queryFilter function
    const result = await queryFilter('find')(false);

    // Check the expected result and function calls
    expect(result).toEqual(expectedResult);
    expect(connection.find).toHaveBeenCalledWith({});
    expect(Observable.emit).toHaveBeenCalledWith('find', expectedResult);
    expect(Observable.emit).not.toHaveBeenCalledWith('find-error', expect.anything());
    expect(new Client().close).toHaveBeenCalled();
  });

  it('should execute find method with toArray option', async () => {
    // Mock the connection object
    const connection = {
      find: jest.fn().mockReturnThis(),
      toArray: jest.fn().mockResolvedValue([{ name: 'John' }, { name: 'Jane' }]),
    };

    // Assign the mocked connection to the database.collection
    new Client().db().collection.mockReturnValue(connection);

    // Call the queryFilter function
    const result = await queryFilter('find')(true);

    // Check the expected result and function calls
    expect(result).toEqual([{ name: 'John' }, { name: 'Jane' }]);
    expect(connection.find).toHaveBeenCalledWith({});
    expect(connection.toArray).toHaveBeenCalled();
    expect(Observable.emit).toHaveBeenCalledWith('find', [{ name: 'John' }, { name: 'Jane' }]);
    expect(Observable.emit).not.toHaveBeenCalledWith('find-error', expect.anything());
    expect(new Client().close).toHaveBeenCalled();
  });

  it('should execute find method with custom filter', async () => {
    // Mock the connection object
    const connection = {
      find: jest.fn().mockReturnThis(),
    };

    // Set up the expected result
    const expectedResult = [{ name: 'John' }];

    // Mock the find method
    connection.find.mockResolvedValue(expectedResult);

    // Assign the mocked connection to the database.collection
    new Client().db().collection.mockReturnValue(connection);

    // Call the queryFilter function with a custom filter
    const result = await queryFilter('find')(false, { age: { $gte: 18 } });

    // Check the expected result and function calls
    expect(result).toEqual(expectedResult);
    expect(connection.find).toHaveBeenCalledWith({ age: { $gte: 18 } });
    expect(Observable.emit).toHaveBeenCalledWith('find', expectedResult);
    expect(Observable.emit).not.toHaveBeenCalledWith('find-error', expect.anything());
    expect(new Client().close).toHaveBeenCalled();
  });

  it('should catch and handle errors', async () => {
    // Mock the connection object to throw an error
    const connection = {
      find: jest.fn().mockReturnThis(),
    };

    // Mock the error
    const error = new Error('Database connection failed');

    // Mock the find method to throw an error
    connection.find.mockRejectedValue(error);

    // Assign the mocked connection to the database.collection
    new Client().db().collection.mockReturnValue(connection);

    // Call the queryFilter function
    const result = await queryFilter('find')(false);

    // Check the error handling and function calls
    expect(result).toEqual(error);
    expect(connection.find).toHaveBeenCalledWith({});
    expect(Observable.emit).toHaveBeenCalledWith('find-error', error);
    expect(Observable.emit).not.toHaveBeenCalledWith('find', expect.anything());
    expect(new Client().close).toHaveBeenCalled();
  });

  it('should close the client connection', async () => {
    // Mock the connection object
    const connection = {
      find: jest.fn().mockReturnThis(),
    };

    // Set up the expected result
    const expectedResult = [{ name: 'John' }];

    // Mock the find method
    connection.find.mockResolvedValue(expectedResult);

    // Assign the mocked connection to the database.collection
    new Client().db().collection.mockReturnValue(connection);

    // Call the queryFilter function
    await queryFilter('find')(false);

    // Check if the client connection was closed
    expect(new Client().close).toHaveBeenCalled();
  });
});

   
