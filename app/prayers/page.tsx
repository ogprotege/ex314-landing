"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, Cross, HandIcon as PrayingHands, RocketIcon as Rosette, Shield, Star, ChevronRight } from "lucide-react"
import { SiteHeader } from "../components/layout/site-header"
import { SiteFooter } from "../components/layout/site-footer"
// import { Navigation } from "../components/layout/navigation"

export default function PrayersPage() {
  const prayersSectionRef = useRef<HTMLDivElement>(null)
  const prayerRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activePrayer, setActivePrayer] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const boxes = [prayersSectionRef.current, ...prayerRefs.current]

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

  const togglePrayer = (index: number) => {
    if (activePrayer === index) {
      setActivePrayer(null)
    } else {
      setActivePrayer(index)
    }
  }

  const prayers = [
    {
      title: "Our Father",
      icon: <Cross className="h-6 w-6 text-accent-gold" />,
      content: `Our Father, who art in heaven,
hallowed be thy name;
thy kingdom come;
thy will be done on earth as it is in heaven.
Give us this day our daily bread;
and forgive us our trespasses
as we forgive those who trespass against us;
and lead us not into temptation,
but deliver us from evil.
Amen.`,
    },
    {
      title: "Hail Mary",
      icon: <Heart className="h-6 w-6 text-accent-gold" />,
      content: `Hail Mary, full of grace, the Lord is with thee;
blessed art thou among women,
and blessed is the fruit of thy womb, Jesus.
Holy Mary, Mother of God,
pray for us sinners,
now and at the hour of our death.
Amen.`,
    },
    {
      title: "Glory Be",
      icon: <Star className="h-6 w-6 text-accent-gold" />,
      content: `Glory be to the Father, and to the Son, and to the Holy Spirit,
as it was in the beginning, is now, and ever shall be,
world without end.
Amen.`,
    },
    {
      title: "Apostles' Creed",
      icon: <Shield className="h-6 w-6 text-accent-gold" />,
      content: `I believe in God, the Father almighty,
Creator of heaven and earth,
and in Jesus Christ, his only Son, our Lord,
who was conceived by the Holy Spirit,
born of the Virgin Mary,
suffered under Pontius Pilate,
was crucified, died and was buried;
he descended into hell;
on the third day he rose again from the dead;
he ascended into heaven,
and is seated at the right hand of God the Father almighty;
from there he will come to judge the living and the dead.
I believe in the Holy Spirit,
the holy catholic Church,
the communion of saints,
the forgiveness of sins,
the resurrection of the body,
and life everlasting.
Amen.`,
    },
    {
      title: "Memorare",
      icon: <Rosette className="h-6 w-6 text-accent-gold" />,
      content: `Remember, O most gracious Virgin Mary,
that never was it known that anyone who fled to thy protection,
implored thy help, or sought thy intercession was left unaided.
Inspired by this confidence,
I fly unto thee, O Virgin of virgins, my mother;
to thee do I come, before thee I stand, sinful and sorrowful.
O Mother of the Word Incarnate, despise not my petitions,
but in thy mercy hear and answer me.
Amen.`,
    },
    {
      title: "Prayer to St. Michael",
      icon: <PrayingHands className="h-6 w-6 text-accent-gold" />,
      content: `St. Michael the Archangel, defend us in battle.
Be our defense against the wickedness and snares of the Devil.
May God rebuke him, we humbly pray,
and do thou, O Prince of the heavenly hosts,
by the power of God, thrust into hell Satan,
and all the evil spirits, who prowl about the world
seeking the ruin of souls.
Amen.`,
    },
  ]

  return (
    <div className="min-h-screen bg-dark-bg text-white flex flex-col">
      <SiteHeader />
      {/* <Navigation /> */}

      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <section id="prayers" className="max-w-4xl mx-auto w-full px-4 py-12">
          <div ref={prayersSectionRef} className="text-center mb-10 box-animation">
            <h2 className="text-2xl md:text-3xl font-cinzel text-accent-purple mb-4">Traditional Catholic Prayers</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The timeless prayers of the Catholic tradition, passed down through generations of faithful, forming the
              foundation of our spiritual communion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {prayers.map((prayer, index) => (
              <div
                key={index}
                ref={(el) => (prayerRefs.current[index] = el)}
                className="bg-card-bg border border-border-color rounded-lg overflow-hidden transition-all duration-500 box-animation"
              >
                <div
                  className="p-4 flex items-center justify-between cursor-pointer hover:bg-card-bg/80 transition-colors"
                  onClick={() => togglePrayer(index)}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-900/20 p-2 rounded-full">{prayer.icon}</div>
                    <h3 className="text-lg font-semibold text-accent-purple">{prayer.title}</h3>
                  </div>
                  <ChevronRight
                    className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                      activePrayer === index ? "rotate-90" : ""
                    }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    activePrayer === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-4 pt-0 border-t border-border-color">
                    <p className="text-gray-300 text-sm whitespace-pre-line">{prayer.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.usccb.org/prayer-and-worship/prayers-and-devotions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-gold hover:underline"
            >
              <span>More Catholic Prayers</span>
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
