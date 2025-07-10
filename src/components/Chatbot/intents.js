// intents.js - Enhanced intents for Reely AI - Video Captioning Assistant
const intents = [
  {
    tag: 'greeting',
    patterns: [
      'hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening',
      'howdy', 'greetings', "what's up", 'yo', 'hola', 'salut', 'bonjour'
    ],
    responses: [
      'Hello! Welcome to Reely AI! 🎬',
      'Hi there! Ready to add amazing captions to your videos? ✨',
      "Hey! I'm your personal video captioning assistant! 🤖",
      'Greetings! Let’s make your videos more accessible with AI captions! 🌟',
      "Hello and welcome! I'm here to help you create stunning captioned videos! 💜"
    ]
  },
  {
    tag: 'goodbye',
    patterns: [
      'bye', 'goodbye', 'see you', 'later', 'farewell', 'catch you later',
      'talk to you later', 'ttyl', 'peace', 'adios', 'au revoir'
    ],
    responses: [
      'Goodbye! Happy captioning! 🎬✨',
      "See you later! Don't forget to create amazing captioned videos! 💜",
      'Farewell! Come back anytime for video captioning help! 🌟',
      'Bye! Keep making your content more accessible! 🚀',
      'Take care! Your videos are going to look amazing with captions! 🎯'
    ]
  },
  {
    tag: 'video_upload',
    patterns: [
      'upload', 'video', 'file', 'how to upload', 'add video', 'submit video',
      'video file', 'mp4', 'mov', 'avi', 'format', 'supported formats'
    ],
    responses: [
      'You can upload videos directly through our dashboard or provide a public URL! We support MP4, MOV, AVI, and many other formats.',
      'Simply drag and drop your video file, or paste a YouTube/Vimeo URL! Our AI will handle the rest.',
      "Upload is easy! Just click the upload button and select your video file. We'll process it automatically!",
      'We accept various video formats including MP4, MOV, AVI, and more. You can upload directly or share a public video URL!',
      "Ready to caption your video? Upload it through our simple interface - just drag, drop, and let our AI work its magic!"
    ]
  },
  {
    tag: 'caption_styles',
    patterns: [
      'captions', 'styles', 'fonts', 'colors', 'customization', 'styling',
      'font size', 'text color', 'appearance', 'design', 'custom captions'
    ],
    responses: [
      'Customize your captions with different fonts, colors, sizes, and stroke effects! Make them uniquely yours.',
      'Choose from various font styles, adjust colors, add outlines, and control padding to match your brand!',
      'Our caption editor lets you personalize font type, size, color, stroke width, and positioning!',
      'Style your captions with custom fonts, vibrant colors, shadow effects, and perfect positioning!',
      'Create beautiful captions that match your content! Adjust fonts, colors, outlines, and more styling options.'
    ]
  },
  {
    tag: 'pricing',
    patterns: [
      'price', 'cost', 'pricing', 'how much', 'payment', 'subscription',
      'free trial', 'plans', 'billing', 'charges', 'fees'
    ],
    responses: [
      'We offer flexible pricing plans to suit different needs! Check our pricing page for current rates and free trial options.',
      'Our pricing is competitive and transparent! We have plans for individuals, creators, and businesses.',
      'Great question! We offer affordable pricing with various tiers. Start with our free trial to test our service!',
      'Pricing depends on your usage and needs. We have cost-effective plans for everyone from hobbyists to professionals!',
      'We believe in fair pricing! Check out our plans page for detailed pricing information and special offers.'
    ]
  },
  {
    tag: 'processing_time',
    patterns: [
      'how long', 'processing time', 'duration', 'wait time', 'speed',
      'fast', 'quick', 'time', 'minutes', 'hours', 'processing speed'
    ],
    responses: [
      'Processing time depends on video length, but most videos are ready in just a few minutes!',
      'Our AI works quickly! Short videos (under 5 minutes) typically process in 1-2 minutes.',
      'We pride ourselves on speed! Most videos are captioned within 5–10 minutes depending on length.',
      "Fast processing is our specialty! You'll get your captioned video back quickly, usually within minutes!",
      "Processing speed varies by video length, but we're optimized for quick turnaround — usually under 10 minutes!"
    ]
  },
  {
    tag: 'technical_support',
    patterns: [
      'help', 'support', 'problem', 'issue', 'error', 'bug', 'technical',
      'not working', 'broken', 'fix', 'troubleshoot', 'assistance'
    ],
    responses: [
      "I'm here to help! What specific issue are you experiencing? I can guide you through troubleshooting steps.",
      "Technical issues? No problem! Describe what's happening and I'll help you resolve it quickly.",
      "Let's fix this together! Tell me more about the problem you're facing and I'll provide step-by-step assistance.",
      "Technical support is available! What seems to be the issue? I'm ready to help you get back on track.",
      "Don't worry, we'll sort this out! Share the details of your problem and I'll help you find a solution."
    ]
  },
  {
    tag: 'features',
    patterns: [
      'features', 'capabilities', 'what can you do', 'functions', 'tools',
      'options', 'abilities', 'services', 'offerings', 'benefits'
    ],
    responses: [
      'Reely offers AI-powered transcription, custom caption styling, multiple format support, and lightning-fast processing!',
      'Our key features include: automatic speech-to-text, customizable captions, video format support, and cloud processing!',
      'We provide intelligent captioning, style customization, batch processing, and seamless integration with popular platforms!',
      'Features include: AI transcription, custom fonts & colors, multiple export formats, and real-time processing status!',
      'Reely combines cutting-edge AI with user-friendly design: smart captions, style controls, fast processing, and more!'
    ]
  },
  {
    tag: 'accuracy',
    patterns: [
      'accuracy', 'correct', 'precise', 'quality', 'how accurate',
      'mistakes', 'errors', 'AI quality', 'transcription quality', 'reliable'
    ],
    responses: [
      'Our AI delivers high accuracy rates, typically 95%+ for clear audio! Quality depends on audio clarity and accents.',
      'We use advanced AI models for superior accuracy! Clear audio with minimal background noise gives best results.',
      'Accuracy is our priority! Our AI is trained on diverse datasets and continuously improving for better results.',
      'We achieve excellent accuracy with good quality audio! For best results, ensure clear speech and minimal noise.',
      'Our transcription accuracy is industry-leading! The AI performs best with clear audio and standard speech patterns.'
    ]
  },
  {
    tag: 'languages',
    patterns: [
      'languages', 'language support', 'multilingual', 'different languages',
      'spanish', 'french', 'german', 'chinese', 'japanese', 'international'
    ],
    responses: [
      'We support multiple languages including English, Spanish, French, German, and many more! Our AI is multilingual.',
      'Our language support is extensive! We handle various languages and accents for global content creation.',
      'Multilingual captioning is available! We support major world languages with high accuracy rates.',
      'We cater to international creators! Our AI can transcribe and caption videos in numerous languages.',
      'Language barriers? Not a problem! We support diverse languages to make your content globally accessible.'
    ]
  },
  {
    tag: 'how_to_use',
    patterns: [
      'how to use', 'guide', 'instructions', 'walkthrough', 'tutorial', 'steps', 'get started', 'onboarding', 'help me use', 'using reely', 'how does it work', 'demo'
    ],
    responses: [
      'Here’s how to use Reely:\n1. Sign up or log in.\n2. Upload your video or paste a public URL.\n3. Customize your captions (fonts, colors, etc).\n4. Click process and let our AI work its magic!\n5. Download your captioned video. Need more help? Just ask! 😊',
      'Getting started is easy! Upload a video, choose your caption style, and download the result. For a step-by-step guide, type "tutorial".',
      'To use Reely: 1) Log in, 2) Upload or link your video, 3) Customize captions, 4) Process, 5) Download. Need details? I can walk you through each step!'
    ]
  },
  {
    tag: 'security_privacy',
    patterns: [
      'security', 'privacy', 'safe', 'data', 'is my video safe', 'private', 'confidential', 'secure', 'protection', 'gdpr', 'compliance', 'how is my data used', 'delete my data'
    ],
    responses: [
      'Your privacy is our priority! Videos are processed securely and deleted after completion. We never share your data.',
      'We use industry-standard security to protect your videos and data. You’re in safe hands!',
      'All uploads are encrypted and processed privately. You control your data at every step.',
      'Reely is GDPR-compliant and respects your privacy. Your content is never used for training or shared with third parties.'
    ]
  },
  {
    tag: 'integration_api',
    patterns: [
      'api', 'integration', 'connect', 'webhook', 'automate', 'third party', 'platforms', 'zapier', 'workflow', 'developer', 'sdk', 'embed', 'plugin'
    ],
    responses: [
      'We offer API access and integrations for advanced workflows! Contact us for API documentation and integration support.',
      'Looking to automate captioning? Our API and webhooks make it easy to connect Reely with your favorite tools.',
      'Integrate Reely with other platforms using our API or Zapier. Need help? I can provide more details!'
    ]
  },
  {
    tag: 'accessibility',
    patterns: [
      'accessibility', 'a11y', 'accessible', 'disability', 'hearing impaired', 'subtitles', 'screen reader', 'ada', 'wcag', 'inclusive', 'assistive', 'captioning for deaf', 'universal design'
    ],
    responses: [
      'Reely is designed for accessibility! Our captions help make videos inclusive for everyone, including the hearing impaired.',
      'We follow accessibility best practices (ADA, WCAG) to ensure your content is usable by all audiences.',
      'Captions improve accessibility and reach. Our platform supports clear, readable subtitles for everyone.'
    ]
  },
  {
    tag: 'feedback_feature_request',
    patterns: [
      'feedback', 'feature request', 'suggestion', 'improve', 'add feature', 'request', 'idea', 'wish', 'can you add', 'new feature', 'feature suggestion'
    ],
    responses: [
      'We love feedback! Please share your suggestions or feature requests and our team will review them.',
      'Got an idea to improve Reely? Let us know! We’re always looking to make our platform better.',
      'Your feedback matters! Share your thoughts and help us shape the future of Reely.'
    ]
  }
];

export default intents;
