import Icon from "@/components/ui/icon"

const services = [
  {
    id: 1,
    title: "День 1: Инструменты и промпты",
    description: "Топ-5 бесплатных ИИ для текста, визуала и видео. Формула идеального промпта. Практика: создаёте первый пост за 5 минут и адаптируете 3 промпта под свою нишу.",
    icon: "Zap",
    color: "bg-[#7A7FEE]",
  },
  {
    id: 2,
    title: "День 2: Внедрение и масштабирование",
    description: "Как встроить ИИ в текущие задачи без стресса. Автоматизация рутины: чат-боты, ответы клиентам, планирование. Разбор кейсов участников в прямом эфире.",
    icon: "Rocket",
    color: "bg-[#7A7FEE]",
  },
  {
    id: 3,
    title: "Психология + МАК-инструменты",
    description: "Убираем синдром самозванца и страх «сделать неидеально». Соединяем технологии и психологию, чтобы вы не просто нажали кнопку — а разрешили себе масштабироваться.",
    icon: "Brain",
    color: "bg-[#7A7FEE]",
  },
]

export default function Services() {
  return (
    <section id="services" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Что будет
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">внутри?</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Каждый эфир — 1.5–2 часа. Никакой воды: только практика, готовые инструменты и разбор ваших задач.
        Домашние задания занимают не больше 30 минут.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className={`${service.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm`}>
              <Icon name={service.icon} size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 card p-6 md:p-8 shadow-md">
        <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Знакомо?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            "Тратите часы на посты, картинки и планирование контента",
            "Боитесь, что ИИ выдаст набор общих фраз вместо рабочего контента",
            "Видите, как другие уже зарабатывают с нейросетями, а вы топчетесь",
            "Синдром самозванца и страх «сделать неидеально» тормозят запуск",
          ].map((pain, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#7A7FEE]/15 flex items-center justify-center flex-shrink-0">
                <Icon name="Check" size={12} className="text-[#7A7FEE]" />
              </span>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{pain}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-gray-700 dark:text-gray-300 text-sm border-t border-gray-200 dark:border-gray-700 pt-4">
          Это не ваша вина. Просто вам не дали понятную систему. На марафоне мы не будем «изучать теорию». <strong className="text-black dark:text-white">Мы сразу возьмём и внедрим.</strong>
        </p>
      </div>
    </section>
  )
}
