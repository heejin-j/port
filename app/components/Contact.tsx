const contacts = [
  {
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
    emoji: "📧",
  },
  {
    label: "GitHub",
    value: "github.com/username",
    href: "https://github.com",
    emoji: "💻",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/username",
    href: "https://linkedin.com",
    emoji: "🔗",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-14 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Get In <span className="text-indigo-500">Touch</span>
        </h2>
        <p className="text-gray-500 leading-relaxed mb-8 max-w-lg mx-auto">
          새로운 기회나 협업에 관심이 있으시면 언제든지 연락해 주세요. 빠르게
          답변 드리겠습니다!
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform inline-block">
                {contact.emoji}
              </div>
              <p className="font-semibold text-gray-800 mb-1">{contact.label}</p>
              <p className="text-sm text-gray-500 break-all">{contact.value}</p>
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
        >
          <span>📨</span>
          메일 보내기
        </a>
      </div>

      {/* Footer */}
      <div className="mt-10 pt-6 border-t border-gray-200 text-center">
        <p className="text-gray-400 text-sm">
          © 2025 홍길동. Designed & Built with Next.js + Tailwind CSS
        </p>
      </div>
    </section>
  );
}
