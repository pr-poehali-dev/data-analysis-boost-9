import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Нужен ли опыт в нейросетях?",
    answer:
      "Нет. Начинаем с нуля. Всё показываю пошагово на экране. Никакого кода и технических сложностей — только понятные шаги с бесплатными и дружелюбными интерфейсами.",
  },
  {
    id: 2,
    question: "Сколько времени займёт?",
    answer:
      "2 дня по 1.5–2 часа эфирной части + ваша практика. Домашние задания занимают не больше 30 минут. Всё спроектировано так, чтобы встроиться в плотный рабочий график.",
  },
  {
    id: 3,
    question: "Подойдёт ли для моей ниши?",
    answer:
      "Да. Мы разбираем универсальные связки, а во время практики адаптируем их под ваш бизнес: услуги, товары, образование, творчество. Во время марафона разберём именно ваши задачи.",
  },
  {
    id: 4,
    question: "Что если не успею на прямой эфир?",
    answer:
      "Доступна полная запись марафона. Закрытый чат поддержки работает 14 дней — вопросы можно задать асинхронно в любое удобное время.",
  },
  {
    id: 5,
    question: "Будет ли «сложно» технически?",
    answer:
      "Нет. Работаем только с бесплатными и интуитивно понятными инструментами. Никакого кода, программирования и технических знаний не требуется.",
  },
  {
    id: 6,
    question: "Что такое МАК-инструменты и зачем они здесь?",
    answer:
      "МАК (метафорические ассоциативные карты) — это психологический инструмент для работы с внутренними блоками. Многие знают, ЧТО делать, но не делают из-за страха или синдрома самозванца. Мы убираем этот тормоз, чтобы знания сразу шли в дело.",
  },
]

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="my-20">
      <div className="card p-8 md:p-10 shadow-lg">
        <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Частые
          <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">вопросы</span>
        </h2>
        <p className="mb-8 max-w-2xl text-gray-700 dark:text-gray-300">
          Отвечаем на самые популярные вопросы о марафоне, формате и содержании.
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b pb-4 border-gray-300 dark:border-gray-700">
              <button
                onClick={() => toggleItem(faq.id)}
                className="flex justify-between items-center w-full text-left py-2 font-medium text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE] transition-colors"
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openItem === faq.id ? "rotate-180 text-[#7A7FEE]" : ""}`}
                />
              </button>
              {openItem === faq.id && (
                <div id={`faq-answer-${faq.id}`} className="mt-2 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
