const emailReceiver = 'ahmadlutfi143@gmail.com'


function submitForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let object = document.getElementById('object').value;
    let message = document.getElementById('message').value;

    if (name == '') {
        alert('Nama harap di isi');
    }
    if (email == '') {
        alert('Wajib Menyertakan Email');
    }
    if (phone == '') {
        alert('Pastikan Nomor Handphone Aktif');
    }
    if (object == '') {
        alert('Pilih Subject anda');
    }
    if (message == '') {
        alert('Silahkan Tulis Pesan');
    }

    let a = document.createElement('a');
    a.href = `mailto:${emailReceiver}?subject=${object}&body=Hai, Perkenalkan Nama saya ${name}. Saya ingin menanyakan tentang ${object}, ${message} Atas Perhatiannya Terimakasih.`;
    a.click();
    
}