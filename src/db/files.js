const { MongoClient, GridFSBucket } = require('mongodb');
const fs = require('fs');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Create a new MongoClient
const client = new MongoClient(uri);

// File path and name
const filePath = '/path/to/file.ext';
const fileName = 'file.ext';

async function saveFileToMongoDB() {
  try {
    // Connect to MongoDB
    await client.connect();

    // Access the database
    const database = client.db('your_database_name');

    // Create a new GridFSBucket instance
    const bucket = new GridFSBucket(database);

    // Read the file from disk
    const fileStream = fs.createReadStream(filePath);

    // Create a file upload stream
    const uploadStream = bucket.openUploadStream(fileName);

    // Pipe the file stream to the upload stream
    fileStream.pipe(uploadStream);

    // Wait for the upload to finish
    await new Promise((resolve, reject) => {
      uploadStream.on('error', reject);
      uploadStream.on('finish', resolve);
    });

    console.log('File saved successfully!');
  } catch (error) {
    console.error('Error saving file:', error);
  } finally {
    // Close the MongoClient connection
    await client.close();
  }
}

// Call the function to save the file
saveFileToMongoDB();