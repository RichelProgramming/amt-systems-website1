import React, { useState } from "react";
import RatingStars from "./RatingStars";
import { useTranslation } from "react-i18next";

export default function ReviewForm({ onSubmit }) {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", rating: 0, title: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = t("reviewForm.errors.nameRequired");
    if (!form.rating || form.rating < 1) e.rating = t("reviewForm.errors.ratingRequired");
    if (!form.message.trim()) e.message = t("reviewForm.errors.messageRequired");
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    onSubmit?.({ ...form });
    setForm({ name: "", email: "", rating: 0, title: "", message: "" });
    setErrors({});
  };

  return (
    <form className="rform" onSubmit={handleSubmit} noValidate>
      <div className="rform__row">
        <label className="rform__label">{t("reviewForm.yourRating")}</label>
        <div>
          <RatingStars value={form.rating} onChange={(n) => setForm((f) => ({ ...f, rating: n }))} />
          {errors.rating && <div className="rform__error">{errors.rating}</div>}
        </div>
      </div>

      <div className="rform__row">
        <label className="rform__label" htmlFor="name">{t("reviewForm.name")}</label>
        <input id="name" className="rform__input" value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} />
        {errors.name && <div className="rform__error">{errors.name}</div>}
      </div>

      <div className="rform__row">
        <label className="rform__label" htmlFor="email">{t("reviewForm.email")}</label>
        <input id="email" type="email" className="rform__input" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} />
      </div>

      <div className="rform__row">
        <label className="rform__label" htmlFor="title">{t("reviewForm.title")}</label>
        <input id="title" className="rform__input" value={form.title} onChange={(e)=>setForm({...form, title: e.target.value})} />
      </div>

      <div className="rform__row">
        <label className="rform__label" htmlFor="message">{t("reviewForm.yourReview")}</label>
        <textarea id="message" rows="4" className="rform__textarea" value={form.message} onChange={(e)=>setForm({...form, message: e.target.value})} />
        {errors.message && <div className="rform__error">{errors.message}</div>}
      </div>

      <div className="rform__actions">
        <button className="btn btn--primary" type="submit">{t("reviewForm.publishReview")}</button>
      </div>
    </form>
  );
}
