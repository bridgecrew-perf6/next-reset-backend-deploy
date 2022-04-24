module.exports = ({ env }) => {

  if(env('NODE_ENV') === 'production') {
    return {
      upload: {
        provider: "aws-s3",
        providerOptions: {
          accessKeyId: env("AWS_ACCESS_KEY_ID"),
          secretAccessKey: env("AWS_ACCESS_SECRET"),
          region: env("AWS_REGION"),
          params: {
            bucket: env("AWS_BUCKET"), // or "Bucket", @aws-sdk requires capitalized properties, but the convention for this file is lowercased, but the plugin understands both
          },
        },
      },
    }
  }

  return {

  }
};
