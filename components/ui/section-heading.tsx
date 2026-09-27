import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  alignment?: "left" | "center"
}

export function SectionHeading({ title, subtitle, alignment = "left", className, ...props }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 flex flex-col gap-3", alignment === "center" ? "items-center text-center" : "items-start text-left", className)} {...props}>
      <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
      )}
    </div>
  )
}
