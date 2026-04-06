import Icon from "@/components/ui/icon"

const bonuses = [
  {
    id: 1,
    icon: "FileText",
    title: "Чек-лист",
    description: "«10 задач бизнеса, которые можно делегировать ИИ» — забираете сразу после регистрации",
    mainImage: "/portfolio-images/saas-dashboard-1.jpg",
  },
  {
    id: 2,
    icon: "BookOpen",
    title: "Библиотека промптов",
    description: "20+ готовых промптов под контент, продажи, упаковку и аналитику — для любой ниши",
    mainImage: "/portfolio-images/ai-platform-1.jpg",
  },
  {
    id: 3,
    icon: "MessageCircle",
    title: "Закрытый Telegram-чат",
    description: "Поддержка 14 дней после марафона. Вопросы можно задавать асинхронно в любое время",
    mainImage: "/portfolio-images/saas-dashboard-2.jpg",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Что ещё вы
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">забираете?</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Помимо двух дней практики, каждый участник получает бонусный пакет материалов и поддержку после марафона.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bonuses.map((bonus) => (
          <div
            key={bonus.id}
            className="card overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="relative overflow-hidden">
              <img
                src={bonus.mainImage}
                alt={bonus.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#7A7FEE] flex items-center justify-center shadow-md">
                <Icon name={bonus.icon} size={20} className="text-white" />
              </div>
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-black dark:text-white">{bonus.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">{bonus.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 card p-6 md:p-8 shadow-md border border-[#7A7FEE]/20">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#7A7FEE]/10 flex items-center justify-center flex-shrink-0">
            <Icon name="Shield" size={20} className="text-[#7A7FEE]" />
          </div>
          <div>
            <h3 className="font-semibold text-black dark:text-white mb-1">Мягкая гарантия</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Если после марафона вы не поймёте, как внедрить инструменты — я проведу личную 20-минутную разборку вашей задачи. <span className="text-[#7A7FEE] font-medium">Для первых 30 участников.</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 card p-6 md:p-8 shadow-md">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <img
            src="/placeholder-user.jpg"
            alt="Ирина Петрова"
            className="w-20 h-20 rounded-full object-cover flex-shrink-0"
          />
          <div>
            <p className="text-[#7A7FEE] text-sm font-medium mb-1">Ваш проводник в мир ИИ</p>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Ирина Петрова</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              10 лет в бизнесе и управлении. Прошла путь от банка до открытия детского центра и экспертного сообщества. 3 года тестирую нейросети на реальных задачах.
              Соединяю психологию (МАК, работа с блоками) и технологии, чтобы вы разрешили себе масштабироваться.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
