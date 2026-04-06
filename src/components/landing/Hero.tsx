import ContactFormButton from "./ContactFormButton"

export default function Hero() {
  return (
    <section id="hero" className="card my-8 relative overflow-hidden shadow-md">
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/5 z-10">
          <div className="inline-block mb-4 px-3 py-1 bg-[#7A7FEE]/10 dark:bg-[#7A7FEE]/20 rounded-full text-[#7A7FEE] text-sm font-medium">
            Онлайн-марафон · 2 дня
          </div>
          <h1 className="text-black dark:text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Нейросети для бизнеса
            <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">и личного бренда</span>
          </h1>
          <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            Перестаньте тратить часы на рутину. Внедрите ИИ за 48 часов, освободите время и начните масштабироваться. Без технических сложностей, «воды» и перфекционизма.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ContactFormButton>Записаться на марафон →</ContactFormButton>
            <a href="#services" className="btn-secondary text-black dark:text-white">
              Узнать больше
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="w-2 h-2 rounded-full bg-[#7A7FEE]"></span>
              2 дня
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="w-2 h-2 rounded-full bg-[#7A7FEE]"></span>
              Готовые промпты
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="w-2 h-2 rounded-full bg-[#7A7FEE]"></span>
              Реальная экономия времени
            </div>
          </div>
        </div>

        <div className="hidden md:block md:w-2/5 md:absolute md:right-0 md:top-0 md:bottom-0 md:flex md:items-center">
          <img
            src="/purple-circle-wave-static.png"
            alt="Purple Wave"
            className="w-full h-auto md:h-full md:w-auto md:object-cover md:object-left"
          />
        </div>
      </div>
    </section>
  )
}