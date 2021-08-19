const login_num = Number(localStorage.getItem('login_num'));
const login_points = Number(localStorage.getItem('login_points'));

if (login_num == null) {
  localStorage.setItem('login_num', 1);
  localStorage.setItem('login_points', 1);
} else {
  localStorage.setItem('login_num', login_num + 1);
};

if ((login_num + 1) % 10 == 0) {
  localStorage.setItem('login_points', login_points + 11);
} else {
  localStorage.setItem('login_points', login_points + 1);
}
