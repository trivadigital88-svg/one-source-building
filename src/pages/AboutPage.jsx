            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 border border-gold-200 px-3 py-1 rounded-full">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-onyx-950 mt-3">
              Executive Engineering Board
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((m, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-premium">
                <div className="h-64 overflow-hidden bg-onyx-950">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-display text-onyx-950">{m.name}</h3>
                  <span className="text-xs font-semibold text-gold-600 uppercase tracking-wider block mt-0.5">{m.title}</span>
                  <p className="text-slate-600 text-xs mt-3 leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom CTA */}
        <div className="bg-onyx-900 text-white rounded-2xl p-8 lg:p-12 text-center border border-gold-500/30">
          <h2 className="text-3xl font-bold font-display">Partner with One Source Building</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
            Discuss your upcoming commercial development or luxury residential estate with our executive team.
          </p>
          <button
            onClick={onOpenQuoteModal}
            className="mt-6 px-8 py-3.5 bg-gold-gradient hover:bg-gold-gradient-hover text-onyx-950 font-bold rounded-xl text-xs uppercase tracking-wider shadow-gold-glow"
          >
            Schedule Boardroom Consultation
          </button>
        </div>
      </div>
    </div>
  );
}

