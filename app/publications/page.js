import { FaGoogleScholar } from "react-icons/fa6";
import PageHeader from "@/components/PageHeader";
import PublicationList from "@/components/PublicationList";
import profile from "@/data/profile";
import publications from "@/data/publications";

export const metadata = {
  title: "Publications",
  description: `Peer-reviewed publications by ${profile.name}.`,
};

export default function Publications() {
  return (
    <div className="container-page pb-24 pt-12 lg:pt-16">
      <PageHeader
        eyebrow="Research"
        title="Publications"
        aside={
          <a href={profile.links.scholar} target="_blank" rel="noreferrer" className="btn-secondary">
            <FaGoogleScholar />
            Google Scholar
          </a>
        }
      >
        <p className="text-[0.95rem] text-faint">
          <sup className="text-accent">*</sup> denotes equal contribution.
        </p>
      </PageHeader>

      <div className="mt-10">
        <PublicationList publications={publications} />
      </div>
    </div>
  );
}
