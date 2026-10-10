// Peer-reviewed publications, newest first.
// - `authors`: "*" suffix marks equal contribution; `me: true` highlights you.
// - `type`: conference | journal | workshop (drives the filter tabs).
// - `image`: optional teaser in /public; without one, a generated thumbnail is shown.
// - `links`: any of paper, pdf, arxiv, code, project, slides, video, poster.
const ME = { name: "Md Mahedi Hasan Rigan", me: true };

const publications = [
  {
    id: "rigan2026mvpisplat",
    title: "MVPISplat: Multi-View Photometric Inconsistency for Defending 3D Gaussian Splatting Attacks",
    authors: [ME, { name: "Nicole Meng" }, { name: "Miao Yin" }, { name: "Yingjie Lao" }, { name: "Faysal Hossain Shezan" }],
    venue: "Advances in Neural Information Processing Systems (NeurIPS)",
    venueShort: "NeurIPS 2026",
    year: 2026,
    type: "conference",
    tags: ["3D Gaussian Splatting", "Adversarial Defense"],
    links: {},
  },
  {
    id: "rigan2026gsfilter",
    title: "Adversarial Defense in Gaussian Splatting Using 3D Gaussian Filtering",
    authors: [ME, { name: "Nicole Meng" }, { name: "Miao Yin" }, { name: "Yingjie Lao" }, { name: "Faysal Hossain Shezan" }],
    venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (SPAR-3D)",
    venueShort: "CVPR 2026 Workshop",
    year: 2026,
    type: "workshop",
    tags: ["3D Gaussian Splatting", "Adversarial Defense"],
    links: {},
  },
  {
    id: "islam2025h2opulse",
    title: "H2OPulse: Smartphone-Assisted Vein Evaluation for Early Recognition of Dehydration",
    authors: [
      { name: "Towhid Muhammad", equal: true },
      { ...ME, equal: true },
      { name: "Olid Hasan Bhuiyan" },
      { name: "Tanzima Hashem" },
      { name: "Md Mahbubur Rahman" },
    ],
    venue: "Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), Vol. 9, No. 2",
    venueShort: "ACM IMWUT 2025",
    year: 2025,
    type: "journal",
    tags: ["Ubiquitous Computing", "Mobile Health", "Computer Vision"],
    image: "/dehydration.png",
    links: { paper: "https://dl.acm.org/doi/10.1145/3729490" },
  },
  {
    id: "ahmed2025webbots",
    title: "Detecting Stealthy Web Bots: A Behavioral Analysis Framework for OpenWPM Automation",
    authors: [
      { name: "Shakil Ahmed", equal: true },
      { ...ME, equal: true },
      { name: "Md. Shohrab Hossain" },
      { name: "Anupam Das" },
    ],
    venue: "IEEE Transactions on Dependable and Secure Computing (TDSC)",
    venueShort: "IEEE TDSC 2025",
    year: 2025,
    type: "journal",
    tags: ["Web Security", "Bot Detection", "Machine Learning"],
    image: "/botdetection.png",
    links: { paper: "https://ieeexplore.ieee.org/document/11275848/" },
  },
];

export default publications;
