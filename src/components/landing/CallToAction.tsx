import ContactFormButton from "./ContactFormButton"
import Icon from "@/components/ui/icon"

export default function CallToAction() {
  return (
    <section id="contact" className="card my-20 relative overflow-hidden shadow-md">
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/5 z-10">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Готовы перестать бороться{" "}
            <span className="text-[#7A7FEE] dark:text-[#7A7FEE]">с чистым листом?</span>
          </h2>
          <p className="my-4 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            Формат: онлайн, Zoom/Telegram. Я беру небольшую группу, чтобы успеть дать внимание каждому и разобрать ваши задачи.
          </p>
          <p className="mb-6 text-sm font-medium text-[#7A7FEE]">
            Мест ограничено.
          </p>

          <div className="mb-8 grid grid-cols-1 gap-3 max-w-md">
            {[
              "Имя",
              "Email или Telegram",
              "Ваша ниша / чем занимаетесь",
              "Главная задача, которую хотите автоматизировать с ИИ",
            ].map((field, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Icon name="ChevronRight" size={14} className="text-[#7A7FEE]" />
                {field}
              </div>
            ))}
          </div>

          <div>
            <ContactFormButton>Забронировать место →</ContactFormButton>
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
