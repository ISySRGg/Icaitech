import { Agenda } from "@/types"
import { Bell, Bird, Camera, FileText, MicVocal, PencilLine } from "lucide-react"

export const importantDate: Agenda[] = [
  {
    name: "Call For Paper",
    date: "20 May 2025",
    icon: PencilLine,
    // icon: "📝",
  },
  {
    name: "Acceptance Notification",
    date: "30 October 2025",
    icon: Bell,
    // icon: "✅",
  },
  {
    name: "Submission Due",
    date: "08 September 2025",
    icon: FileText,
    // icon: "📄",
  },

  {
    name: "Camera Ready",
    date: "05 November 2025",
    icon: Camera,
    // icon: "📸",
  },
  {
    name: "Early Bird Registration Due",
    date: "6 November 2025",
    icon: Bird,
    // icon: "🐦",
  },
  {
    name: "Conference",
    date: "20—21 November 2025",
    icon: MicVocal,
    // icon: "🎤",
  },

]
