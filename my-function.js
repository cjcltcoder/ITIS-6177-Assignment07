export const handler = async (event) => {
  try {
    const inputParam = event.queryStringParameters?.keyword;

    if (!inputParam) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, message: 'Missing keyword parameter' })
      };
    }

    const processed = `Carlos Juarez says ${inputParam}`;

    return {
      statusCode: 200,
      body: JSON.stringify({ processed })
    };
  } catch (e) {
    console.error('Error processing request', e);

    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: 'An error occurred', error: e.message })
    };
  }
};
