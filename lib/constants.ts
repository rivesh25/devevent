export interface EventItem {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: EventItem[] = [
  {
    title: "Google I/O 2026",
    image: "/images/event1.png",
    slug: "google-io-2026",
    location: "Shoreline Amphitheatre, Mountain View, CA",
    date: "May 20, 2026",
    time: "10:00 AM PDT",
  },
  {
    title: "GitHub Universe 2026",
    image: "/images/event2.png",
    slug: "github-universe-2026",
    location: "Fort Mason Center, San Francisco, CA",
    date: "October 28, 2026",
    time: "9:00 AM PDT",
  },
  {
    title: "ViteConf 2026",
    image: "/images/event3.png",
    slug: "viteconf-2026",
    location: "Online",
    date: "October 3, 2026",
    time: "12:00 PM CEST",
  },
  {
    title: "React Summit 2026",
    image: "/images/event4.png",
    slug: "react-summit-2026",
    location: "Beurs van Berlage, Amsterdam, Netherlands",
    date: "June 12, 2026",
    time: "9:30 AM CEST",
  },
  {
    title: "AWS re:Invent 2026",
    image: "/images/event5.png",
    slug: "aws-reinvent-2026",
    location: "The Venetian, Las Vegas, NV",
    date: "December 1, 2026",
    time: "8:00 AM PST",
  },
  {
    title: "MLH Global Hackathon 2026",
    image: "/images/event6.png",
    slug: "mlh-global-hackathon-2026",
    location: "Online",
    date: "March 14, 2026",
    time: "11:00 AM EST",
  },
];
