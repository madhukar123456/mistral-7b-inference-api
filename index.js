require("dotenv").config();

async function query(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-v0.1",
    {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
        "Content-Type": "application/json", // Set the Content-Type header
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}

query({ inputs: "My name is Henry." }).then((response) => {
  console.log(JSON.stringify(response));
});
