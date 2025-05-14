import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
  about: string;
  studentNumber?: string;
  registrationNumber?: string;
  skills?: string[];
}

export function ProfileCard({
  name,
  role,
  image,
  studentNumber,
  about,
  registrationNumber,
  skills = ["UX Design", "UI Design", "Prototyping", "User Research"],
}: ProfileCardProps) {
  return (
    <Card className="mb-12 overflow-hidden border-none shadow-lg">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-[400px] w-full md:w-1/3">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" priority />
        </div>
        <CardContent className="flex-1 p-6 md:p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900">{name}</h2>
            <p className="text-xl font-medium text-[#FE705B]">{role}</p>
            {studentNumber && (
              <p className="text-sm text-gray-600 mt-1">
                <strong>Student Number:</strong> {studentNumber}
              </p>
            )}
            {registrationNumber && (
              <p className="text-sm text-gray-600">
                <strong>Registration Number:</strong> {registrationNumber}
              </p>
            )}
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold text-gray-800">About</h3>
            <p className="text-gray-600">
              {about}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold text-gray-800">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} className="bg-[#FE705B]/10 text-[#FE705B] hover:bg-[#FE705B]/20">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
