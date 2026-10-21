import React from 'react';

interface FeedbackItem {
  id: string;
  rating: number;
  authorName: string;
  authorInitials: string;
  authorBg: string;
  authorCredential: string;
  timeAgo: string;
  quote: string;
  ownerReply?: string;
}

const GOOGLE_MAPS_REVIEWS: FeedbackItem[] = [
  {
    id: 'review-sohzi',
    rating: 5,
    authorName: 'Sohzi Shz',
    authorInitials: 'SS',
    authorBg: 'bg-[#af101a]',
    authorCredential: 'Local Guide · 67 reviews',
    timeAgo: '3 tháng trước',
    quote:
      'Đồ ăn ngonnnn 👏👏 khá recommend nhé! Ăn hết không còn gì luôn là hiểu hen 🤤🤤',
    ownerReply:
      'Cutlet Spring xin cám ơn chị và rất vui vì mình đã có trải nghiệm tốt tại nhà hàng. Rất mong sẽ được đón tiếp chị trong những lần tới ạ.',
  },
  {
    id: 'review-alex',
    rating: 5,
    authorName: 'Alex Liu',
    authorInitials: 'AL',
    authorBg: 'bg-[#835500]',
    authorCredential: 'Local Guide · 12 photos',
    timeAgo: '3 tháng trước',
    quote:
      'Absolutely loved the pork cutlet set here! The crust has the perfect crunch, and the meat is so tender. The dipping sauce and side dishes complement it perfectly. The cold noodles were also amazing—tangy, refreshing, and the perfect balance.',
    ownerReply:
      'For a crispy outside and tender inside tonkatsu, we make our own fresh breadcrumbs and use the finest quality fresh pork sourced from Vietnam. Thank you very much for visiting Cutlet spring!',
  },
  {
    id: 'review-xnhi',
    rating: 5,
    authorName: 'Am I XNhi?',
    authorInitials: 'XN',
    authorBg: 'bg-[#1b1c1a]',
    authorCredential: 'Local Guide · 539 reviews',
    timeAgo: '9 tháng trước',
    quote:
      'Quán nằm ngoài khu Thảo Điền, trong một con hẻm nhỏ yên tĩnh. Không gian sáng sủa sạch sẽ, chỗ ngồi thoải mái, phục vụ chuyên nghiệp và tốc độ ra món khá nhanh (so với traffic của quán).',
    ownerReply:
      'Thank you! We will do our best to make Bom Donkatsu the best it can be.',
  },
];

export const FeedbackSection: React.FC = () => {
  const googleMapsUrl =
    'https://www.google.com/maps/place/%EB%B4%84%EB%8F%88%EA%B9%8C%EC%8A%A4+-+Cutlet+Spring/@10.8037915,106.7400647,17z/data=!3m1!4b1!4m6!3m5!1s0x3175271d5aaa7cd9:0xb1108e646ddecb55!8m2!3d10.8037915!4d106.7449356!16s%2Fg%2F11vd_ltq6h';

  return (
    <section className="w-full py-12 sm:py-16 lg:py-24 border-b border-[#eae8e5] bg-[#fbf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Rating Header Banner - Fully Responsive for Mobile & Desktop */}
        <div className="bg-[#f5f3f0] border border-[#eae8e5] rounded-2xl p-4 sm:p-6 lg:p-10 mb-8 sm:mb-12 shadow-xs">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 sm:gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full lg:w-auto">
              {/* Left Rating Box & Mobile Header Row */}
              <div className="flex items-center gap-3.5 sm:gap-4 w-full sm:w-auto justify-between sm:justify-start">
                <div className="flex flex-col items-center justify-center bg-white border border-[#eae8e5] rounded-xl px-4 py-2 sm:px-5 sm:py-3 shadow-2xs shrink-0 min-w-[76px] sm:min-w-[90px]">
                  <span className="font-headline-lg text-3xl sm:text-5xl font-extrabold text-[#1b1c1a] leading-none">
                    4.8
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-500 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[13px] sm:text-[16px] fill-1">
                        star
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mobile-only badge header next to 4.8 */}
                <div className="sm:hidden flex-1 pl-1">
                  <span className="font-label-md text-[10px] text-[#af101a] font-bold uppercase tracking-wider block">
                    Đánh Giá Google Maps
                  </span>
                  <span className="inline-block mt-0.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#eae8e5] text-[#5b403d]">
                    562+ Reviews
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex-1 min-w-0">
                <div className="hidden sm:flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="font-label-md text-[11px] text-[#af101a] font-bold uppercase tracking-widest block">
                    Đánh Giá Thực Tế Từ Google Maps
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#eae8e5] text-[#5b403d]">
                    562+ Reviews
                  </span>
                </div>
                <h2 className="font-headline-lg text-lg sm:text-2xl lg:text-3xl font-bold text-[#1b1c1a] leading-tight">
                  봄돈까스 - Cutlet Spring Thảo Điền
                </h2>
                <p className="font-body-sm text-xs sm:text-sm text-[#585757] mt-1 leading-relaxed">
                  Điểm trung bình 4.8/5.0 từ 562 thực khách đã ghé thăm và thưởng thức
                </p>
              </div>
            </div>

            {/* Link to Google Maps - Full width on mobile */}
            <div className="w-full lg:w-auto shrink-0 pt-1 lg:pt-0">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-2.5 sm:py-3 px-4 sm:px-5 rounded-xl bg-white hover:bg-[#eae8e5] text-[#1b1c1a] border border-[#eae8e5] font-label-md text-xs uppercase tracking-wider font-bold transition-all shadow-2xs flex items-center justify-center gap-2 cursor-pointer text-center group active:scale-98"
              >
                <span>Xem trên Google Maps</span>
                <span className="material-symbols-outlined text-[16px] text-[#af101a] transition-transform group-hover:translate-x-0.5">
                  open_in_new
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* 3 Real Google Maps Feedback Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 items-stretch">
          {GOOGLE_MAPS_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between rounded-2xl border border-[#eae8e5] bg-white p-5 sm:p-7 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Header: Stars + Credential Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[18px] fill-1">
                        star
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-[#835500] bg-[#feae2c]/15 px-2.5 py-0.5 rounded-full border border-[#feae2c]/30">
                    {review.authorCredential}
                  </span>
                </div>

                {/* Main Quote */}
                <p className="font-body-md text-xs sm:text-[13px] leading-relaxed text-[#2a241f] italic">
                  &ldquo;{review.quote}&rdquo;
                </p>

                {/* Owner Response Box */}
                {review.ownerReply && (
                  <div className="mt-4 p-3 rounded-xl bg-[#f5f3f0] border-l-2 border-[#af101a] text-[11px] text-[#5b403d] space-y-1">
                    <span className="font-bold text-[#af101a] uppercase text-[10px] block tracking-wide">
                      Phản hồi từ Cutlet Spring:
                    </span>
                    <p className="line-clamp-3 leading-relaxed">
                      {review.ownerReply}
                    </p>
                  </div>
                )}
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-5 border-t border-[#f2ede7] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white shadow-2xs ${review.authorBg}`}
                  >
                    {review.authorInitials}
                  </div>
                  <div>
                    <h4 className="font-title-md text-sm font-bold text-[#1b1c1a]">
                      {review.authorName}
                    </h4>
                    <span className="font-body-sm text-[11px] text-[#786659]">
                      {review.timeAgo}
                    </span>
                  </div>
                </div>

                {/* Google Maps Icon Badge */}
                <span className="text-[10px] font-bold text-[#585757] flex items-center gap-0.5 shrink-0 bg-[#f5f3f0] px-2 py-1 rounded">
                  <span className="text-[#4285F4] font-extrabold">G</span>
                  <span>Maps</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to read more on Google Maps */}
        <div className="mt-10 text-center">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-label-md text-xs uppercase tracking-wider text-[#af101a] hover:text-[#930010] font-bold hover:underline"
          >
            <span>Đọc thêm toàn bộ 562+ đánh giá của khách trên Google Maps</span>
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};
