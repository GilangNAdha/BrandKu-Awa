const plans = [
  {
    id: "starter",
    name: "Starter",
    description: "Buat kamu yang baru mulai.",
    price: "Rp0",
    period: "/bulan",
    features: ["1 pengguna", "Laporan dasar", "Dukungan email"],
  },
  {
    id: "growth",
    name: "Growth",
    description: "Paling pas untuk bisnis berkembang.",
    price: "Rp149rb",
    period: "/bulan",
    features: [
      "5 pengguna",
      "Laporan real-time",
      "Otomatisasi tugas",
      "Dukungan prioritas",
    ],
  },
  {
    id: "business",
    name: "Business",
    description: "Untuk tim yang sudah besar.",
    price: "Rp399rb",
    period: "/bulan",
    features: [
      "Pengguna tanpa batas",
      "Laporan khusus",
      "Integrasi API",
      "Manajer akun khusus",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="mx-auto max-w-6xl px-8 py-20">
      <h2 className="mb-4 text-center text-4xl font-extrabold text-slate-900">
        Pilih paket yang sesuai
      </h2>
      <p className="mb-12 text-center text-slate-600">
        Mulai gratis, tingkatkan kapan pun bisnismu siap.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="flex flex-col border border-slate-300 bg-white p-8"
          >
            <h3 className="text-2xl font-bold text-green-600">{plan.name}</h3>
            <p className="mt-2 text-sm text-slate-500">{plan.description}</p>

            <div className="my-6">
              <span className="text-3xl font-extrabold text-slate-900">
                {plan.price}
              </span>
              <span className="text-slate-500">{plan.period}</span>
            </div>

            <ul className="flex-1 space-y-2 text-slate-600">
              {plan.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>

            <button className="mt-8 rounded-full bg-pink-600 px-8 py-3 font-semibold text-white transition hover:bg-pink-900">
              Pilih {plan.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;