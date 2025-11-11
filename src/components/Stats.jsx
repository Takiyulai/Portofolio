import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-r from-coral-600 via-coral-700 to-dark-200 text-white"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
          
          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-extrabold mb-2">
              <CountUp end={inView ? 20 : 0} duration={2} /> +
            </h3>
            <p className="text-gray-200 text-sm uppercase tracking-wide">Projets Réalisés</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-extrabold mb-2">
              <CountUp end={inView ? 100 : 0} duration={2} /> %
            </h3>
            <p className="text-gray-200 text-sm uppercase tracking-wide">Clients Satisfaits</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-extrabold mb-2">
              <CountUp end={inView ? 4 : 0} duration={2} /> ans
            </h3>
            <p className="text-gray-200 text-sm uppercase tracking-wide">Expérience</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-extrabold mb-2">
              <CountUp end={inView ? 18 : 0} duration={2} /> +
            </h3>
            <p className="text-gray-200 text-sm uppercase tracking-wide">Technologies Maîtrisées</p>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Stats
