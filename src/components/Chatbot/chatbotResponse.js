// Enhanced chatbot response logic for Reely AI
import intents from './intents';

function matchIntent(message) {
  const msg = message.toLowerCase();

  // How-to-use detection
  const howToUseKeywords = [
    'how to use', 'how do i use', 'steps', 'guide', 'instructions', 'get started', 'use platform', 'how to upload', 'upload video', 'generate subtitles', 'caption video'
  ];
  const isHowToUse = howToUseKeywords.some(keyword => msg.includes(keyword));

  if (isHowToUse) {
    return {
      type: 'rich',
      content: [
        'To use the platform for generating subtitles, follow these steps:',
        '1. **Sign Up or Log In**: Create an account or log in if you already have one.',
        '2. **Upload Your Video**: Go to the upload section and drag & drop or browse to upload your video file.',
        '3. **Wait for Upload**: Processing time depends on size and speed; a progress bar will show the status.',
        '4. **Generate Subtitles**: Choose your language and hit the generate button.',
        '5. **Edit and Customize**: Customize font, color, animations, and more before exporting.'
      ]
    };
  }

  // Enhanced pattern matching with better context understanding
  for (const intent of intents) {
    for (const pattern of intent.patterns) {
      // Check for exact matches, partial matches, and related keywords
      if (
        msg === pattern.toLowerCase() ||
        msg.includes(pattern.toLowerCase()) ||
        msg.split(' ').some(word => pattern.toLowerCase().includes(word)) ||
        pattern.toLowerCase().split(' ').some(word => msg.includes(word))
      ) {
        // Add some personality and context to responses
        const responses = intent.responses.map(response => {
          if (intent.tag === 'greeting') {
            return `${response} 🎬✨ I'm here to help you with automatic video captioning!`;
          } else if (intent.tag === 'video_upload') {
            return `${response} 📹 Our AI can process various video formats and add beautiful captions!`;
          } else if (intent.tag === 'caption_styles') {
            return `${response} 🎨 Make your captions stand out with custom fonts, colors, and effects!`;
          } else if (intent.tag === 'pricing') {
            return `${response} 💰 We offer competitive pricing for professional video captioning services!`;
          } else if (intent.tag === 'processing_time') {
            return `${response} ⚡ Our AI works quickly to get your captioned videos ready!`;
          } else if (intent.tag === 'technical_support') {
            return `${response} 🔧 Our technical team is ready to help you with any issues!`;
          } else if (intent.tag === 'features') {
            return `${response} 🚀 Discover all the amazing features that make Reely special!`;
          }
          return response;
        });
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        return randomResponse;
      }
    }
  }

  // Enhanced fallback responses with helpful suggestions
  const fallbackResponses = [
    "I'd love to help you with that! 🤔 Could you tell me more about what you need help with? I can assist with video uploads, caption styling, pricing, or technical support! 💜",
    "That's interesting! 🌟 While I process your question, feel free to ask me about our video captioning features, supported formats, or how to get started! 🎬",
    "I'm here to help! 🤖 Try asking me about:\n• How to upload videos 📹\n• Caption customization options 🎨\n• Pricing information 💰\n• Technical support 🔧",
    "Let me help you better! ✨ You can ask me about video captioning, our AI features, or how Reely can improve your content! What would you like to know? 🎯"
  ];

  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}

export default matchIntent;