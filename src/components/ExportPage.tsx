/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/XbjvYroCBh9
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"
import { StreamingEditableTCard } from "@/components/ui/tcard"

export default function ExportPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="flex flex-col items-center justify-between w-full md:w-1/2 p-8">
      <a href="#" className="self-start mb-4 text-sm text-muted-foreground">
          &lt; Back to Edit/View
        </a>
        <div>
          <div className="text-center">
          <h1 className="text-2xl font-bold">Congratulations, Alice!</h1>
          <p className="mt-2 text-muted-foreground">This is only the beginning. You are going to go so far.</p>
        </div>
        <div className="mt-8 space-y-4">
          <Button className="w-full" variant="default">
            Export as Image
          </Button>
          <Button className="w-full" variant="default">
            Export as DOCX
          </Button>
          <Button className="w-full" variant="default">
            Export as PDF
          </Button>
        </div>
        <div className="flex items-center justify-center w-full mt-8">
          <div className="border-t w-1/4" />
          <span className="mx-4 text-sm text-muted-foreground">OR CONTINUE TO</span>
          <div className="border-t w-1/4" />
        </div>
        <Button className="mt-4 w-full" variant="outline">
          <HomeIcon className="mr-2 h-4 w-4" />
          Homepage
        </Button></div>
        
        <p className="mt-8 text-xs text-white text-muted-foreground">Created by Georgia Tech Research Institute (GTRI)</p>
      </div>
      <div className="flex flex-col w-full md:w-1/2 p-8 bg-gradient-to-r from-orange-400 to-pink-400">
        <div className="flex justify-left mb-4">
          <Button variant="outline" className="mr-2">
            Experience Card
          </Button>
          <Button variant="default">Resume Bullets</Button>
        </div>
        <StreamingEditableTCard />
      
      </div>
    </div>
  )
}

function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}
