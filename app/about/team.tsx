import { teamMembers } from "@/lib/data/team";
import { TeamMemberCard } from "@/components/team/TeamMemberCard";

export function Team() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} member={member} />
      ))}
    </div>
  );
}
