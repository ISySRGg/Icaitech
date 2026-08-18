import { Agenda } from "@/types"
import { Bell, Bird, Camera, FileText, MicVocal, PencilLine } from "lucide-react"

export const importantDate: Agenda[] = [
  {
    name: "Call For Paper",
    date: "20 May 2026",
    icon: PencilLine,
    // icon: "📝",
  },
  {
    name: "Submission Due",
    date: "30 August 2026",
    icon: FileText,
    // icon: "📄",
  },
  {
    name: "Acceptance Notification",
    date: "15 September 2026",
    icon: Bell,
    // icon: "✅",
  },
  {
    name: "Early Bird Registration Due",
    date: "25 October 2026",
    icon: Bird,
    // icon: "🐦",
  },
  {
    name: "Camera Ready Due",
    date: "05 November 2026",
    icon: Camera,
    // icon: "📸",
  },
  {
    name: "Conference",
    date: "17—18 November 2026",
    icon: MicVocal,
    // icon: "🎤",
  },

]
