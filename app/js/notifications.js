class Notification{
    constructor(error_class, sussess_class){
        this.error_block = document.querySelector(error_class);
        this.sussess_block = document.querySelector(sussess_class);
    }
    show(boolean, text){
        let self = this;
        if (boolean){
            self.sussess_block.textContent = text;
            self.sussess_block.classList.add('active-notification');
            document.querySelector('.overlay').classList.add('visible');
        } else {
            self.error_block.textContent = text;
            self.error_block.classList.add('active-notification');
            document.querySelector('.overlay').classList.add('visible');
        }
    }
    hide(){
        let self = this;
        document.querySelector('.active-notification').classList.remove('active-notification');
        document.querySelector('.overlay').classList.remove('visible');
    }

};
let notif = new Notification('.notification.error', '.notification.success');

document.querySelector('.overlay').addEventListener('click', function () {
    notif.hide();
});

let forms = [].slice.call(document.querySelectorAll('form'));
forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let current = this;
        if (current['email'].value.length === 0){
            notif.show(false, 'Enter your e-mail')
        } else {
            notif.show(true, 'Thanks, we received your message')
        }
    })
});