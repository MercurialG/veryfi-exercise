const USER_NAME = process.env.USERNAME;
const API_KEY = process.env.API_KEY;
const CLIENT_ID = process.env.CLIENT_ID;
const ENVIRONMENT_URL = process.env.ENVIRONMENT_URL;

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "5mb",
    },
  },
};

// Making a call to veryfi API using base64 string
export default async function handler(req, res) {
  const { fileName, fileData } = JSON.parse(req.body);
  console.log(fileName);
  const jsonData = JSON.stringify({
    file_name: fileName,
    file_data: fileData,
    boost_mode: true,
  });
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "CLIENT-ID": CLIENT_ID,
      AUTHORIZATION: `apikey ${USER_NAME}:${API_KEY}`,
    },
    body: jsonData,
  };

  try {
    const response = await fetch(
      `${ENVIRONMENT_URL}/api/v8/partner/documents/`,
      options
    );
    const data = await response.json();
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
