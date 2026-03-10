const ProjectCard = ({ title, description, tags, img }) => (
  <div className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
    
    <div className="h-56 overflow-hidden">
      <img 
        src={img} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
    </div>
    
    
    <div className="p-8">
      <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-gray-500 leading-relaxed mb-6 line-clamp-3">
        {description}
      </p>
      
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);