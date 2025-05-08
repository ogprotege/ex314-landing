"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, ChevronLeft, ChevronRight, Info } from "lucide-react"
import { SiteHeader } from "../components/layout/site-header"
import { SiteFooter } from "../components/layout/site-footer"

// Helper function to get liturgical season
const getLiturgicalInfo = () => {
  const now = new Date()
  const year = now.getFullYear()

  // Calculate Easter using the Meeus/Jones/Butcher algorithm
  const a = year % 19
  const b = Math.floor(year / 100)
  const c = year % 100
  const d = Math.floor(b / 4)
  const e = b % 4
  const f = Math.floor((b + 8) / 25)
  const g = Math.floor((b - f + 1) / 3)
  const h = (19 * a + b - d - g + 15) % 30
  const i = Math.floor(c / 4)
  const k = c % 4
  const l = (32 + 2 * e + 2 * i - h - k) % 7
  const m = Math.floor((a + 11 * h + 22 * l) / 451)
  const month = Math.floor((h + l - 7 * m + 114) / 31)
  const day = ((h + l - 7 * m + 114) % 31) + 1

  const easter = new Date(year, month - 1, day)

  // Calculate Ash Wednesday (46 days before Easter)
  const ashWednesday = new Date(easter)
  ashWednesday.setDate(easter.getDate() - 46)

  // Calculate Pentecost (50 days after Easter)
  const pentecost = new Date(easter)
  pentecost.setDate(easter.getDate() + 49)

  // Calculate First Sunday of Advent (4th Sunday before Christmas)
  const christmas = new Date(year, 11, 25)
  const christmasDayOfWeek = christmas.getDay()
  const daysToSubtract = christmasDayOfWeek + 21 // 3 weeks + days until Sunday
  const firstAdventSunday = new Date(christmas)
  firstAdventSunday.setDate(christmas.getDate() - daysToSubtract)

  // Determine current liturgical season
  let season = ""
  let color = ""

  if (now >= ashWednesday && now < easter) {
    season = "Lent"
    color = "purple"
  } else if (now >= easter && now < pentecost) {
    season = "Easter"
    color = "white"
  } else if (now >= pentecost && now < firstAdventSunday) {
    season = "Ordinary Time"
    color = "green"
  } else if (now >= firstAdventSunday || now < new Date(year, 0, 6)) {
    season = "Advent"
    color = "purple"
  } else if (now >= new Date(year, 0, 6) && now < ashWednesday) {
    season = "Ordinary Time"
    color = "green"
  }

  return { season, color }
}

// Sample feast days for the next few months
const getUpcomingFeastDays = () => {
  const now = new Date()
  const currentMonth = now.getMonth()
  const currentDay = now.getDate()
  const currentYear = now.getFullYear()

  const feastDays = [
    { date: new Date(currentYear, 0, 1), name: "Solemnity of Mary, Mother of God", rank: "Solemnity" },
    { date: new Date(currentYear, 0, 6), name: "Epiphany of the Lord", rank: "Solemnity" },
    { date: new Date(currentYear, 1, 2), name: "Presentation of the Lord", rank: "Feast" },
    { date: new Date(currentYear, 2, 19), name: "St. Joseph, Spouse of the Blessed Virgin Mary", rank: "Solemnity" },
    { date: new Date(currentYear, 2, 25), name: "Annunciation of the Lord", rank: "Solemnity" },
    { date: new Date(currentYear, 4, 31), name: "Visitation of the Blessed Virgin Mary", rank: "Feast" },
    { date: new Date(currentYear, 5, 29), name: "Sts. Peter and Paul, Apostles", rank: "Solemnity" },
    { date: new Date(currentYear, 7, 6), name: "Transfiguration of the Lord", rank: "Feast" },
    { date: new Date(currentYear, 7, 15), name: "Assumption of the Blessed Virgin Mary", rank: "Solemnity" },
    { date: new Date(currentYear, 8, 14), name: "Exaltation of the Holy Cross", rank: "Feast" },
    { date: new Date(currentYear, 10, 1), name: "All Saints", rank: "Solemnity" },
    {
      date: new Date(currentYear, 10, 2),
      name: "Commemoration of All the Faithful Departed (All Souls)",
      rank: "Commemoration",
    },
    { date: new Date(currentYear, 11, 8), name: "Immaculate Conception of the Blessed Virgin Mary", rank: "Solemnity" },
    { date: new Date(currentYear, 11, 25), name: "Nativity of the Lord (Christmas)", rank: "Solemnity" },
  ]

  // Filter to show only upcoming feast days (next 4)
  return feastDays
    .filter((feast) => {
      // If it's the same month, check if the day is greater or equal
      if (feast.date.getMonth() === currentMonth) {
        return feast.date.getDate() >= currentDay
      }
      // Otherwise, include if the month is greater
      return (
        feast.date.getMonth() > currentMonth ||
        // Or if it's next year (for December viewing January feasts)
        (feast.date.getMonth() < currentMonth && feast.date.getFullYear() > currentYear)
      )
    })
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 4)
}

export default function CalendarPage() {
  const calendarSectionRef = useRef<HTMLDivElement>(null)
  const feastRefs = useRef<(HTMLDivElement | null)[]>([])
  const [liturgicalInfo] = useState(getLiturgicalInfo())
  const [upcomingFeasts] = useState(getUpcomingFeastDays())
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const formatDate = (date: Date) => {
    return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }

  const navigateMonth = (direction: number) => {
    let newMonth = currentMonth + direction
    let newYear = currentYear

    if (newMonth > 11) {
      newMonth = 0
      newYear++
    } else if (newMonth < 0) {
      newMonth = 11
      newYear--
    }

    setCurrentMonth(newMonth)
    setCurrentYear(newYear)
  }

  useEffect(() => {
    const handleScroll = () => {
      const boxes = [calendarSectionRef.current, ...feastRefs.current]

      boxes.forEach((box) => {
        if (!box) return

        const rect = box.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0

        if (isVisible) {
          box.classList.add("box-visible")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger once on load
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Get liturgical season color class
  const getLiturgicalColorClass = () => {
    switch (liturgicalInfo.color) {
      case "purple":
        return "bg-purple-900/20 text-purple-300"
      case "white":
        return "bg-gray-300/20 text-gray-100"
      case "green":
        return "bg-green-900/20 text-green-300"
      case "red":
        return "bg-red-900/20 text-red-300"
      default:
        return "bg-purple-900/20 text-purple-300"
    }
  }

  // Get rank color class
  const getRankColorClass = (rank: string) => {
    switch (rank) {
      case "Solemnity":
        return "text-accent-gold"
      case "Feast":
        return "text-purple-300"
      case "Memorial":
        return "text-green-300"
      default:
        return "text-gray-300"
    }
  }

  return (
    <div className="min-h-screen bg-dark-bg text-white flex flex-col">
      <SiteHeader />

      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <section id="liturgical-calendar" className="max-w-4xl mx-auto w-full px-4 py-12">
          <div ref={calendarSectionRef} className="text-center mb-10 box-animation">
            <h2 className="text-2xl md:text-3xl font-cinzel text-accent-purple mb-4">Liturgical Calendar</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Follow the rhythm of the Church's liturgical year, celebrating the mysteries of Christ and honoring the
              saints who have gone before us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1 bg-card-bg border border-border-color rounded-lg p-5 hover:shadow-lg hover:shadow-purple-900/30 transition-all duration-500 box-animation">
              <div className="flex items-center justify-center mb-4">
                <div className={`p-3 rounded-full ${getLiturgicalColorClass()}`}>
                  <Calendar className="h-6 w-6 text-accent-gold" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-accent-purple text-center">Current Season</h3>

              <div className="text-center">
                <div className={`inline-block px-3 py-1 rounded-full mb-2 ${getLiturgicalColorClass()}`}>
                  {liturgicalInfo.season}
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  The Church is currently in the season of{" "}
                  <span className="font-semibold">{liturgicalInfo.season}</span>
                </p>

                <div className="flex items-center justify-center gap-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-900 mr-1"></div>
                    <span>Advent/Lent</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-900 mr-1"></div>
                    <span>Ordinary Time</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-gray-300 mr-1"></div>
                    <span>Easter/Christmas</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 bg-card-bg border border-border-color rounded-lg p-5 hover:shadow-lg hover:shadow-purple-900/30 transition-all duration-500 box-animation">
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => navigateMonth(-1)}
                  className="bg-purple-900/20 p-2 rounded-full hover:bg-purple-900/40 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <h3 className="text-lg font-semibold text-accent-purple">
                  {monthNames[currentMonth]} {currentYear}
                </h3>
                <button
                  onClick={() => navigateMonth(1)}
                  className="bg-purple-900/20 p-2 rounded-full hover:bg-purple-900/40 transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <h4 className="text-md font-semibold mb-3 text-gray-300">Upcoming Feast Days</h4>

              <div className="space-y-3">
                {upcomingFeasts.map((feast, index) => (
                  <div
                    key={index}
                    ref={(el) => (feastRefs.current[index] = el)}
                    className="bg-card-bg border border-border-color-light rounded-lg p-3 hover:bg-input-bg transition-colors box-animation"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h5 className={`font-semibold ${getRankColorClass(feast.rank)}`}>{feast.name}</h5>
                        <p className="text-xs text-gray-400">{formatDate(feast.date)}</p>
                      </div>
                      <div className="flex items-center">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${getRankColorClass(feast.rank)} bg-opacity-20 bg-purple-900`}
                        >
                          {feast.rank}
                        </span>
                        <button className="ml-2 text-gray-400 hover:text-accent-gold transition-colors">
                          <Info className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-4">
                <a
                  href="https://www.usccb.org/prayer-worship/liturgical-year/liturgical-calendar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-gold hover:underline text-sm"
                >
                  <span>View Full Liturgical Calendar</span>
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
