//step.1--add click hendler with the submit button

document.getElementById('btn-submit').addEventListener('click', function () {


    //step.2---get the email address inside the email input field
    //a;ways remember to use .value to get text from an input feild

    const emailfeild = document.getElementById('user-email');
    const email = emailfeild.value;


    // step.3--get password
    //3.a-- set id on the html elemet
    //3.b--get the element
    //3.c-- get the value from the element

    const passwordfeild = document.getElementById('user-password');
    const password = passwordfeild.value;

    //step.4--verify email and password and check whether valid user or not
    //Danget : Donot verify emil password on the client side
    
    if (email === 'sakibkhan@gmail.com' && password === 'kaxirimon') {
        window.location.href = 'box.html'
    }
    else {
        alert('tui password janos na . ami toke tejjo sontan kore dilam');
    }

})