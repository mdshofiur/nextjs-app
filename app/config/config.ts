import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: 'YOUR_ACCESS_KEY',
    secretAccessKey: 'YOUR_SECRET_KEY',
    region: 'us-east-1' // Replace with your desired AWS region
  });