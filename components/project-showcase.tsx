"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, Code } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface ProjectShowcaseProps {
  projectName: string
  description: string
  contributions: string[]
  technologies: string[]
  images: string[]
}

export function ProjectShowcase({
  projectName,
  description,
  contributions,
  technologies,
  images,
}: ProjectShowcaseProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState("")

  return (
    <Card className="mb-12 border-none shadow-lg">
      <CardHeader className="bg-[#FE705B]/5 border-b border-[#FE705B]/10">
        <div className="flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-[#FE705B]" />
          <CardTitle className="text-2xl font-bold text-gray-900">{projectName}</CardTitle>
        </div>
        <CardDescription className="text-base text-gray-600 mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs defaultValue="contributions" className="w-full">
          <TabsList className="mb-6 grid w-full grid-cols-3">
            <TabsTrigger value="contributions">Contributions</TabsTrigger>
            <TabsTrigger value="technologies">Technologies</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>

          <TabsContent value="contributions" className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">My Role & Contributions</h3>
            <ul className="space-y-2 pl-5">
              {contributions.map((contribution, index) => (
                <li key={index} className="text-gray-600 list-disc">
                  {contribution}
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="technologies">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="border-[#FE705B]/20 bg-[#FE705B]/5">
                  <Code className="mr-1 h-3 w-3 text-[#FE705B]" />
                  {tech}
                </Badge>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-4">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">Project Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative h-[250px] w-full overflow-hidden rounded-md cursor-pointer"
                  onClick={() => {
                    setSelectedImage(image)
                    setIsDialogOpen(true)
                  }}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Project image ${index + 1}`}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden">
          <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-black/40 p-2 text-white hover:bg-black/60">
            <span className="sr-only">Close</span>
          </DialogClose>
          <div className="relative h-[80vh] w-full">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Project image preview"
              fill
              className="object-contain"
              priority
            />
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  )
}
