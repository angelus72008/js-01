const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let answer = prompt("Введите пожалуйста пароль");
if(!answer) {
    message="Отменено пользователем"
};
if(answer === ADMIN_PASSWORD) {
    message="Добро пожаловать!"
};
if(answer) {
    message="Доступ запрещен, неверный пароль"
};
alert(message)