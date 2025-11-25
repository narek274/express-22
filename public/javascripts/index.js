document.addEventListener("click", async (event) => {
  const btn = event.target.closest('[data-action="add"]');
  if (!btn) return;

  const id = btn.id;

  try {
    const res = await fetch("http://localhost:3000/bin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (!res.ok) {
      throw new Error("ERROR");
    }

    const data = await res.json();
    console.log("res", data);
  } catch (err) {
    console.error(err);
  }
});
