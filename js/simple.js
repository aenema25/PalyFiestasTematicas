const menuList = document.getElementById('menu')
const menu = () => { 
    menuList.style.display === 'none' || menuList.style.display === '' ? menuList.style.display = 'block' : menuList.style.display = 'none';
}
