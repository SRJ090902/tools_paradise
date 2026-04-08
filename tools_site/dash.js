// dash.js — kept for compatibility; dashboard.html handles its own guard inline
(async () => {
  if (typeof tpClient === 'undefined') return;
  const { data: { user } } = await tpClient.auth.getUser();
  if (!user) window.location.href = 'login.html';
})();
