// Ödeme servisi istemcisi (demo)
const TIMEOUT_MS = 10000;

function pay(amount) {
  if (!(amount > 0)) throw new Error("Geçersiz tutar");
  return { status: "ok", amount, timeoutMs: TIMEOUT_MS };
}

module.exports = { pay, TIMEOUT_MS };
