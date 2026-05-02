"use client";

import { useEffect } from "react";

export function BookingBehavior() {
  useEffect(() => {
    const packageSelect = document.querySelector<HTMLSelectElement>("#packageSelect");
    const estimatePrice = document.querySelector<HTMLElement>("#estimatePrice");
    const form = document.querySelector<HTMLFormElement>("#bookingForm");
    const formMessage = document.querySelector<HTMLElement>("#formMessage");
    const dateInput = form?.querySelector<HTMLInputElement>('input[type="date"]');

    if (!packageSelect || !estimatePrice || !form || !formMessage || !dateInput) return;

    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    const todayValue = today.toISOString().slice(0, 10);

    dateInput.min = todayValue;
    dateInput.value = todayValue;

    const updateEstimate = () => {
      estimatePrice.textContent = "\u00a5" + packageSelect.value + " \u8d77";
    };

    const handleSubmit = (event: SubmitEvent) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("name") || "\u4e3b\u4eba").trim() || "\u4e3b\u4eba";
      const time = String(data.get("time") || "");
      formMessage.textContent = name + "\uff0c\u9884\u7ea6\u4fe1\u606f\u5df2\u6536\u5230\uff0c\u6211\u4eec\u4f1a\u5c3d\u5feb\u548c\u4f60\u786e\u8ba4 " + time + " \u7684\u5230\u5e97\u65f6\u95f4\u3002";
      form.reset();
      dateInput.value = todayValue;
      packageSelect.value = "168";
      updateEstimate();
    };

    packageSelect.addEventListener("change", updateEstimate);
    form.addEventListener("submit", handleSubmit);
    updateEstimate();

    return () => {
      packageSelect.removeEventListener("change", updateEstimate);
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return null;
}
