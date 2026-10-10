// Ödeme servisi istemcisi (demo)
const TIMEOUT_MS = 10000;

function pay(amount) {
  if (typeof amount !== "number" || !Number.isFinite(amount) || amount <= 0) throw new Error("Geçersiz tutar: sıfır, negatif ya da sayı olmayan tutar gönderilemez");
  return { status: "ok", amount, timeoutMs: TIMEOUT_MS };
}

module.exports = { pay, TIMEOUT_MS };
