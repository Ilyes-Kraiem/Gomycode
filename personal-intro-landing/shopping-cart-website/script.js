const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const itemsContainer = $('.items');
const totalField = $('#finalPrice');
function recalcTotal() {
  let total = 0;
  $$('.Item').forEach((item) => {
    const qtyInput = $('.Quant', item);
    const priceEl = $('.price', item);
    const qty = Math.max(0, parseInt((qtyInput.value || '0').toString().trim(), 10) || 0);
    const price = parseFloat((priceEl.textContent || '0').toString().trim()) || 0;
    total += qty * price;
  });
  totalField.value = total.toFixed(2);
}
function sanitizeQtyInput(input) {
  const digits = (input.value || '').replace(/[^\d]/g, '');
  input.value = digits === '' ? '0' : String(parseInt(digits, 10));
}
itemsContainer.addEventListener('click', (e) => {
  const plusBtn = e.target.closest('.plus-btn');
  if (plusBtn) {
    const item = plusBtn.closest('.Item');
    const q = $('.Quant', item);
    const current = parseInt((q.value || '0').trim(), 10) || 0;
    q.value = String(current + 1);
    recalcTotal();
    return;
  }
  const minusBtn = e.target.closest('.minus-btn');
  if (minusBtn) {
    const item = minusBtn.closest('.Item');
    const q = $('.Quant', item);
    const current = parseInt((q.value || '0').trim(), 10) || 0;
    q.value = String(Math.max(0, current - 1)); 
    recalcTotal();
    return;
  }
  const delBtn = e.target.closest('.delete');
  if (delBtn) {
    delBtn.closest('.Item').remove();
    recalcTotal();
    return;
  }
  const likeBtn = e.target.closest('.like');
  if (likeBtn) {
    const heart = likeBtn.querySelector('.fa-heart');
    heart.classList.toggle('i'); 
    return;
  }
});
$$('.Quant').forEach((input) => {
  input.addEventListener('input', () => {
    sanitizeQtyInput(input);
    recalcTotal();
  });
  input.value = String(parseInt((input.value || '0').trim(), 10) || 0);
});
recalcTotal();
