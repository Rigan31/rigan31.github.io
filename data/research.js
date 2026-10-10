// "Research focus" on the About page. `icon` keys map to icons in app/about/page.js.
export const researchIntro =
  "My research sits at the intersection of computer vision, multimodal learning, and security. I want to understand how modern AI systems, from 3D scene representations to vision-language and generative audio models, can be manipulated, and to build defenses that keep them reliable in the real world.";

export const researchAreas = [
  {
    icon: "cube",
    title: "Security of 3D Vision",
    text: "Adversarial attacks and defenses for 3D and 4D Gaussian Splatting, such as catching poisoned training views through multi-view photometric inconsistency.",
    keywords: ["3DGS", "4DGS", "Adversarial robustness"],
  },
  {
    icon: "eye",
    title: "Multimodal LLMs",
    text: "Robustness and security of vision-language models: how adversarial inputs can steer their behavior, and how to defend against it.",
    keywords: ["VLMs", "LLMs", "Trustworthy AI"],
  },
  {
    icon: "audio",
    title: "Generative Audio & Content Protection",
    text: "Protecting creators' music from unauthorized exploitation by generative AI models.",
    keywords: ["Audio GenAI", "Data protection"],
  },
  {
    icon: "phone",
    title: "Ubiquitous Computing & Web Security",
    text: "Applied ML for mobile health and the web, from smartphone-based dehydration detection to behavioral bot detection.",
    keywords: ["Mobile sensing", "Bot detection"],
  },
];
