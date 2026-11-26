// Formulario «Clínica a medida»: envía a la función contact-request de Supabase.
(function () {
  var f = document.getElementById("f-clinica");
  if (!f) return;
  var started = Date.now();
  var msg = f.querySelector(".fmsg");
  var btn = f.querySelector("button[type=submit]");
  var URL = "https://rsjqlnqsogkeddjxzbal.supabase.co/functions/v1/contact-request";
  var KEY = "sb_publishable_nnfHall4GCDKVVdwGXY1Lg_Fae1ZxlX"; // clave pública
  function show(text, ok) { msg.textContent = text; msg.className = "fmsg " + (ok ? "ok" : "err"); }
  f.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!f.checkValidity()) { show("Revisa los campos marcados con * y acepta la política de privacidad.", false); f.reportValidity(); return; }
    var d = new FormData(f);
    var body = { privacy: f.privacy.checked, elapsed_ms: Date.now() - started };
    ["name", "centre", "email", "phone", "professionals", "sites", "message", "website"].forEach(function (k) { body[k] = d.get(k) || ""; });
    btn.disabled = true; show("Enviando…", true);
    fetch(URL, { method: "POST", headers: { "Content-Type": "application/json", apikey: KEY, Authorization: "Bearer " + KEY }, body: JSON.stringify(body) })
      .then(function (r) { return r.json().then(function (j) { return { ok: r.ok && j.ok, j: j }; }); })
      .then(function (res) {
        if (res.ok) { f.reset(); show("¡Gracias! Hemos recibido tu solicitud y te escribiremos en 1–2 días laborables.", true); }
        else { show(res.j.error || "No hemos podido enviarla. Escríbenos a info@clinua.com.", false); btn.disabled = false; }
      })
      .catch(function () { show("No hemos podido enviarla. Escríbenos a info@clinua.com.", false); btn.disabled = false; });
  });
})();
