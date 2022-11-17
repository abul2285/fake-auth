const fetchProfile = async () => {
  const profile = await fetch('/profile').then((res) => res.json());
  return profile;
};

const login = async (setIsAuth) => {
  const { status } = await fetch('/login', { method: 'POST' });
  if (status !== 200) return;
  setIsAuth(true);
};

const logout = async (setIsAuth) => {
  const { status } = await fetch('/logout', { method: 'POST' });
  if (status !== 200) return;
  setIsAuth(false);
};

export { fetchProfile, login, logout };
