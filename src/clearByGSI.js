import DDB from './ddb';
import deleteBulk from './deleteBulk';

// To clear, query via gsi and delete one by one
// Do not do this in production
const clearByGSI = async ({ fieldName, fieldValue, indexName }) => {
  const params = {
    IndexName: indexName,
    KeyConditionExpression: '#pk = :pk',
    ExpressionAttributeNames: { '#pk': fieldName },
    ExpressionAttributeValues: {
      ':pk': fieldValue,
    },
  };

  return DDB('query', params).then(async (data) => {
    await deleteBulk(data.Items);
  });
};

export default clearByGSI;
