module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: 'us-east-2',
      params: {
        Bucket: 'codesign-media',
      },
    },
  },
 /*  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('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'),
      },
      settings: {
        defaultFrom: 'jose.luis@codesign.mx',
        defaultReplyTo: 'jose.luis@codesign.mx',
        testAddress: 'jose.luis@codesign.mx',
      },
    },
  }, */
});
 