async function sendCode() {
  const name = document.getElementById("mcname").value;
  const res = await fetch("/api/request-code", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name })
  });
  const data = await res.json();
  document.getElementById("response").textContent = data.message;
  if (data.success) {
    document.getElementById("codeSection").style.display = "block";
  }
}

async function verifyCode() {
  const name = document.getElementById("mcname").value;
  const code = document.getElementById("code").value;
  const res = await fetch("/api/verify-code", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, code })
  });
  const data = await res.json();
  document.getElementById("response").textContent = data.message;
}
