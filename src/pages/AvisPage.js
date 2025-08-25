import React, { useEffect, useMemo, useState } from "react";
import ReviewForm from "../components/ReviewForm";
import ReviewCard from "../components/ReviewCard";
import RatingStars from "../components/RatingStars";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";

const LS_KEY = "amt-reviews";

export default function ReviewsPage() {
  const { t } = useTranslation();
  const [reviews, setReviews] = useState([]);
  const [sort, setSort] = useState("new");
  const [filter, setFilter] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem(LS_KEY);
    if (saved) setReviews(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(reviews));
  }, [reviews]);

  const addReview = (data) => {
    const r = { id: crypto.randomUUID(), ...data, createdAt: Date.now() };
    setReviews((prev) => [r, ...prev]);
  };

  const stats = useMemo(() => {
    if (!reviews.length) return { avg: 0, count: 0, histogram: [0,0,0,0,0] };
    const histogram = [0,0,0,0,0];
    let sum = 0;
    for (const r of reviews) { histogram[r.rating-1]++; sum += r.rating; }
    return { avg: +(sum / reviews.length).toFixed(2), count: reviews.length, histogram };
  }, [reviews]);

  const shown = useMemo(() => {
    let list = [...reviews];
    if (filter) list = list.filter((r) => r.rating === filter);
    if (sort === "new") list.sort((a,b) => b.createdAt - a.createdAt);
    else list.sort((a,b) => b.rating - a.rating || b.createdAt - a.createdAt);
    return list;
  }, [reviews, sort, filter]);

  return (
    <main className="reviews-page">
      <LanguageSwitcher />
      <section className="rp__hero">
        <h1>{t("reviews.heroH1")}</h1>
        <p>{t("reviews.heroP")}</p>
      </section>

      <section className="rp__summary">
        <div className="rp__avg">
          <div className="rp__avg-num">{stats.avg}</div>
          <RatingStars value={Math.round(stats.avg)} readOnly size="md" />
          <div className="rp__count">{stats.count} {t("reviews.countSuffix")}</div>
        </div>
        <div className="rp__filters">
          <label>{t("reviews.filterBy")}</label>
          <select value={filter} onChange={(e)=>setFilter(+e.target.value)}>
            <option value={0}>All</option>
            {[5,4,3,2,1].map((n)=>(<option key={n} value={n}>{n} ★</option>))}
          </select>
          <label>{t("reviews.sortBy")}</label>
          <select value={sort} onChange={(e)=>setSort(e.target.value)}>
            <option value="new">{t("reviews.sortNew")}</option>
            <option value="top">{t("reviews.sortTop")}</option>
          </select>
        </div>
      </section>

      <section className="rp__grid">
        <div className="rp__left">
          <h2>{t("reviews.leaveReview")}</h2>
          <ReviewForm onSubmit={addReview} />
        </div>
        <div className="rp__right">
          <h2>{t("reviews.allReviews")}</h2>
          {shown.length === 0 && <div className="rp__empty">{t("reviews.empty")}</div>}
          <div className="rp__list">
            {shown.map((r) => (<ReviewCard key={r.id} review={r} />))}
          </div>
        </div>
      </section>
    </main>
  );
}
