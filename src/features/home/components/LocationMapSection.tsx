import React from 'react';

export const LocationMapSection: React.FC = () => {
  const storeName = '봄돈까스 - Cutlet Spring';
  const storeAddress = '6A Street No. 9, Thao Dien Ward, Thu Duc City, Ho Chi Minh City';
  const googleMapsPlaceUrl =
    'https://www.google.com/maps/place/%EB%B4%84%EB%8F%88%EA%B9%8C%EC%8A%A4+-+Cutlet+Spring/@10.8037915,106.7400647,17z/data=!3m1!4b1!4m6!3m5!1s0x3175271d5aaa7cd9:0xb1108e646ddecb55!8m2!3d10.8037915!4d106.7449356!16s%2Fg%2F11vd_ltq6h';
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=10.8037915,106.7449356`;
  const embedMapUrl =
    'https://maps.google.com/maps?q=10.8037915,106.7449356+(%EB%B4%84%EB%8F%88%EA%B9%8C%EC%8A%A4+-+Cutlet+Spring)&t=&z=17&ie=UTF8&iwloc=B&output=embed';

  return (
    <section className="w-full py-16 lg:py-24 border-b border-[#eae8e5] bg-[#f5f3f0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#eae8e5]">
          <div>
            <span className="font-label-md text-xs uppercase tracking-widest text-[#af101a] font-bold block mb-1">
              Atelier Location • Find Us
            </span>
            <h2 className="font-headline-lg text-3xl lg:text-4xl text-[#1b1c1a] font-bold tracking-tight">
              Our Thao Dien Atelier Map
              <span className="block font-title-lg text-base sm:text-lg text-[#5b403d] font-normal mt-1">
                Visit our artisan kitchen &amp; savor freshly fried, crispy Tonkatsu
              </span>
            </h2>
          </div>
          <p className="font-body-md text-xs sm:text-sm text-[#585757] max-w-md mt-4 md:mt-0 leading-relaxed">
            Located in the serene culinary hub of Thao Dien, Cutlet Spring welcomes you with a warm wooden ambience and an open counter theater kitchen.
          </p>
        </div>

        {/* Bento Grid: Info Box + Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Store Details & Actions (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-2xl border border-[#eae8e5] p-6 sm:p-8 shadow-xs">
            <div className="space-y-6">
              {/* Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-[#eae8e5]">
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-lg text-lg font-bold text-[#1b1c1a]">봄돈까스</span>
                  <span className="font-label-md text-xs tracking-wider uppercase text-[#5b403d] font-semibold">
                    Cutlet Spring Thao Dien
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#af101a]/10 text-[#af101a] text-[11px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#af101a]"></span>
                  Walk-in Only
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#ffdad6]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#af101a]">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
                <div>
                  <h4 className="font-title-md text-xs uppercase tracking-wider font-bold text-[#1b1c1a]">
                    Store Address
                  </h4>
                  <p className="font-body-md text-xs sm:text-sm text-[#5b403d] mt-0.5 font-medium leading-relaxed">
                    6A Street 9, Thao Dien Ward,<br />
                    Thu Duc City, Ho Chi Minh City
                  </p>
                </div>
              </div>

              {/* Service Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#feae2c]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#835500]">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                </div>
                <div>
                  <h4 className="font-title-md text-xs uppercase tracking-wider font-bold text-[#1b1c1a]">
                    Opening Hours
                  </h4>
                  <p className="font-body-md text-xs sm:text-sm text-[#5b403d] mt-0.5 font-medium leading-relaxed">
                    Lunch: 11:00 - 15:00 <br />
                    Dinner: 17:00 - 21:00 <br />
                    <span className="text-xs font-semibold text-[#af101a]">
                      Last Order: 20:30 (8:30 PM)
                    </span>
                  </p>
                  <span className="text-[11px] text-[#786659] block mt-1">
                    (Open Daily from Monday to Sunday)
                  </span>
                </div>
              </div>

              {/* Dining Policy: Walk-in Only */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#af101a]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#af101a]">
                  <span className="material-symbols-outlined text-[20px]">directions_walk</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-title-md text-xs uppercase tracking-wider font-bold text-[#1b1c1a]">
                      Service Policy
                    </h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#af101a] text-white uppercase tracking-wider">
                      Walk-in Only
                    </span>
                  </div>
                  <p className="font-body-md text-xs sm:text-sm text-[#5b403d] mt-0.5 font-medium leading-relaxed">
                    First-come, first-served.<br />
                    No advance table reservation required.<br />
                    Last order: 20:30 (8:30 PM).
                  </p>
                </div>
              </div>

              {/* Direct Hotline */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#eae8e5] flex items-center justify-center shrink-0 mt-0.5 text-[#1b1c1a]">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </div>
                <div>
                  <h4 className="font-title-md text-xs uppercase tracking-wider font-bold text-[#1b1c1a]">
                    Hotline &amp; Inquiries
                  </h4>
                  <a
                    href="tel:0393762717"
                    className="font-price-numeral text-base sm:text-lg font-bold text-[#af101a] hover:underline block mt-0.5"
                  >
                    039 376 2717
                  </a>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 mt-6 border-t border-[#eae8e5] flex flex-col sm:flex-row gap-3">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#af101a] hover:bg-[#930010] text-white font-label-md text-xs uppercase tracking-wider font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <span className="material-symbols-outlined text-[18px]">directions</span>
                <span>Google Maps</span>
              </a>

              <a
                href="tel:0393762717"
                className="py-3 px-4 rounded-xl bg-white hover:bg-[#f5f3f0] text-[#1b1c1a] border border-[#eae8e5] font-label-md text-xs uppercase tracking-wider font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer text-center shrink-0"
              >
                <span className="material-symbols-outlined text-[16px] text-[#af101a]">phone</span>
                <span>Call Restaurant</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed (7 Cols) */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] rounded-2xl overflow-hidden border border-[#eae8e5] shadow-xs bg-[#efeeeb] group">
            {/* Live Interactive Google Map */}
            <iframe
              title="Cutlet Spring Thao Dien Google Map"
              src={embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[380px] sm:min-h-[460px]"
            />

            {/* Floating Top Badge overlay */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-[#eae8e5] flex items-center gap-2 pointer-events-none">
              <span className="w-2.5 h-2.5 rounded-full bg-[#af101a] shrink-0"></span>
              <div>
                <span className="font-title-md text-xs font-bold text-[#1b1c1a] block leading-tight">
                  {storeName}
                </span>
                <span className="font-body-sm text-[10px] text-[#786659]">
                  6A Street 9, Thao Dien • Walk-in Only
                </span>
              </div>
            </div>

            {/* Floating Bottom Link overlay */}
            <div className="absolute bottom-4 right-4">
              <a
                href={googleMapsPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 hover:bg-white text-[#1b1c1a] text-xs font-bold shadow-md border border-[#eae8e5] transition-all hover:scale-105 backdrop-blur-xs cursor-pointer"
              >
                <span>View on Google Maps</span>
                <span className="material-symbols-outlined text-[15px] text-[#af101a]">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
