
const apiKey = "";

// node --version # Should be >= 18
//npm install @google/generative-ai

// Ensure Node.js version >= 18 and packages installed:
// npm install @google/generative-ai

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const MODEL_NAME = "gemini-2.5-pro";  // Verify this model exists in your environment or replace it with a valid model name
const API_KEY = "AIzaSyBzE3NcaXhFgpJUglVyFFoaZVoWffmqtBs";

async function runChat(prompt) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [],
  });

//   try {
//     // Use the parameter 'prompt' instead of the fixed string "prompt"
//     const result = await chat.sendMessage(prompt);
//     const response = result.response;
//     console.log(response.text());
//     return response.text();
//   } catch (error) {
//     console.error("Error in runChat:", error);
//     throw error;
//   }
 
        const result = await chat.sendMessage(prompt);
        const response = result.response;
        console.log(response.text());
        return response.text();       

}

export default runChat;












// import {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
// } from "@google/generative-ai" 

// const MODEL_NAME ="gemini-1.0-pro";
// const API_KEY = "AIzaSyBzE3NcaXhFgpJUglVyFFoaZVoWffmqtBs";

// async function runChat(prompt) {
//    const genAI= new GoogleGenerativeAI(API_KEY);
//    const model = genAI.getGenerativeModel({model: MODEL_NAME });


// const generationConfig = {
//     temperature: 0.9,
//     topK: 1,
//     topP: 1,
//     maxOutputTokens: 2048,
// };

// const safetySettings = [
//     {
//         category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//         threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//         category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//         threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//    },
//    {
//      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
//      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//    },

//    {
//     category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//    },
// ];

// const chat = model.startChat({
//    generationConfig,
//    safetySettings,
//    history: [
//    ],
//  });


// const result = await chat.sendMessage("prompt");
// const response =result.response;
// console.log(response.text());
// }

// export default runChat;



// To run this code, install dependencies:
// npm install @google/genai mime

// const { GoogleGenAI } = require('@google/genai');
// const mime = require('mime');
// const { writeFile } = require('fs');

// function saveBinaryFile(fileName, content) {
//   writeFile(fileName, content, 'utf8', (err) => {
//     if (err) {
//       console.error(`Error writing file ${fileName}:`, err);
//       return;
//     }
//     console.log(`File ${fileName} saved to file system.`);
//   });
// }

// async function main() {
//   const ai = new GoogleGenAI({
//     apiKey: process.env.GEMINI_API_KEY,
//   });
//   const config = {
//     responseModalities: [
//       'IMAGE',
//       'TEXT',
//     ],
//   };
//   const model = 'gemini-2.5-flash-image-preview';
//   const contents = [
//     {
//       role: 'user',
//       parts: [
//         {
//           text: `INSERT_INPUT_HERE`,
//         },
//       ],
//     },
//   ];

//   const response = await ai.models.generateContentStream({
//     model,
//     config,
//     contents,
//   });
//   let fileIndex = 0;
//   for await (const chunk of response) {
//     if (!chunk.candidates || !chunk.candidates[0].content || !chunk.candidates[0].content.parts) {
//       continue;
//     }
//     if (chunk.candidates?.[0]?.content?.parts?.[0]?.inlineData) {
//       const fileName = `ENTER_FILE_NAME_${fileIndex++}`;
//       const inlineData = chunk.candidates[0].content.parts[0].inlineData;
//       const fileExtension = mime.getExtension(inlineData.mimeType || '');
//       const buffer = Buffer.from(inlineData.data || '', 'base64');
//       saveBinaryFile(`${fileName}.${fileExtension}`, buffer);
//     }
//     else {
//       console.log(chunk.text);
//     }
//   }
// }

// main();
