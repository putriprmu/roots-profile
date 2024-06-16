import OurTeams from "./OurTeams";
import { createClient } from "contentful";

async function getTeams() {
  try {
    const client = createClient({
      space: "f7ypn97c93c5",
      accessToken: "kx3ovVciYaav79a5e9W220MIvdeBzpAew9AMAyxoZAQ",
    });
    const res = await client.getEntries({ content_type: "teams" });
    return res.items;
  } catch (error) {
    console.error(error);
  }
}

export default async function Teams() {
  const teams = await getTeams();
  return (
    <div className="bg-cream min-h-screen">
      <div>
        <h2 className="text-navy text-4xl mb-8 text-center">Our Experts</h2>
      </div>

      <div className="grid grid-cols-2">
        {teams.map((team) => (
          <OurTeams key={team.sys.id} team={team} />
        ))}
      </div>
    </div>
  );
}
