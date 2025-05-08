'use client';

import { useEffect, useRef } from "react"
import { BookOpen, FileText, Users, BookMarked, GraduationCap, Library } from "lucide-react"
import { SiteHeader } from "../components/layout/site-header"
import { SiteFooter } from "../components/layout/site-footer"

export default function ResourcesPage() {
  const resourcesSectionRef = useRef<HTMLDivElement>(null)
  const resourceRefs = useRef < (HTMLDivElement | (null > []))([])

  useEffect(() => {
    const handleScroll = () => {
      const boxes = [resourcesSectionRef.current, ...resourceRefs.current]

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

  return (
    <div className="min-h-screen bg-dark-bg text-white flex flex-col">
      <SiteHeader />

      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <section id="resources" className="max-w-4xl mx-auto w-full px-4 py-12">
          <div ref={resourcesSectionRef} className="text-center mb-10 box-animation">
            <h2 className="text-2xl md:text-3xl font-cinzel text-accent-purple mb-4">Theological Resources</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore the rich tradition of Catholic theology through these authoritative sources that form the
              foundation of our AI's knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div
              ref={(el) => (resourceRefs.current[0] = el)}
              className="bg-card-bg border border-border-color rounded-lg p-5 hover:shadow-lg hover:shadow-purple-900/30 transition-all duration-500 transform hover:-translate-y-1 box-animation"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-900/20 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-accent-gold" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-accent-purple text-center">Sacred Scripture</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a
                    href="https://bible.usccb.org/bible"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-gold transition-colors"
                  >
                    USCCB Bible
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.vatican.va/archive/bible/nova_vulgata/documents/nova-vulgata_index_lt.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-gold transition-colors"
                  >
                    Nova Vulgata
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bibliacatolica.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-gold transition-colors"
                  >
                    Biblia Católica
                  </a>
                </li>
              </ul>
            </div>

            <div
              ref={(el) => (resourceRefs.current[1] = el)}
              className="bg-card-bg border border-border-color rounded-lg p-5 hover:shadow-lg hover:shadow-purple-900/30 transition-all duration-500 transform hover:-translate-y-1 box-animation"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-900/20 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-accent-gold" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-accent-purple text-center">Magisterial Documents</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a
                    href="https://www.vatican.va/archive/ENG0015/_INDEX.HTM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-gold transition-colors"
                  >
                    Catechism of the Catholic Church
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.vatican.va/content/vatican/en/holy-father.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-gold transition-colors"
                  >
                    Papal Encyclicals
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.vatican.va/archive/hist_councils/ii_vatican_council/index.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-gold transition-colors"
                  >
                    Vatican II Documents
                  </a>
                </li>
              </ul>
            </div>

            <div
              ref={(el) => (resourceRefs.current[2] = el)}
              className="bg-card-bg border border-border-color rounded-lg p-5 hover:shadow-lg hover:shadow-purple-900/30 transition-all duration-500 transform hover:-translate-y-1 box-animation"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-900/20 p-3 rounded-full">
                  <Users className="h-6 w-6 text-accent-gold" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-accent-purple text-center">Church Fathers</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a
                    href="https://www.newadvent.org/fathers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-gold transition-colors"
                  >
                    Church Fathers - New Advent
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.catholicculture.org/culture/library/fathers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-gold transition-colors"
                  >
                    Writings of the Church Fathers
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.documentacatholicaomnia.eu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-gold transition-colors"
                  >
                    Documenta Catholica Omnia
                  </a>
                </li>
              </ul>
            </div>

            <div
              ref={(el) => (resourceRefs.current[3] = el)}
              className="bg-card-bg border border-border-color rounded-lg p-5 hover:shadow-lg hover:shadow-purple-900/30 transition-all duration-500 transform hover:-translate-y-1 box-animation"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-900/20 p-3 rounded-full">
                  <BookMarked className="h-6 w-6 text-accent-gold" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-accent-purple text-center">Theological Works</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a
                    href="https://www.corpusthomisticum.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-gold transition-colors"
                  >
                    Corpus Thomisticum
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.augustinus.it/latino/index.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-gold transition-colors"
                  >
                    Opera Omnia - St. Augustine
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ewtn.com/catholicism/library"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-gold transition-colors"
                  >
                    EWTN Document Library
                  </a>
                </li>
              </ul>
            </div>

            <div
              ref={(el) => (resourceRefs.current[4] = el)}
              className="bg-card-bg border border-border-color rounded-lg p-5 hover:shadow-lg hover:shadow-purple-900/30 transition-all duration-500 transform hover:-translate-y-1 box-animation"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-900/20 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-accent-gold" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-accent-purple text-center">Academic Resources</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a
                    href="https://www.catholic.edu/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-gold transition-colors"
                  >
                    Catholic University of America
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.thomisticinstitute.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-gold transition-colors"
                  >
                    Thomistic Institute
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.secondspring.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-gold transition-colors"
                  >
                    Second Spring Institute
                  </a>
                </li>
              </ul>
            </div>

            <div
              ref={(el) => (resourceRefs.current[5] = el)}
              className="bg-card-bg border border-border-color rounded-lg p-5 hover:shadow-lg hover:shadow-purple-900/30 transition-all duration-500 transform hover:-translate-y-1 box-animation"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-900/20 p-3 rounded-full">
                  <Library className="h-6 w-6 text-accent-gold" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-accent-purple text-center">Digital Libraries</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a
                    href="https://www.catholicculture.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-gold transition-colors"
                  >
                    Catholic Culture Library
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.libraryofcatholicthought.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-gold transition-colors"
                  >
                    Library of Catholic Thought
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.catholictheology.info/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-gold transition-colors"
                  >
                    Catholic Theology Resources
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
