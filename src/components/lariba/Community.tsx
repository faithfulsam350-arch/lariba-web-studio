import stars from "@/assets/lariba/frame-496.png.asset.json";
import { reviews } from "@/data/lariba";

const Community = () => {
  return (
    <section className="bg-linear-to-l from-white to-brand-cream px-5 py-10 sm:px-8 lg:px-[120px] lg:py-9">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 lg:flex-row lg:justify-between lg:gap-24">
        <div className="flex w-full max-w-[520px] flex-col gap-4">
          {reviews.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className={`flex items-center gap-[18px] rounded-lg border border-brand-green-soft bg-gray-50 p-[18px] ${
                index === 1 ? "lg:ml-[101px]" : ""
              }`}
            >
              <img src={review.avatar} alt={review.name} className="h-[92px] w-[92px] shrink-0 rounded-full" />
              <div className="flex min-w-0 flex-col gap-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-brand-ink">{review.name}</p>
                  <img src={stars.url} alt="4 out of 5 stars" className="h-4 w-auto" />
                </div>
                <p className="text-sm text-brand-ink">{review.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex w-full max-w-[477px] flex-col gap-5 rounded-[20px] p-4">
          <h2 className="font-display text-2xl text-black lg:text-4xl">Our Commitment to the Community</h2>
          <div className="text-lg leading-snug text-black lg:text-2xl">
            <p>
              We believe in giving back to the communities we serve. Through our Corporate Social Responsibility (CSR)
              initiatives, we aim to:
            </p>
            <ul className="mt-3 list-disc pl-6">
              <li>Promote financial literacy.</li>
              <li>Support small businesses and entrepreneurs.</li>
              <li>Contribute to charitable causes that align with Islamic principles.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
