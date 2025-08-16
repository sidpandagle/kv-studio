# KV PACKAGING SOLUTIONS Studio

## AI Chat Setup

The sustainability page includes an AI-powered tool that suggests sustainable packaging options. To enable full AI functionality:

1. **Get a Google AI API Key**:
   - Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Create a new API key
   - Copy the API key

2. **Configure Environment Variables**:
   - Copy `.env.local.example` to `.env.local`
   - Replace `your_api_key_here` with your actual Google AI API key:
     ```
     GOOGLE_GENAI_API_KEY=your_actual_api_key_here
     ```

3. **Restart the Development Server**:
   ```bash
   npm run dev
   ```

## Features

- **Fallback Mode**: The AI chat works even without an API key, providing general sustainable packaging suggestions
- **AI-Powered Mode**: With a configured API key, provides personalized suggestions based on product type and transportation needs
- **Error Handling**: Gracefully handles API errors and provides fallback responses

## Testing the AI Chat

1. Navigate to `/sustainability`
2. Fill in the form with:
   - Product Type: e.g., "Glass bottles for beverages"
   - Transportation Needs: e.g., "International shipping, fragile items"
3. Click "Get Suggestions"
4. View the AI-generated sustainable packaging recommendations

## Development

To work with AI flows:

```bash
# Start Genkit development server (optional)
npm run genkit:dev

# Start Next.js development server
npm run dev
```
