// require("dotenv").config()
// module.exports = ({ env }) => ({
//     // ...
//     upload: {
//       provider: 'cloudinary',
//       providerOptions: {
//         cloud_name: env('CLOUDINARY_NAME'),
//         api_key: env('CLOUDINARY_KEY'),
//         api_secret: env('CLOUDINARY_SECRET'),
//       },
//       actionOptions: {
//         upload: {},
//         delete: {},
//       },
//     },

    
//     // ...
//   });

 

//imediately change it to env
  module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: "duov6f9b3",
        api_key: "259823422918374",
        api_secret: "7F-dbOFUJeL9hw4V7-8Xkh42kMY",
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },

    
    // ...
  });

 