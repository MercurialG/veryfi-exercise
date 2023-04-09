**Receipt OCR App**

This app takes an image of a receipt as input, sends it to the Veryfi OCR API, and returns the processed data as a visualized receipt and JSON.  
App is deployed at https://veryfi-exercise.vercel.app/

**Technologies Used**  
Next.js  
Tailwind CSS

**Prerequisites**  
Node.js,
Veryfi API credentials

**Installing**  
Clone the repository
Install dependencies using `npm install`

**Configuration**  
You need to configure the Veryfi API credentials by setting the following environment variables:

    ENVIRONMENT_URL
    CLIENT_ID
    USER_NAME
    API_KEY

Or if its just for testing you can provide them directly to the /pages/api/upload.js

**Running the App**

- Start the development server using `npm run dev`
- Navigate to http://localhost:3000 in your browser
- Upload an image of a receipt or take a photo of it if you're on
  mobile(Browser will ask you for permission to use device's camera)
  The app will send the image to the Veryfi OCR API and return the processed data as a visualized receipt and JSON

**Acknowledgements**  
This app uses the Veryfi OCR API to process receipt data.
You can find the documentation for the Veryfi OCR API [here](https://hub.veryfi.com/api/docs/toc/).

**Summary of development**  
I've chosen next js to use its serverless functions as my API point not to create extra server for one function. I wanted to use usual input and a camera input for which tried to use react-webcam package, to find that usual html input on mobile can use device camera and works better in terms of image quality than react-webcam, so it was taken out.

First I used react context to store states, but it was an overkill as i needed only three states, so i rearranged components and moved all the logic to the only page i have and left components to be "dumb". I've managed all the needed states using useState hook and passed them to the components.
