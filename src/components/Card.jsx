const Card = ({ icon, title, subtitle }) => {
  return (
    <div className="bg-white border border-slate-300 p-8">
      <div className="text-5xl mb-6">{icon}</div>
      <h3 className="text-2xl font-bold text-green-600 mb-4">{title}</h3>
      <p className="text-slate-600">{subtitle}</p>
    </div>
  );
};

export default Card;