import { Agenda } from "@/types"
import { Bell, Camera, FileText, MicVocal, PencilLine } from "lucide-react"

export const importantDate: Agenda[] = [
  {
    name: "Submission Due (Phase 1)",
    date: "20 May 2025",
    icon: FileText,
    // icon: "📄", // Add an icon for visual representation
  },
  {
    name: "Notification of Acceptance (Phase 1)",
    date: "20 July 2025",
    icon: Bell,
    // icon: "✅",
  },
  {
    name: "Submission Due (Phase 2)",
    date: "20 August 2025",
    icon: FileText,
    // icon: "📄",
  },
  {
    name: "Notification of Acceptance (Phase 2)",
    date: "1 October 2025",
    icon: Bell,
    // icon: "✅",
  },
  {
    name: "Conference",
    date: "20—21 November 2025",
    icon: MicVocal,
    // icon: "🎤",
  },
  {
    name: "Early Bird Registration Due",
    date: "6 November 2025",
    icon: PencilLine,
    // icon: "🐦",
  },
  {
    name: "Camera Ready Due",
    date: "30 October 2025",
    icon: Camera,
    // icon: "📸",
  },
  {
    name: "Registration Due",
    date: "13 November 2025",
    icon: PencilLine,
    // icon: "📝",
  },
]
