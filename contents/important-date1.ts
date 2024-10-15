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
    date: "20 October 2025",
    icon: Bell,
    // icon: "✅",
  },
  {
    name: "Submission Due",
    date: "30 Sept 2025",
    icon: FileText,
    // icon: "📄",
  },
  // {
  //   name: "Notification of Acceptance (Phase 2)",
  //   date: "1 October 2025",
  //   icon: Bell,
  //   // icon: "✅",
  // },
  {
    name: "Conference",
    date: "20—21 November 2025",
    icon: MicVocal,
    // icon: "🎤",
  },
  {
    name: "Early Bird Registration Due",
    date: "6 November 2025",
    icon: Bird,
    // icon: "🐦",
  },
  {
    name: "Camera Ready",
    date: "31 October 2025",
    icon: Camera,
    // icon: "📸",
  },
  // {
  //   name: "Registration Due",
  //   date: "13 November 2025",
  //   icon: PencilLine,
  //   // icon: "📝",
  // },
]
