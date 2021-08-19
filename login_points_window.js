const login_num_now = localStorage.getItem('login_num');
const login_points_now = localStorage.getItem('login_points');

const box_area = document.createElement('div');
box_area.setAttribute('id', 'instagram_points_area_box');

document.body.appendChild(box_area);

const points_area = '<p id="instagram_points_points_num">' + login_points_now + '<span id="instagram_points_points_num_child">pt</span></p>';
const login_num_area = '<p id="instagram_points_login_num">' + login_num_now + '<span id="instagram_points_login_num_child">logins</span></p>';
const bonus_area = '<p id="instagram_points_bonus">BONUS! +10pt!!!</p>';

const points_box = document.getElementById('instagram_points_area_box');
points_box.innerHTML = points_area + login_num_area;

if (login_num_now % 10 == 0) {
  points_box.insertAdjacentHTML('beforeend', bonus_area)
};

setTimeout(function(){
  points_box.remove()
}, 1000 * 10);
