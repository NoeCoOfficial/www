import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faDiscord,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TeamMember } from "@/lib/interfaces";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{member.name}</CardTitle>
      </CardHeader>
      <CardContent>{member.description}</CardContent>
      <CardFooter>
        <div className="flex flex-row gap-1 not-prose">
          {member.socialLinks.github && (
            <Button variant="ghost" size="icon" asChild>
              <Link href={member.socialLinks.github} target="_blank">
                <span className="sr-only">Github</span>
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </Button>
          )}
          {member.socialLinks.discord && (
            <Button variant="ghost" size="icon" asChild>
              <Link href={member.socialLinks.discord} target="_blank">
                <span className="sr-only">Discord</span>
                <FontAwesomeIcon icon={faDiscord} />
              </Link>
            </Button>
          )}
          {member.socialLinks.youtube && (
            <Button variant="ghost" size="icon" asChild>
              <Link href={member.socialLinks.youtube} target="_blank">
                <span className="sr-only">Youtube</span>
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}